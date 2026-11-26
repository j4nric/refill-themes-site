# Sections and blocks

Every page in Refill is made of **sections**, and every section is made of **blocks**. The section sets color scheme, spacing and width; the blocks set the content. Almost every block can be placed in every section, and blocks can be nested.

## The principle

| Level | Example | Settings |
|---|---|---|
| Section | “Section” | “Color scheme”, “Spacing above and below”, “Width” (“Page width” / “Full width” / “Narrow (reading width)”), “Line above section”, “Anchor”, “Decoration” and “Background” groups |
| Layout block | “Group”, “Columns”, “Carousel” | How the blocks inside are arranged |
| Content block | “Heading”, “Image”, “Key figures” | Content and display |

**Narrow (reading width):** the content sits centered at a comfortable reading width (about 75–80 characters), e.g. for an FAQ or a longer text. **Anchor:** a name such as `shipping` (no # or spaces). A button or link to `#shipping` then jumps to this section – also from another page (`/pages/faq#shipping`). The “FAQ” and “Collapsible content” blocks have the same setting, so several question groups in one section get their own anchors. Example: an FAQ with a table of contents – a group of buttons (style “Tertiary” or text link) at the top pointing to `#subscription`, `#shipping`, `#account`, and below one FAQ block per group with that anchor.

In the theme editor, add blocks with **“Add block”** below a section or inside a group. The picker shows a preview and sorts blocks into categories (see below).

The same four layout settings are available in **“Custom Liquid”** and **“Product recommendations”**. Intentional exceptions: “Scroll story” (every slide fills the window and has its own color scheme), “Popup” and “Age verification” (overlays above the page), and the header and footer with their own settings.

**Decoration:** Every “Section” can show a line motif behind its content. Under **“Decoration”** choose “Motif” (default “None”), “Position” (“Background (full area)”, one of the four corners, “Left edge”/“Right edge”, “Behind the heading (top)”, “Transition to the next section (bottom edge)”), “Size” (width relative to the section), “Color” (color scheme roles or a brand color; for a quiet background use “Scheme: line”), “Opacity”, “On scroll”, “Line weight” and “Mirror”. The motif never shifts the layout, does not catch clicks and is hidden from screen readers; in corners and at the edges it reaches slightly past the edge and is cut off there. Motifs and scroll behaviors are the same as in the “Line art” block (below under “Media” and in [Animation](08-animation.md#line-art-and-decoration)). In right-to-left languages, “left” and “right” swap sides.

**Tile background:** Decoration behind tiles (the “Decoration” group or the “Decoration” block) can make text hard to read. Reels (“Video reels” block → “Reel”), ingredients in the “Ingredients: spotlight” block, “Timeline” entries, “Routine with products” steps, figures in the “Counter bar”, benefits in the “Benefit list (USPs)” (“Benefit” child block) and “Icon with text” therefore have the setting **“Tile background”**: “None” (default, as before), “Same as section background” (background color of the color scheme the tile is in) or “Custom color” with **“Tile color”**. The tile then gets a surface with inner spacing and rounded corners. With a custom color, make sure there is enough contrast with the text color. “Scroll story” slides already have their own color scheme with a surface.

**Background video:** Under **“Background”** choose a “Background video” from your Shopify files (default empty = no video). It plays muted on a loop behind the content, only starts once the section is visible and pauses when it leaves the viewport. A small pause button appears in the bottom right corner (for visitors who find moving content distracting). “Still image” is shown before the video starts; if empty, the theme uses the video’s preview image. With “Reduce motion” (operating system or [accessibility panel](13-accessibility.md#accessibility-panel-optional)) only the still image is shown and the video is not loaded at all. “Overlay” places the color scheme’s background color over the video – it lightens light schemes and darkens dark ones. Set it high enough for the text to reach a contrast of at least 4.5 : 1 (default 50 %; calm, light videos need less). “Focal point” sets which part of the video stays visible when it is cropped (center, top, bottom, left, right). If the section is at the very top of the page, turn on **“Load still image immediately (section at the top)”** – and only there; the video itself is never preloaded. Short, calm videos without sound and without text in the picture work best (e.g. 10 s, 1920 × 1080).
**Background video:** Under **“Background”** choose a “Background video” from your Shopify files (default empty = no video). It plays muted on a loop behind the content, only starts once the section is visible and pauses when it leaves the viewport. A small pause button appears in the bottom right corner (for visitors who find moving content distracting). It is only there while the video is actually playing or has been paused – if the browser pauses the video itself (e.g. in low power mode) or does not start it, there is no button either. “Still image” is shown before the video starts; if empty, the theme uses the video’s preview image. With “Reduce motion” (operating system or [accessibility panel](13-accessibility.md#accessibility-panel-optional)) only the still image is shown and the video is not loaded at all. “Overlay” places the color scheme’s background color over the video – it lightens light schemes and darkens dark ones. Set it high enough for the text to reach a contrast of at least 4.5 : 1 (default 50 %; calm, light videos need less). “Focal point” sets which part of the video stays visible when it is cropped (center, top, bottom, left, right). If the section is at the very top of the page, turn on **“Load still image immediately (section at the top)”** – and only there; the video itself is never preloaded. Short, calm videos without sound and without text in the picture work best (e.g. 10 s, 1920 × 1080).

Empty sections – for example “Recently viewed” without a history – collapse in the store. In the editor they stay visible so you can find them.

**Selecting in the editor:** When you click a popup, an info popup, the “Menu” block or an “Image” in the menu in the sidebar, the preview opens it (mega menu on desktop, menu on phones). Selected carousel slides and announcements in the bar scroll into view. Effects from [Animation](08-animation.md) never hide content in the editor.

### Notes in the editor

When a block is missing something (no product on this page, empty metafield, no reviews yet, history of “Recently viewed”), the editor shows a note in its place with an orange bar and the label **“Only visible in the editor”**. Customers never see it; in the store the block is hidden or stays empty. If the notes get in the way while designing, turn them off under **Theme settings → “Layout” → “Theme editor” → “Show “Only visible in the editor” notes”** (on by default); empty blocks then simply stay empty in the preview.

### Highlighting text

Put words in double square brackets to highlight them like with a marker pen: `Refill instead of [[throwing away]]`. This works in all headings and text of blocks and sections – heading, text, quote (including author and role), labels above headings, titles and text in accordion, FAQ, tabs, product finder, routine, timeline, calculators, tables, banners, promo tiles, footer, announcement bar, marquee, countdown, age verification and product blocks. Fields that support it mention the notation in the hint below. In image alt text and in names for screen readers (e.g. “Carousel name”) the brackets are simply removed. Buttons, the header menu (which has its own “Highlight in submenu”) and pure data fields (values, table rows) are not highlighted. Only complete pairs are marked; in rich text fields use one pair per paragraph.

**Marker color:** Theme settings → **“Typography”** → **“Text highlight”** → **“Marker color”**. You can choose “Scheme: accent” (default) or the brand colors “Highlight”, “Accent 1” and “Accent 2”. If the chosen brand color is empty, the color scheme’s accent is used. The theme blends the color with the background of each color scheme. Text on it keeps the text color and always reaches a contrast of at least 4.5 : 1. To get there, the theme uses less color in the blend where needed, so the marker gets lighter or more muted; as a last resort it uses the color scheme’s selection color. If the marker is almost the same as the background (e.g. accent 1 on a scheme with an accent background), the theme blends it a little darker or lighter so the highlight stays visible.

**Marker motion:** see [Animation](08-animation.md).

## Settings appear when relevant

The editor shows many settings only once they have an effect. That keeps the sidebar tidy without taking any options away. Examples:

| When you choose … | … this appears |
|---|---|
| “Product media” block → “Layout” “Slider” | “Thumbnails”, and with “None” also “Show position as” |
| Header → “Sticky header” other than “Scrolls with the page” | Colors and size when sticky |
| Theme settings → “Animation” → “Enable animations” | All effects; “Style” or “Build-up” only with their effect |
| “Show accessibility panel” | Position and options offered |
| Cart → “Free shipping threshold” above 0 | “Tier 2: threshold”; with a threshold above 0, “Tier 2: reward” and “Tier 3: threshold” |
| “Menu” block → feature with a product, collection, image or heading | “Eyebrow text”, “Position”, “Only for these menu items” |
| Promo tile or scroll story slide with a link or label | “Button label”, or “Link” and “Style” |
| Theme settings → “Product data” → servings metafield entered | “Show key figures” and “Show price per day or serving” in product grids |
| “Countries in the selector” other than “All countries in your markets” | “Country codes” |
| “Image” block with an image | “Alternative text” and “Load immediately” |
| “Button” block with a label | “Link” and “Style” |
| Badge colors: “Badge 1: text” filled in | “Background” and “Text color” |

Hidden settings keep their value. Turn the condition back on and everything is as before.

Shopify can't hide pickers for products, collections and pages; they always stay visible and only take effect when the matching option is selected (the info text below them says when).

> Missing a setting that this guide mentions? Check whether the setting above it is switched on or set to the right value.

## Section templates

**“Add section”** lists ready-made sections. You do not need to understand blocks to use them – every part stays editable afterwards. The categories are the same as for blocks.

| Category | Section templates |
|---|---|
| Text | “Introduction”, “Text columns”, “Testimonials”, “Blog posts” |
| Buttons and promotions | “Countdown”, “Scrolling text”, “Popup”, “Announcement bar” |
| Media | “Image with text”, “Shoppable image”, “Logo list”, “Scroll story”, “Video” |
| Layout | “Empty section” |
| Collapsible and tabs | “FAQ”, “Collapsible content”, “Tabs” |
| Benefits and comparison | “Benefits with icons”, “Comparison table”, “Timeline” |
| Forms | “Newsletter”, “Product finder”, “Age verification” |
| Products and collections | “Product grid”, “Featured product”, “Collection list”, “Build a set”, “Reorder”, “Recently viewed”, “Product recommendations” |
| Product: facts | “Badges and certificates” |
| Ingredients | “Ingredient spotlight” |
| Page templates | “Custom Liquid” |

There are also sections with a fixed purpose that only appear in their template: **“Product”**, **“Collection”**, **“Search”**, **“Cart”**, **“Header”** and **“Footer”**.

**“Scroll story”** is a section of its own with slides that blend into each other as you scroll, see [Animation](08-animation.md#scroll-story-section).

**“Custom Liquid” section** (category “Page templates”): a section of its own with a code field (Liquid and HTML), available on all templates, with color scheme, spacing, width and line like other sections. Meant for code snippets from apps or agencies that expect a section. To add code inside an existing section, use the block of the same name. Faulty code can break the page; check the page in the preview after pasting.

## Group and columns

**“Group”** combines blocks. In the picker it appears as **“Stacked items”** and **“Items side by side”**.

- **“Direction”**: “Stacked” or “Side by side”. Side by side, all content shares the space and wraps when it gets narrow; buttons and badges keep their width.
- **“Horizontal alignment”** (buttons left, center, right), **“Vertical alignment”** (side by side only), **“Spacing between blocks”**.
- **“Use full width”**: side by side, the first block sits at the start and the last at the end, with the space spread between them (e.g. heading left, “View all” link right). Stacked, blocks take the full width. Replaces the former “Spread” alignment.
- “Text”, “Heading”, “Line art”, “Line animation”, “Counter bar” and “Decoration” (with “Placement” “In content”) follow the alignment of the group (or section) while **“Match group alignment”** is on (default). Only when it is off does the block’s own **“Alignment”** appear. Without a surrounding group they sit at the start (left), like text.
- **“Inner spacing”**, **“Show border line”**, **“Use own color scheme”** – turn a group into a card or info box.

**“Columns”** creates equal-width columns that wrap on mobile.

- **“Columns on large screens”** and **“Columns on small screens”** (1 or 2).
- **“Lines between columns”** for the factual data sheet look.

Rule of thumb: use “Columns” for grids of equal tiles, and “Group” for text next to a button or an image next to text.

## All blocks by picker category

The **“Add block”** picker sorts blocks into 13 categories; within a category they are listed alphabetically. The search field at the top finds any block directly.

- **Recommended blocks:** In the **“Product”**, **“Collection”**, **“Search”** and **“Cart”** sections the picker first shows the matching blocks (e.g. product media, price, buy buttons); all others are under **“Show all”**. Groups and columns always offer every block.
- **Page templates:** Blocks with a colon in their name, such as **“Cart: items”**, belong to a specific template. Elsewhere they show nothing or only a hint in the editor. They are collected in the “Page templates” category so you can add them back after deleting them by mistake. They cannot be hidden in other templates: Shopify allows this restriction for sections only, not for blocks.
- **Child blocks** such as “Entry”, “Question”, “Tab”, “Benefit”, “Promo tile”, “Slide” or “Image” (in the menu) only appear in the picker of their parent block, at the top without a category.

### Text

| Block | Purpose |
|---|---|
| Heading | Heading with optional eyebrow text; “Heading level (SEO)” is selectable. |
| Text | Formatted text in three sizes, normal or muted. Under **“Icon”** you can add an icon **“Above the text”** or **“Left of the text”** (then with **“Vertical icon alignment”**: top, middle, bottom). **“Icon source”**: “No icon” (default), “Icon library” (the theme’s line icons), “Custom image” (fitted into the **“Icon size”** S–XL, 24–48 px) or “Free text” – a short character, number or emoji such as “01” with **“Font size”**, **“Font”** (heading, body or data font) and **“Weight”**. **“Icon color”** applies to library icons and free text. Only the fields for the selected source are shown. The icon is decorative and not read out by screen readers. |
| Heading | Heading with optional eyebrow text; “Heading level (SEO)” is selectable. “Match group alignment” (default) or its own “Alignment”, see [Group and columns](#group-and-columns). |
| Text | Formatted text in three sizes, normal or muted. “Match group alignment” (default) or its own “Alignment”. |
| Quote | Quote with name and role; without **“Person’s name”** it appears without a name line, and “Role or place” only shows with a name. Under **“Appearance”**: **“Font size”** (S–XL) and **“Font weight”** (“Regular”, “Bold”); **“Default”** uses the setting of the carousel the quote is in. |
| Badge | Small label, “Outline” or “Accent”. |
| Blog posts | Posts of a blog. **“Layout”**: “Grid” (default), “List” (image left, text right, posts separated by lines) or “First post large” (the newest across the full width, the grid below); **“Columns”**: “Automatic” (as many as fit well) or fixed 2, 3 or 4 – fewer in narrow areas. Leave **“Heading”** empty if a separate “Heading” block sits above; **“Use blog title as heading”** (shown while the field is empty) uses the blog’s name instead. The **“All posts”** link can be hidden, renamed (“Link text”) and shown as a button (“Button style”, “Button size”; default text link). |

### Buttons and promotions

| Block | Purpose |
|---|---|
| Button | Link as a button (“Primary”, “Secondary”, “Tertiary”) or text link; “Button size” “Normal” or “Small”. The tertiary button’s look is set under Theme settings → “Buttons”. |
| Countdown | Time until a date; afterwards hidden or replaced by a text. **“End”**: “Once (date)”, “Every week” (weekday and time, e.g. Sunday 23:59), “End of every month” (time) or “Every N days from date” (first end as a date, “Interval in days”). Recurring ends never expire: at 0 the timer starts over with the next date. All times are in the store’s time zone. A date that cannot be read (format `YYYY-MM-DD HH:MM`) or a time that cannot be read (`HH:MM`) hides the block; the editor shows a note. |
| Scrolling text | Scrolling line of text; stops for reduced motion and has a pause button. |

### Media

| Block | Purpose |
|---|---|
| Image | Single image with aspect ratio (2:3 to 3:1), fit, **“Image position”** for the crop and optional link. |
| Image with text | Image and text panel side by side or stacked; the panel holds further blocks (heading, text, button …). It uses the section’s color scheme; turn on **“Own color scheme for the text panel”** to give it its own. With **“Video instead of image”** a muted looping video plays in the image area, just like the section’s background video (starts when visible, pause button, still image only with “Reduce motion”); the image then serves as the still image. Display: aspect ratio (2:3 to 3:1) or **“Image height”** relative to the screen (a third, half, three quarters; from 750 px width), **“Image column width”** (one third to two thirds) and **“Image position”** (a focal point set in Shopify takes priority). Under “Motion”: **“Parallax”** (as in theme settings, on or off) and **“Text animation in the text area”** – “Automatic” shows the text of a top banner (with “Load immediately”) without delay. |
| Shoppable image | Image with numbered markers (“Hotspot”), each linked to a product or a custom entry (title, text, link). Clicking a marker opens a card with image, name, price, “View” and optional quick buy; on phones a numbered list below the image is shown instead. Set each marker’s position with “Horizontal”/“Vertical” in %, plus an optional “Label” and the “Marker color scheme”. **“Layout”** “2 columns” or “3 columns” puts the list next to the image from 750 px width (a marker jumps to its entry); **“Products on desktop”** shows this list in 1 or 2 columns. Aspect ratio and **“Image position”** as for the image block. |
| Video | Video from Shopify or YouTube/Vimeo; external videos load only after a click. Newly added blocks start with a Shopify sample video – replace the link. |
| Logo list | Partner or press logos, optionally single-color in the text color. **“Scroll automatically”** for long lists: the logos move slowly and endlessly (“Speed” Slow, Normal or Fast), pause on hover, keyboard focus and with the pause button, and stay still for reduced motion. |
| Line art | Decorative line motif from 13 motifs (waves, cycle, contour lines, path with dots, connector line, swash, frame corners, branch, steam curls, drop with ripples, measuring scale, orbit, curved arrow), e.g. next to an image, between columns or under a heading. Settings: “Motif”, “On scroll”, “Color”, “Line weight” (Fine / Medium / Bold), “Width” in % of the column, “Match group alignment” (default) or its own “Alignment”, “Mirror”, “Repeats side by side”, “Opacity”. The height follows the motif. See [Animation](08-animation.md#line-art-and-decoration). |

### Layout

| Block | Purpose |
|---|---|
| Stacked items / Items side by side | The “Group” block: combines blocks, optionally with a border and its own color scheme. |
| Columns | Equal-width columns that wrap on small screens. |
| Carousel | Horizontally scrollable row of any blocks, without automatic rotation. Under **“Quotes”**, **“Font size”** and **“Font weight”** set the look of all quotes in it. |
| Divider | Horizontal line between content. |
| Spacer | Additional vertical space. |
| Breadcrumbs | Path to the current page, e.g. Home › Collection › Product. |

### Collapsible and tabs

| Block | Purpose |
|---|---|
| Collapsible content | Collapsible entries, optionally “Only one entry open at a time” (also on the landing page without a header). |
| FAQ | Collapsible questions and answers, with structured data for search engines. “Heading level (SEO)” and “Anchor” can be set; hidden in the store without questions. |
| Tabs | Content in tabs; a tab can be connected to a product metafield and hold further blocks. **“Bottom spacing”** per tab: space below the content and between further blocks, e.g. before a product grid (default Medium). |

**Look of all collapsibles** (“Collapsible content”, “FAQ” and the collapsible product blocks “Product description”, “Product details”, “Metafield content”, “Mandatory information”, “Product safety”): each entry is a panel of its own with 8 px between panels and a small dot with a plus on the right. An open entry gets a tinted background, its title and minus turn to the signal color. Colors come from the section’s color scheme (panels: role “Background behind product images”, open: “Selection”), the rounding from **Theme settings → “Layout” → “Corners” → “Cards, images and panels”**: square, subtle (dot with 4 px rounding) or soft (round dot). There is no separate setting. Opening is subtly animated, except with “Reduce motion”. Filters on collection and search pages stay plain lists with lines.
| Info pop-up / Dosage table / Size chart | A link or button opens a window with content from text, a page or a product metafield – a size chart, for example. Replaces size chart apps. See [Product page](06-product-page.md#info-pop-up-size-chart-and-dosage-table). |

### Benefits and comparison

| Block | Purpose |
|---|---|
| Icon with text | One icon with heading and text, e.g. as a tile in “Columns”. **“Icon source”** as in the “Text” block: “Icon library” (default), “Custom image”, “Free text” or “No icon”, plus **“Icon color”**. When the icon sits next to the text (“Direction” side by side, or side by side on mobile), **“Vertical icon alignment”** aligns it to the top (default), middle or bottom of the text. “Tile background” as described under [Tile background](#the-principle). |
| Benefit list (USPs) | Compact list with icons, e.g. below the buy buttons; entries from a product metafield or as “Benefit” child blocks (each with “Tile background”). |
| Comparison table | Two columns compared; “yes”/“no” become ✓ and –. |
| Timeline | Sequence of steps with a point in time, e.g. how an order or a subscription works. |
| Counter bar | Key figures without a product, e.g. “12,500 · orders per year”, “48 h · shipping time”. One sub-block **“Counter”** per value with “Value” (number with unit, text before and after allowed) and “Label”. Settings: “Value size” (small like the key figures up to extra large), “Label” above or below the value, “Match group alignment” (default) or its own “Alignment”, “Columns on mobile”, “Line on top” and **“Count up when visible”**: the number counts up from 0 as soon as the bar scrolls into view – only below the first screen and never with “reduce motion”; thousands and decimal separators stay as entered. Without JavaScript the final value is shown. |

### Forms

| Block | Purpose |
|---|---|
| Contact form | Shopify contact form, optionally with a phone field. |
| Newsletter signup | Email field for Shopify customers with selectable customer tags. |
| Product finder | One question with answers that link to collections or pages. Per answer, **“Vertical alignment”** (top, middle, bottom) places the selection circle and text in the tile. |

### Products and collections

| Block | Purpose |
|---|---|
| Products from collection | Product cards of a collection as a grid. **“Show key figures”** and **“Show price per day or serving”** can be switched separately. The **“Promo tile”** child block adds a promotional tile to the grid, see [Collections](05-collections.md#promo-tile). |
| Featured product | A chosen product with gallery (“Slider” by default, or “Grid”), price, variants, purchase options and buy buttons on any page; every part can be switched on or off. Also a section template. See [Product page](06-product-page.md#featured-product). |
| Collection list | Collections as tiles; left empty, all collections with products. Paginated on the “All collections” page. |
| Subcollections | Subcollections as a bar: from a collection metafield, otherwise from a fixed selection, otherwise from the menu. See [Collections](05-collections.md#subcollections). |
| Build a set | Customers choose several products from a collection and add them to the cart together. Up to 50 products; **“Visible”** sets how many show at once, the rest sit under “Show … more products”. **“Variant”**: “Customer chooses” (default), “First available variant” or “Variant with option value” (e.g. `100 g`; products without this value use the first available variant, if the value is sold out the product is left out). |
| Reorder | Last order of signed-in customers, back in the cart with one click. |
| Recently viewed | Recently visited products, stored only in the visitor's browser. |

How product cards look in every grid (image motion on hover, variants on the card, rating stars, badges) is set centrally: [Collections and product cards](05-collections.md#product-cards).

### Product: buying

The three product categories show data of the current product and only work on product pages. Elsewhere the editor shows “Shows product data – works on product pages only.” To show a product on other pages, use **“Featured product”**.

| Block | Purpose |
|---|---|
| Price | Price, compare-at price, unit price, optionally a tax and shipping note and Shop Pay Installments (**“Show Shop Pay Installments”**, on by default; appears only when Shop Pay Installments is active in your store). |
| Variant picker | Options as tiles, rows or variant images, with swatches (can be turned off under Theme settings → “Product data” → **“Show color swatches”**, also applies to product cards and filters). |
| Purchase options | One-time purchase or subscription with savings and delivery timeline. |
| Buy buttons | Quantity, “Add to cart”, dynamic checkout buttons, stock status, pre-order, back-in-stock request; for gift cards “Send to someone else” with email, name, message and send date. |
| Quantity tiers | Pack sizes or quantity discount with a price per tier. |
| Sticky buy bar | Buy bar while scrolling, once the buy buttons are out of view. |
| Delivery date | One line, “Estimated delivery by Wed, Nov 25”, from cut-off, processing time, transit time and holidays, optionally with a delivery time per product. |
| Pickup availability | Pickup availability per location, when local pickup is turned on. |
| Often bought together | The product on the page plus up to three add-ons with checkboxes, a total and “Add all”. See [Product page](06-product-page.md#often-bought-together). |

### Product: content

| Block | Purpose |
|---|---|
| Product media | Gallery with videos and 3D models; grid, stacked, mosaic or slider with thumbnails; variant image and full screen. See [Product page](06-product-page.md#product-media). |
| Product title | Title, optionally brand and subtitle. |
| Rating stars | Stars, average and number of reviews from a reviews app's standard metafields. See [Product page](06-product-page.md#rating-stars). |
| Product description | Description from the admin, optionally collapsible. |
| Key figures | Serving, servings, price per day or serving, supply duration and up to two custom values. Long values such as “1 level scoop” get smaller automatically and wrap if needed instead of overflowing. |
| Metafield content | Enter a heading, connect a metafield, choose the display (text, list, table), optionally collapsible. For any product information without its own block (care, material, dimensions …). See [Product page](06-product-page.md#metafield-content). |
| Set contents (bundle) | Components of a fixed bundle, e.g. from Shopify Bundles. |

### Product: facts

| Block | Purpose |
|---|---|
| Facts table: supplements / nutrition / feed / feeding | The “Facts table” block with a preset table type: nutrients per daily dose, nutrition facts per 100 g, analytical constituents or feeding guide. **“Table type”** also offers “Custom columns”. **“Roll in numbers when first visible”** (on by default) rolls the values in once like a counter. |
| Mandatory information | Name, ingredients, net quantity, recommended use, warnings and manufacturer depending on the product type. |
| Product safety | Manufacturer, responsible person and safety information (GPSR). |
| Badges and certificates | Certifications as a list, optionally with a lab report to download. |
| Usage | Steps for use or preparation and up to three key values (temperature, time, amount). |

### Ingredients

| Block | Purpose |
|---|---|
| Ingredients: spotlight | Key ingredients with image, form, source and description. **“Line above each ingredient”** turns off the rule above the entries. |
| Ingredient: profile | One ingredient in detail, e.g. on its glossary page. |
| Ingredient: products | Products that contain a specific ingredient. |
| Ingredients: glossary | All ingredients from A to Z with a jump bar. |

### Page templates

| Block | Template | Purpose |
|---|---|---|
| Cart: items | Cart | Items with quantity selector, subscription switch and optional recommendations. |
| Cart: summary | Cart | Subtotal, progress bar with up to three tiers (Theme settings → “Cart” → **“Progress bar”**), optionally gift wrap, order note and dynamic checkout buttons. |
| Collection: header | Collection | Title, description and the collection image (**“Show collection image”**, on by default; without an image the image column is left out). |
| Collection: product list | Collection | Collection products with filters, sorting and page numbers, “Load more” or infinite scroll. |
| Search: header | Search | Title with search terms and search field. |
| Search: results | Search | Products, pages and articles for the search, with filters. |
| Blog post: content | Article | Content of a post. |
| Page: content | Page | Title and text of a Shopify page. |
| Password page: form | Password | Logo (own image, otherwise the logo from Settings → Brand, otherwise the store name), heading, message and password field. |
| Custom Liquid | all | Code from apps or agencies; faulty code can break the page. |

### No longer in the picker

These blocks keep working in existing templates but can no longer be added, because another block does the same:

| Block | Instead |
|---|---|
| Metafield collapsible | “Metafield content” with **“Collapsible”** (on by default). |

### Apps

Sections, groups and columns also accept **app blocks**, e.g. reviews. They bring their own design.

## Header and footer

The header (logo, menu, search, account, cart, country and language) and the announcement bar are covered in [Header and navigation](04-header.md), the footer in [Getting started](01-getting-started.md#footer).

## Templates

Assign a different template to a page, product or collection in your admin under **“Theme template”** on the right.

| Template | Purpose |
|---|---|
| `page` | Standard page |
| `page.contact` | Page with contact form |
| `page.faq` | Page with FAQ block (structured data) |
| `page.about` | “About us” with values in columns |
| `page.landing` | Campaign page without navigation |
| `page.ingredients` | Ingredient glossary A–Z, see [Ingredient glossary](12-ingredient-glossary.md) |
| `page.accessibility` | Accessibility statement, see [Accessibility](13-accessibility.md) |
| `product` | Product page |
| `product.subscription` | Product page with purchase options directly below the price |
| `product.bundle` | Product page for fixed bundles |
| `collection` | Collection with collection image (if set), subcollection bar and filters, see [Collections](05-collections.md) |
| `collection.featured` | Collection with the collection image in the header |

There are also templates for the home page, search, cart, blog, article, collection overview, 404, password page, gift card and the glossary page for each ingredient.
