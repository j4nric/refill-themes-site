#!/usr/bin/env python3
"""Prüft _site/ auf tote interne Links und fehlende Sprungmarken. Aufruf nach build.py."""
import posixpath
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

SITE = Path(__file__).resolve().parent / "_site"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids = [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.append(a["id"])
        for attr in ("href", "src"):
            if a.get(attr) is not None:
                self.links.append(a[attr])


def parse(path: Path) -> Page:
    p = Page()
    p.feed(path.read_text(encoding="utf-8"))
    return p


def main() -> int:
    pages = {p: parse(p) for p in SITE.rglob("*.html")}
    errors = []
    for path, page in pages.items():
        rel = path.relative_to(SITE).as_posix()
        dupes = {i for i in page.ids if page.ids.count(i) > 1}
        if dupes:
            errors.append(f"{rel}: doppelte ids {sorted(dupes)}")
        for link in page.links:
            u = urlsplit(link)
            if u.scheme or link.startswith("//"):
                continue
            if u.path.startswith("/"):
                target = SITE / u.path.lstrip("/")
            elif u.path:
                target = SITE / posixpath.normpath(posixpath.join(posixpath.dirname(rel), u.path))
            else:
                target = path
            if target.is_dir():
                target = target / "index.html"
            if not target.exists():
                errors.append(f"{rel}: toter Link {link}")
                continue
            if u.fragment and target.suffix == ".html":
                ids = pages[target].ids if target in pages else parse(target).ids
                if unquote(u.fragment) not in ids:
                    errors.append(f"{rel}: Sprungmarke fehlt {link}")
    for e in errors:
        print(e)
    print(f"{len(pages)} Seiten geprüft, {len(errors)} Fehler")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
