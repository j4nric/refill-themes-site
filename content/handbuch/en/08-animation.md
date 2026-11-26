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
| “Text animation” | Text builds up the first time it scrolls into view. “Headings only”: large headings word by word or line by line. “Headings + accents”: also profile scales, timelines, key figures, steps, benefits and text highlights (the marker follows the scroll). “All text”: also body text and quotes, paragraph by paragraph. | Off |
| “Build up headings” (older setting) | Replaced by “Text animation” and only applies while “Off” is selected there. Large headings appear **“By word”** or **“By line”** (setting “Build-up”). The full text stays available to search engines and screen readers. | off |
| “Parallax images” | Images in the “Image with text” block and in the “Image” block (fit “Fill area”) move slightly slower than the page. In the “Image with text” block, parallax can be switched on or off per block; “On” works there without this setting and without the main switch. | off |
| **Feedback and transitions** | | |
| “Hover and buttons” | On hover, the hover color of primary and secondary buttons slides in from the side instead of switching; buttons give slightly when pressed, footer links get a growing underline. Mouse only. Without this setting, buttons only change color on hover. | off |
| “Page transition” | “Crossfade”, “Rise”, “Slide” or “No transition” when moving between pages. | Crossfade |

Settings such as “Style” or “Build-up” only appear once their effect is switched on.

**Intensity in detail:** “Subtle” moves content by 12 px over half a second – barely noticeable and right for any store. “Normal” is the upper limit for product rows and headings. “Expressive” is meant for campaign and landing pages.

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

## Other motion in the theme

These effects are set where they take effect. Reduced motion applies to them as well.

| Effect | Where |
|---|---|
| Opening submenus, search, country/language | Header → “Drop-down panels” → “Animation”, see [Header](04-header.md) |
| Zoom and second image on product cards | Theme settings → “Product data” → “Product cards”, see [Collections](05-collections.md#image-motion-on-hover) |
| Full-screen gallery | “Product media” block → “Full screen on image click”, see [Product page](06-product-page.md#full-screen) |
| Rolling numbers in the facts table | “Facts table” block → “Roll in numbers when first visible” |
| Scrolling text | “Scrolling text” block (with a pause button) |
| Line motifs on scroll | “Line art” block and Section → “Decoration”, see above |
| Background video (with pause button) | Section → “Background” and “Image with text” block → “Video instead of image”, see [Sections and blocks](03-sections-and-blocks.md#the-principle) |

Page transitions have one special touch: when someone clicks a product card, the product image travels into the product page gallery while the header stays put. That's part of “Page transition” and goes away with “No transition”.
