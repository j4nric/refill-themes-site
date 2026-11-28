# Animation

Motion in Refill is sparing and switchable. All effects live in one place: **Theme settings → “Animation”**. On top of that there's the **“Scroll story”** section and a few effects that belong to a specific area (header, product cards, facts table).

Three rules apply to everything:

- **No cost to loading speed.** The effects code only loads when at least one effect is on, and only after the page has rendered. Content in the first visible area is never hidden or delayed.
- **Without JavaScript, everything is visible right away.**
- **Reduced motion wins.** Visitors who ask for it in their operating system or in the [accessibility panel](13-accessibility.md#accessibility-panel-optional) see no animations – even if they switch it on mid-visit. This also covers the carousel, gallery, full screen view, rolling numbers and the header panels.

In the theme editor, effects never hide anything, so you can see and edit all content.

## Theme settings → Animation

| Setting | Effect | Default |
|---|---|---|
| “Enable animations” | Master switch for all effects, the scroll story and page transitions. When off, the other settings disappear. Short feedback when opening and closing (e.g. the cart) remains. | on |
| “Intensity” | Distance, duration and staggering of all effects: “Subtle”, “Normal”, “Expressive”. | Subtle |
| **While scrolling** | | |
| “Reveal sections” | Content of “Section” sections appears as it scrolls into view. **“Style”**: “Rise” or “Fade only”. | on, Rise |
| “Fly in product rows” | Product cards in grids arrive one after another from the side – from the right when scrolling down, from the left when scrolling up. | off |
| “Text animation” | Text builds up the first time it scrolls into view. “Headings only”: headings word by word or line by line, the small heading (label) above fades in with them. “Headings + accents”: also profile scales, timelines, key figures, steps, benefits and text highlights (the marker follows the scroll). “All text”: also body text and quotes – each paragraph appears as soon as it scrolls into view itself. Which headings take part is described under [What builds up](#what-builds-up). | Off |
| “Text animation speed” | “Slow”, “Normal” or “Fast” – duration and spacing of all text animations, the same everywhere (headings, accents, body text, highlights; blog posts included). Works on top of “Intensity”; “Normal” is the previous pace. Appears once a text animation is selected. | Normal |
| “Build up headings” (older setting) | Replaced by “Text animation” and only applies while “Off” is selected there. Large headings appear **“By word”** or **“By line”** (setting “Build-up”). The full text stays available to search engines and screen readers. | off |
| “Parallax images” | Images in the “Image with text” block and in the “Image” block (fit “Fill area”) move slightly slower than the page. In the “Image with text” block, parallax can be switched on or off per block; “On” works there without this setting and without the main switch. | off |
| **Feedback and transitions** | | |
| “Hover and buttons” | On hover, the hover color of primary and secondary buttons slides in from the side instead of switching; buttons give slightly when pressed, footer links get a growing underline. Mouse only. Without this setting, buttons only change color on hover. | off |
| “Page transition” | “Crossfade”, “Rise”, “Slide” or “No transition” when moving between pages. | Crossfade |

Settings such as “Style” or “Build-up” only appear once their effect is switched on.

**Intensity in detail:** “Subtle” moves content by 12 px over half a second – barely noticeable and right for any store. “Normal” is the upper limit for product rows and headings. “Expressive” is meant for campaign and landing pages.

### What builds up

Text animation follows one rule: **whatever is already on screen when the page loads stays still; whatever scrolls into view later builds up** – once, the first time it appears.

- **Headings:** every heading in the main content, in every section – product and collection pages, “You might also like” recommendations and blog posts included, also as “H3”. The small heading (label) of the “Heading” block belongs to it.
- **Not:** titles of product, blog post and collection cards, list entries (steps, ingredients, answers), accordion rows, headings in carousels and tab bars (they scroll sideways), and the header and footer.
- **At the very top:** hero banners, collection headers and product titles are usually in the first visible area and therefore appear immediately – this keeps loading time (largest element) short and avoids flicker. If the same heading sits further down, it builds up. In the “Image with text” block, “Show immediately” switches the animation off for the text area on purpose.
- **At the very bottom:** content the page can no longer scroll far enough up appears finished right away.

**Recommendation:** switch effects on one at a time and check them on a phone. More than two or three effects at once pull attention away from the product. Each style ships with a subtle selection (see [Theme styles](02-presets.md)).

**Browsers:** the smooth scroll story runs in Chrome, Edge and Safari 26 or later; elsewhere it uses soft crossfades instead. Parallax works in all browsers: Chrome, Edge and Safari 26 or later compute it themselves, in Firefox and older Safari a small script takes over that only loads when parallax is on. Page transitions show in Chrome, Edge and Safari 18.2 or later; other browsers change pages without a transition.

## “Scroll story” section

Slides that blend into each other as you scroll: the current slide stays in place, the next fades in on top and the text changes. Good for origin, production or “How the subscription works”.

1. **“Add section”** → category **“Media”** → **“Scroll story”**.
2. For each **“Slide”**: **“Image”**, **“Label”**, **“Heading”**, **“Text”**, an optional **“Button”** (first the **“Label”**, then **“Link”** appears and – with a link – **“Style”**) and, under **“Design”**, a **“Color scheme”**. A slide without an image becomes a full-width text slide.
3. Section settings:

| Group | Setting | Effect |
|---|---|---|
| “Animation” | “Transition” | “Crossfade”, “Crossfade with image zoom” (default) or “Image slides in”. |
| | “Scroll distance per slide” | “Short”, “Medium” (default), “Long” – how far visitors scroll until the next slide is fully shown. |
| “Design” | “Image (desktop)” | Image “First” (default), “Last” or “Alternating” next to the text. |
| | “Number slides (01, 02 …)” | A number with a progress line above each slide (on by default). |

The “Animation” group only appears when **“Enable animations”** is on under Theme settings → “Animation”; otherwise a note says that the slides are stacked.

Tips:

- Up to six slides and short texts – one statement per slide. Each slide fills the screen; on phones the text sits below the image.
- If the scroll story is at the very top of the page, turn on **“Load image immediately”** for the first slide (shown once an image is chosen).
- With “Enable animations” off or reduced motion set, the slides are stacked like normal sections.
- In the theme editor, selecting a slide scrolls the preview to where it's fully visible.

## Accents

**“Heading”**, **“Text”** and **“Button”** have an **“Accent”** group: a ready-made line motif from the same library as line art and decoration, without a separate block and without positioning by hand. The default is **“No accent”** – the block stays exactly as before.

| Setting | Effect |
|---|---|
| **“Motif”** | One of the 27 motifs (list under [Motifs by purpose](#motifs-by-purpose)). For headings and text, the highlight motifs work best; for buttons, the arrow or sparkle. |
| **“Position”** (heading, text) | **“At the marked word”** (default): put a word in double square brackets, e.g. `Refill instead of [[buying new]]`. “Circle around a word” and “Frame corners” enclose the word; “Swash”, “Double underline”, “Zigzag” and “Waves” sit underneath; all other motifs sit small at the top of the word’s end. The motif replaces the text marker there. With several marked words, the first one counts. Without a marked word the accent sits below the text, with an “Only visible in the editor” note in the theme editor. Other positions: **“Below the text”**, **“Above the text”** (both take up a little space), **“Left”**, **“Right”**, **“Top right corner”**, **“Bottom left corner”**, **“Behind the text”** (for calm motifs such as contour lines in “Scheme: rule”). |
| **“Position”** (button) | **“Points at the button (left)”** (default) or **“(right)”**: an arrow next to the button; **“Above the button”**; **“Sparkle on hover”**: the motif only appears while the pointer is over the button or it has keyboard focus. |
| **“Size”** | Small, Medium, Large – relative to the block’s font size, so larger on big headings than on body text. |
| **“Color”** | Color scheme roles or brand colors, default “Scheme: accent”. |
| **“Stroke weight”** | Fine, Medium, Bold – as for line art. |
| **“Animation”** | **“Draw”** (the line appears), **“Float”**, **“Pulse”**, **“Wiggle gently”** or **“None”**. |
| **“Play”** | **“Once when it comes into view”** (default; “Draw” waits invisibly until half the accent is in the window), **“On mouse hover”** or **“On page load (about 5 s)”** (repeats for just over 4 seconds and then stops, so the page stays accessible without a pause button; use sparingly, at most once per view). Tip: short marks of one to three words work best; long marks wrap as a block when an accent is set. |
| **“Show on phones”** | Off: the accent is hidden below a window width of 750 px. |

- Accents move nothing, don’t catch clicks and are skipped by screen readers. “Below the text” and “Above the text” reserve their space from the start; all other positions lie over or behind the block.
- With “Reduce motion” (system or accessibility panel), without JavaScript and in forced colors the motif stays still and fully drawn; “Behind the text” is hidden with “High contrast”.
- On phones, “Left”, “Right” and the arrows move to the top corner of the text or button so nothing sticks out past the screen edge.
- Unlike line art and decoration, accents move over time, not on scroll. The settings under “Theme settings → Animation” don’t apply here either.
- In the theme editor the accent plays again when you select the block.

**When to use “Free decoration”?** When a motif should sit freely in the section (at x/y), you need your own graphic, or the motif should move as you scroll. For anything attached to a heading, a word or a button, the accent is simpler.
## “Window view” section

A section like a window in the page: behind it sits an image, a video, a color or a pattern. As visitors scroll, the background stays put (or moves more slowly) while the page glides over it. Works well as a calm break between product sections, e.g. a mood image with one sentence and a button.

1. **“Add section”** → category **“Media”** → **“Window view: image”** or **“Window view: pattern”**.
2. Add content as **“Placed content”**; inside it, as in a group, add **“Heading”**, **“Text”**, **“Button”**, **“Image”** and so on. Several “Placed content” blocks sit at different spots in the window. The **“Free decoration”** block fits in too (its own x/y position, see [“Free decoration” block](#free-decoration-block)).
3. Section settings:

| Group | Setting | Effect |
|---|---|---|
| – | “Color scheme (text and overlay)” | Text and overlay color. Light image → light scheme, dark image → dark scheme (default “Ink”). |
| | “Overlay” | The scheme’s background color over the background, 0–90% (default 40%). |
| “Background” | “Type” | “Image” (default), “Video”, “Color” or “Pattern”. |
| | “Image”, “Image position” | Landscape, at least 1600 px. A focal point set in Shopify (Content › Files) takes priority over the image position. With video, the image is the still. |
| | “Load immediately (section at the top)” | Only for a window view on the first screen: the image loads with high priority and the content appears without animation. |
| | “Pattern”, “Pattern size”, “Pattern color”, “Background color scheme” | Dots, grid, lines or diagonal lines in a scheme’s colors; “Color” uses that scheme’s background (gradients too). |
| “Motion” | “On scroll” | “Fixed (page glides over it)” (default), “Parallax: moves slowly”, “Parallax: moves faster”, “None (scrolls along)”. |
| “Window” | “Height” | “Small”, “Medium” (default), “Large”, “Full screen” or “Fit content”. Longer content always makes the window taller; nothing is cut off. |
| | “Width” | “Full width (edge to edge)”, “With margin” (default: space to the page edge all around, the window sits within the page) or “Page width”. |
| | “Shape” | “Rectangle”, “Rounded” or “Arch” (curved top). |
| | “Padding”, “On mobile” | “Stacked” (default: all content in sidebar order, full width) or “Placed freely” (same position as on desktop, with “Width on mobile”). |

**“Placed content”:** **“Position”** “On the grid (9 points)” with **“Spot in the window”** (top left … bottom right) or “Free (x/y)” with **“Horizontal”** and **“Vertical”** in percent (0% = left or top, 100% = right or bottom; the content always stays inside the window). **“Width”** in percent of the window area, **“Width on mobile”** (only with “On mobile: Placed freely”), **“Horizontal alignment”**, **“Spacing between blocks”** and **“Panel behind the text”**: “None” (default), “Solid” or “Translucent”, each with **“Panel color scheme”**. In right-to-left languages, left and right swap sides.

Tips:

- **Legibility:** text sits directly on the image only with enough overlay (contrast at least 4.5:1). For busy images choose “Panel behind the text: Solid”.
- **Order:** screen readers and keyboard follow the order in the sidebar, not the position in the window. Arrange the content in reading order.
- **Reduce motion** (operating system or [accessibility panel](13-accessibility.md)): the background stays still in the window. Browsers without parallax support (Firefox, Safari before version 26) show parallax like “Fixed”. With “High contrast” and forced colors the background is hidden.
- The effect needs no JavaScript and works on iPhone too. It does not depend on “Enable animations”; only the reveal of the content follows the theme settings.
- In the theme editor, with “Free (x/y)” the selection outlines the whole window area – the content itself sits at its position.

## Line art and decoration

The **“Line art”** block and every section’s **“Decoration”** group show the same line motifs. **“On scroll”** sets what the motif does while it passes through the window:

| Setting | Effect |
|---|---|
| Draw (line appears as you scroll) | The line appears until the motif reaches about the middle of the window, then stays fully drawn. |
| Drift (parallax) | The motif moves slightly against the scroll direction. |
| Wave (moves sideways) | The motif moves sideways by one width; waves continue seamlessly. |
| Rotate | The motif turns up to 40° either way and stands straight in the middle. |
| Dot travels along | A dot moves along the line from start to end (e.g. timeline, orbit). |
| Still (no motion) | No motion. |

- Motion follows scrolling only, never time; nothing runs by itself.
- With reduced motion (system or accessibility panel) and without JavaScript the motif stays still and fully drawn; the dot rests at the end of the line.
- Current browsers (Chrome, Edge, Safari 26 and later) animate the motifs without an extra script. Other browsers load a small script that only works while a motif is visible.
- The settings under “Theme settings → Animation” do not apply here: choosing a scroll behavior switches the motion on deliberately.

### Which block to use

Three blocks and the [accents](#accents) use the same 27 motifs:

- **“Line art”** sits in the content like an image (for example under a heading or between columns) and takes up space.
- **“Free decoration”** (for advanced use) lies freely over or behind the area it is placed in and shifts nothing – or, with “In content”, sits in the flow like line art. Instead of a motif it can show your own graphic.
- **“Line animation”** shows wave lines that move sideways while scrolling (its own motion, no motif choice).

For a motif behind a whole section, the section’s **“Decoration”** group is enough (see [Sections and blocks](03-sections-and-blocks.md#the-principle)).

### Motifs by purpose

The “Motif” list is ordered by purpose:

| Purpose | Motifs |
|---|---|
| Highlight | Circle around a word, Swash, Double underline, Zigzag line, Sparkle (three stars), Frame corners |
| Point out | Curved arrow, Check mark in a circle, Magnifying glass |
| Mood | Heart, Gift, Waves, Contour lines, Branch, Steam curls, Drop with ripples, Orbit |
| Communication | Speech bubble, Letter (envelope) |
| Structure | Path with dots, Connector line, Measuring scale |
| Subscription and refills | Cycle, Calendar page with check mark, Parcel with motion lines, Fill level, Clock |

- **Letter** suits newsletter sign-up and contact, e.g. as line art above the form or as an [accent](#accents) on the heading; with “Draw” the envelope appears first, then the flap and folds.
- **Circle around a word**, **Double underline** and **Swash** are easiest to attach to a heading word as an [accent](#accents) “At the marked word”.
- **Fill level:** with “Draw” the line in the jar rises from the bottom to its level; with “Dot travels along” a dot rises like a bubble.

### “Free decoration” block

The **“Free decoration”** block (category “Media”, called “Decoration” until 27 November 2026) places a line motif or your own graphic in a section, group or column. It is purely decorative: screen readers skip it and it does not catch clicks.

| Setting | Effect |
|---|---|
| **“Motif”** | One of the line motifs. Hidden as soon as an own graphic is selected. |
| **“Own graphic”** | SVG or PNG from “Files”, replaces the motif. **“Show graphic in the selected color”** tints it in “Color” (for single-color graphics with a transparent background). Stroke width, mirroring and repeats have no effect on own graphics and are hidden then; of the motions only “Drift” and “Rotate” apply, the others stay still. |
| **“Placement”** | **“Free”**: the decoration lies over or behind the area the block sits in (section, group or column) and shifts nothing. **“Horizontal”** and **“Vertical”** set the position in percent of that area; anything reaching past the edge is cut off. **“In content”**: the decoration takes up space like line art and sits between the other blocks. |
| **“Layer”** | “Free” only: **“Behind the content”** (default) or **“In front of the content”**. In front it can cover text – use it sparingly and with low “Opacity”. |
| **“Use group alignment”**, **“Alignment”** | “In content” only, as described under [Group and columns](03-sections-and-blocks.md#group-and-columns). |
| **“Size”**, **“Size on mobile”** | Width in percent of the area. “Mobile” here means a window narrower than 750 px, regardless of the column width. |
| **“Rotation”** | −180° to 180°. |
| **“Show on”** | “All devices”, “Desktop only” (window 750 px wide or more) or “Mobile only”. In the theme editor, the other preview shows an “Only visible in the editor” note in place of the decoration, so the block stays easy to find. |
| **“Color”**, **“Stroke width”**, **“Opacity”**, **“Mirror”**, **“Repeats side by side”** | Look as with line art; the stroke width is set freely in px. |
| **“On scroll”**, **“Speed”** | Motion as above; with reduced motion the decoration stays still. |

In forced colors (“High contrast”), freely placed decoration is left out because it would sit behind or over text.

## Other motion in the theme

These effects are set where they take effect. Reduced motion applies to them as well.

| Effect | Where |
|---|---|
| Opening submenus, search, country/language | Header → “Drop-down panels” → “Animation”, see [Header](04-header.md) |
| Zoom and second image on product cards | Theme settings → “Product data” → “Product cards”, see [Collections](05-collections.md#image-motion-on-hover) |
| Full-screen gallery | “Product media” block → “Full screen on image click”, see [Product page](06-product-page.md#full-screen) |
| Rolling numbers in the facts table | “Facts table” block → “Roll in numbers when first visible” |
| Timeline entries one after another | “Timeline” block → “Entry animation speed”: “Fast”, “Same as theme setting” (default, follows “Text animation speed”), “Slow”, “Very slow” – how long the line, dot and text of each entry take to appear, and the pause between entries. Appears with text animation “Headings + accents” or “All text” |
| Scrolling text | “Scrolling text” block (with a pause button). Scrolling text and the scrolling logo list show the button as an icon (default) or text: Theme settings → “Animation” → “Scrolling text” → “Pause button” |
| Line motifs on scroll | “Line art” block and Section → “Decoration”, see above |
| Background video (with pause button) | Section → “Background” and “Image with text” block → “Video instead of image”, see [Sections and blocks](03-sections-and-blocks.md#the-principle) |

Page transitions have one special touch: when someone clicks a product card, the product image travels into the product page gallery while the header stays put. That's part of “Page transition” and goes away with “No transition”.
