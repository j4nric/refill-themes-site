#!/usr/bin/env python3
"""Kopiert die Kapitel des Händler-Handbuchs aus dem Theme-Repo in diese Website.

Aufruf:
    python3 sync_handbuch.py /pfad/zum/theme-repo

Quelle:  <theme-repo>/docs/handbuch/{de,en}/NN-name.md
Ziel:    content/handbuch/{de,en}/NN-name.md

Kapitel, die es in der Quelle nicht mehr gibt, werden im Ziel gelöscht, damit die
Website nur veröffentlicht, was auch im Theme-Repo steht. Danach `python3 build.py`.
"""
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TARGET = ROOT / "content" / "handbuch"
LANGS = ("en", "de")
CHAPTER = re.compile(r"^\d{2}-[a-z0-9-]+\.md$")


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__.strip())
        return 2
    source = Path(sys.argv[1]).expanduser().resolve() / "docs" / "handbuch"
    if not source.is_dir():
        print(f"Nicht gefunden: {source}")
        return 1
    for lang in LANGS:
        src_dir, dst_dir = source / lang, TARGET / lang
        if not src_dir.is_dir():
            print(f"Nicht gefunden: {src_dir}")
            return 1
        dst_dir.mkdir(parents=True, exist_ok=True)
        wanted = sorted(p.name for p in src_dir.iterdir() if CHAPTER.match(p.name))
        changed = 0
        for name in wanted:
            src, dst = src_dir / name, dst_dir / name
            if not dst.exists() or dst.read_bytes() != src.read_bytes():
                shutil.copyfile(src, dst)
                changed += 1
                print(f"  {lang}/{name}")
        for old in dst_dir.glob("*.md"):
            if old.name not in wanted:
                old.unlink()
                print(f"  {lang}/{old.name} (entfernt)")
        print(f"{lang}: {len(wanted)} Kapitel, {changed} geändert")
    return 0


if __name__ == "__main__":
    sys.exit(main())
