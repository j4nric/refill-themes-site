# Changelog

Versions follow semantic versioning. From version 1.0.0 on, settings and block types are never renamed, removed or changed in meaning, only added – your customizations are kept when you update. Until then, every change that can alter the look of an existing store is listed here under **“Please check”** or **“Changed”**, with the step that restores the previous look.

## 0.9.0 – November 2026

First complete version of all pages and core features.

### November 27, 2026 – merchant feedback

**Changed**
- **Announcement bar on mobile:** text, arrow, discount code and copy button are centered, also when the announcement wraps; the code no longer starts indented on a new line, and the arrow never wraps on its own. Code and button are slightly narrower, so an announcement with a code usually fits on two lines. Several announcements can be swiped endlessly – after the last one comes the first again and vice versa – and two small arrows on the left and right do the same (usable without a swipe gesture). No automatic movement. On desktop the bar is unchanged.
- **Theme editor, “Show “Only visible in the editor” notes” turned off:** blocks without content (e.g. “Purchase options” for a product without subscription plans, “Info pop-up” without content, “Key figures” without values) no longer leave an empty gap in the preview – it looks like the store. The purchase options note “Appears when the product has subscription plans” now follows this setting too.
- **Nordform demo:** shorter announcement “Subscription week: 5% extra on first delivery”.
### November 27, 2026 – Change subscriptions in the cart, translated plan names

**New**
- **Cart: “Change subscription”.** Subscription items offer the same choice as “Switch to subscription” below the plan name: another delivery frequency or back to a one-time purchase, with “Apply”. See [Subscriptions in the cart](10-subscriptions.md#6-subscriptions-in-the-cart).
- **Theme settings → Product data → “Name subscription plans with theme text”** (off by default): shows plan names in the page language, e.g. “Every 3 weeks · 15% off”, instead of the subscription app's name. Checkout and order confirmation keep showing the app's name; how to translate it is described under [Plan names in your store's language](10-subscriptions.md#plan-names-in-your-stores-language).

### November 27, 2026

Editor experience and backward compatibility (independent review of November 27).

**Please check**
- **Alignment of text, heading, line art, line animation, counter bar and decoration (in content):** the setting is now called **“Use group alignment”** and only has an effect when the block sits in a group. Blocks directly in a section, in columns, tabs or a carousel show their own alignment again – as before November 25. A heading you had centered earlier is centered there again. **Inside a group** these blocks keep following the group, even if they were created before November 25. If such a block was deliberately aligned differently from its group (e.g. a centered heading or centered line art in a left-aligned group), uncheck “Use group alignment”; your own alignment is saved and applies again. The block’s own alignment is now always visible. See [Group and columns](03-sections-and-blocks.md#group-and-columns).
- **Left group inside a centered or right group:** multi-line text in it now sits on the left (it used to inherit the outer group’s centering).

**New**
- **Counter bar:** own alignment can also be “End”.
- **Scrolling text:** speed “Fast”, as in the logo list.
- **Decoration:** with “Desktop only” or “Mobile only”, the theme editor shows a note in the other preview instead of nothing. New manual section [“Decoration” block](08-animation.md#line-art-and-decoration).
- **Tile background with a custom color:** the text in the tile automatically turns black or white, whichever is easier to read.

**Changed**
- **Account in the header:** Shopify’s account component now appears in the header right away for signed-out visitors too (previously only on first hover, focus or tap). Look and behavior stay the same; Shopify now loads its sign-in scripts with the page. To keep the previous behavior, check **“Load account on demand”** in the “Search, account, cart” block. See [Account, cart](04-header.md#account-cart).
- **Editor:** “Icon with text” has the headings Icon, Content, Arrangement and Tile; “Shoppable image” consistently says “legend” (“Legend columns” only appears where it has an effect); decoration hides motif, stroke width, mirroring and repeats for your own graphic; a “Side by side” group with “Use full width” treats the hidden alignment as “left”. Info texts again say that a required delivery date hides express checkout buttons and “Buy it now”, what “Hover and buttons” does, how the carousel advances automatically and that the language selector in the announcement bar needs the “Announcement bar” section.

**Added to the record (since November 25/26, not listed before)**
- **Scroll story:** without a setting of their own, slides now switch “at once” instead of smoothly, and the page snaps to whole slides. For the previous behavior, choose “With scrolling” under “Slide change” in the section and uncheck “Snap to slides”.
- **Tabs:** the space below the text and between blocks in a tab is larger (default “medium” instead of “small”); adjustable per tab under “Bottom spacing”.
- **Spacer in a “Side by side” group:** automatically becomes horizontal space (previously height). For the old effect, set “Direction” to “Vertical (height)”.

### November 26, 2026

Review of the demo stores (phone and desktop, Chrome and Safari).

**Changed**
- **Cart:** the short delivery timeline of subscription items names its points (“Ordered”, “Delivery 2”, “Delivery 3”) and counts from the order date, like the product page. With several subscription plans, the plans are listed one below the other; interval and discount stay fully readable on phones. See [Subscriptions](10-subscriptions.md#6-subscriptions-in-the-cart).
- **Product page delivery timeline:** deliveries 2 and 3 are the order date plus the interval (before: from the first arrival) – the same dates as in the cart.
- **“Back to top” button:** on the product page on phones it only appears together with the sticky buy bar, so it never covers prices in the buy area.
- **Tabs:** if the tabs don't fit the width, they fade out at the edge – it's clear the bar scrolls.
- **Pagination** (previous, page numbers, next) is now styled everywhere: quick order, blog, comments.
- **Numbers with units** (“300 ml”, “about 15 g”) no longer break in the sticky buy bar, comparison table, key figures and cart.
- **Filters on phones:** “Show results” and “Clear all” on one line each; if they don't fit side by side, the link moves below.
- **Video reels:** fewer reels than slots per view are centered instead of leaving an empty column.
- **Search:** no second clear icon next to the close cross in Safari; the quick order paste field uses 16 px (no zoom on iPhone).

Feedback from phones (round Z, cart and product lists with checkboxes).

**New**
- **Shoppable image:** **“Show legend”** (on by default). Off: no numbered list, markers open their card on the image, on phones too. See [Sections and blocks](03-sections-and-blocks.md).
- **Cart:** if a product has several subscription plans, customers pick the plan before switching (compact choice with saving, “Apply”). See [Subscriptions](10-subscriptions.md#6-subscriptions-in-the-cart).

**Changed**
- **“Often bought together” and “Add all products to cart”:** larger images, image and title lead to the product, price at the bottom right, more compact variant choice.
- **Shoppable image:** legend without “View” – the whole entry is a link.

Feedback from phones (round Y2, collection and product page).

**New**
- **Profile scales:** **“Scale width”** (Automatic, Narrow, Full width). Dots spread across the scale, so the first and last dot sit above the end labels (“Mild” – “Brisk”). See [Product data](09-product-data.md#profile-scales).

**Changed**
- **Collection on phones:** “Filter” and “Sort by” sit side by side, the product count centered below. Unchanged on large screens.
- **Promo tile:** long button labels wrap balanced and centered.
- **Pickup in store:** “Ready for pickup at” gets a rule and more space to the line above; text and pickup time run as one paragraph.
- **Sticky buy bar:** more padding at the bottom (including the iPhone safe area).
Feedback from mobile (round Y, spacing and display).

**Changed**
- **Background video:** If the browser does not start the video on its own (e.g. an iPhone in Low Power Mode), the button appears as a play button and starts it with a tap. The iOS start button over the video is hidden. See [Sections and blocks](03-sections-and-blocks.md#the-principle).
- **Tabs:** On touch devices, the scrollbar no longer covers the bar under the selected tab; the tab row can still be swiped.
- **Page content and blog post:** Subheadings in the text stay smaller than the page title on phones.
- **Lists in centered text** are left-aligned; the list as a whole stays centered.
Feedback from mobile (round Y, cart, announcement, scrolling text).

**New**
- **Scrolling text and logo list:** the pause button is now an icon; Theme settings → “Animation” → “Scrolling text” → “Pause button” (icon or text).

**Fixed**
- **Scrolling text and logo list** did not resume after “Pause” and “Play”.
- **Announcement bar** could be scrolled vertically on phones. With a discount code it is back to two lines instead of three: “Copy” is an icon.

**Changed**
- **Cart:** with “Dot without number” the title “Cart” (drawer, cart page) now shows a bubble with the count. The subscription hint is short with an icon (“Switch to subscription”), gift options are collapsible.
Feedback from mobile (round Y, lists and small blocks).

**New**
- **Logo list:** **“Alignment”** left, center (default) or right.
- **Icon with text:** direction **“Icon beside heading, text below”**.

**Changed**
- **Build a set** and **Quick order list:** on mobile a compact row image – name and price – quantity with a larger image; the quick order list shows the price only once (also for gift card denominations).
- **Events:** the time sits on one line with the date; in the calendar the whole day with an event is tappable and jumps to the entry.

**Fixed**
- **Quick order list** with source collection: error “not paginateable” instead of the page navigation.
- **Logo list:** logos not centered on iPhone.

Feedback from the theme editor (round X, editor comfort).

**New**
- **“Reorder”** and **“Recently viewed”:** **“Show with sample data in the editor”** (off by default) – the theme editor shows sample products from your store so you can see the styling. Never in the store.

**Changed**
- Picker presets are now called **“Group: stacked”** / **“Group: side by side”** (previously “Stacked items” / “Items side by side”) and **“Info pop-up: table”**, **“Info pop-up: dosage table”**, **“Info pop-up: size chart”**. Searching for “Group” or “Info pop-up” finds them.
- Guide: [why a block can't be dragged into a group](03-sections-and-blocks.md#moving-an-existing-block-into-a-group-or-column).

Feedback from the theme editor (round X, display and layout).

**New**
- **Spacer:** **“Direction”** setting – in a “Side by side” group it automatically becomes horizontal space. See [Sections and blocks](03-sections-and-blocks.md#group-and-columns).
- **Origin map:** **“Map height”** (Automatic, Low, Medium, Tall).
- **Blog posts** (“First post large”) and **Featured product:** **“Image / content split”**, so image and text align with columns below. The default stays as before.

**Changed**
- **Parallax** now also works in Firefox and older Safari. In the “Image with text” block, “Parallax: On” also works with animations turned off (never with “Reduce motion”).
- **Shoppable image:** **“Product list columns”** (previously “Products on desktop”) with 1, 2 or 3 columns, for every layout and also for “Add all products to cart”.

### November 25, 2026

Feedback from the theme editor (round W).

**New**
- **Icons in the “Text” block:** optionally an icon above or to the left of the text – from the icon library, as a custom image or as free text (e.g. “01”, with font size, font, weight and color). **“Icon with text”** offers the same choice and aligns the icon to the top, middle or bottom of the text. See [Sections and blocks](03-sections-and-blocks.md#text).
- **Group:** horizontal alignment as buttons (left, center, right) like in Text and Heading. **“Use full width”** replaces “Spread / full width” (your setting is kept).
- **“Match group alignment”** (on by default) in “Text”, “Heading”, “Line art”, “Line animation”, “Counter bar” and “Decoration” (in content): the block takes the alignment of its group; turn it off to choose one of its own. See [Group and columns](03-sections-and-blocks.md#group-and-columns).
- **Product finder → Answer:** vertical alignment of the choices. **Shoppable image:** products in 2 columns on desktop. **Benefit list:** side by side in 2 or 3 columns, icon and text centered. **Tab:** spacing below (medium by default). **Logo list:** smooth automatic scrolling for long lists (pauses on hover, still with “reduce motion”).
- **Product cards:** profile scales (e.g. scent, texture), unit price and “Compare” can be turned off per block – in “Products from collection” (also inside tabs), “Collection: product list”, search, “Ingredient: products”, “Recently viewed”, product finder and “Product recommendations”. See [Collections](05-collections.md#product-cards).
- **“Tile background”** for reels, ingredients in the spotlight, timeline entries, routine steps, counters, benefits in the benefit list and “Icon with text”: “None” (default, as before), “Same as section background” or a custom color – so decoration does not make the text unreadable. See [Sections and blocks](03-sections-and-blocks.md#the-principle).
- **Buy buttons:** style of the “Buy it now” button – “Outline” (default), “Filled” or “Shopify default”; corners and height like the theme buttons. See [Cart and checkout](07-cart-and-checkout.md#dynamic-checkout-buttons).
- **Text highlight everywhere:** `[[…]]` now marks words in all headings and text of blocks and sections, not only in heading, text and quote. In alt text and screen reader names the brackets are removed. See [Sections and blocks](03-sections-and-blocks.md#the-principle).
- Theme setting **“Show “Only visible in the editor” notes”** (Layout → Theme editor, on by default).

**Changed**
- Without a saved setting, “Buy it now” appears as an outline instead of the Shopify default, so “Add to cart” stays the most prominent button.
- “Hover and buttons” (Theme settings → “Animation”) now also affects primary buttons such as “Add to cart”: the fill slides in on hover.
- “Line art”, “Line animation”, “Counter bar” and “Decoration” (in content) blocks created before this update now follow the alignment of their group. If such a block was deliberately aligned differently from its group (e.g. centered line art in a left-aligned group), turn off “Match group alignment”. The templates of the styles have been updated. (Since November 27 this only applies inside groups, see there.)
- The demo shops show sample reviews so the stars are visible on cards and the product page.

**Removed**
- The **“Line to cart”** effect (Theme settings → “Animation”).

**Fixed**
- Primary buttons (e.g. the cart button in the Pumice style) turned light or white on hover and became unreadable. The fill now always gets slightly darker and the text stays readable.
- A heading such as `[[Morning routine]]` showed `Morning routine<!--hl-end-->` in the preview.
- The pause button of a background video only appears when it does something (not when the browser paused the video itself or does not allow it to play).

### November 24, 2026

**New**
- Theme setting **“Cart after adding”**: drawer (as before), notification below the header or cart page. See [Cart](07-cart-and-checkout.md#cart-after-adding).
- **“Hide samples in product lists”** (on by default): free samples no longer appear in collections, search and recommendations.
- Quantity rules and volume pricing from Shopify B2B on the product page and in the cart.
- **“Line art”** block and **“Decoration”** group in the section: 13 line motifs that draw, drift, move sideways, rotate or lead a dot along as you scroll – without layout shift, still with reduced motion. See [Animation](08-animation.md#line-art-and-decoration).

**Improved**
- Cart: changes always hit the right line, even if the cart was changed in a second tab. After “Back” in the browser the cart shows the current state. Switching to a subscription in the cart uses a plan of the selected variant; errors appear at the line. Errors without a message from Shopify show a clear notice. The “Free shipping” tier is skipped when nothing ships (e.g. gift cards only).
- **“Counter bar”** block: key figures without a product, value and label, optionally counting up when visible (never with “reduce motion”). See [Sections and blocks](03-sections-and-blocks.md).
- **Countdown** with a recurring end: every week, end of every month or every N days from a date – promotions no longer expire.
- **Blog posts**: layout “Grid”, “List” or “First post large” and a fixed number of columns.
- **Build a set**: up to 50 products with “Show more”; fixed variant per product (first available or by option value).
- Sections: width **“Narrow (reading width)”** and **“Anchor”** (also in “FAQ” and “Collapsible content”), so buttons can link to sections.
- Heading level selectable in “FAQ”, “Collapsible content”, “Timeline”, “Product finder”, tab, scroll story slide and ingredient spotlight item.
- Products from collection: **“First row images”** (Automatic / Immediately / Lazy).

**Improved**
- Ingredient glossary and “Ingredient: products” consider up to 250 entries or products (before: 50); letters with accents (É, Å) sort under their base letter.
- An ingredient description as rich text or multi-line text looks the same everywhere.
- Muted looping videos only start when motion is allowed and pause outside the viewport; Vimeo without tracking (`dnt`).
- Product gallery full screen: move the zoomed view with the arrow keys. Videos and 3D models pause when you page on.
- Empty blocks (FAQ, timeline, product finder, mandatory information) no longer show in the store; in the editor a note explains what is missing.
- Reorder: list and button use the same items; subscription-only products are marked and not added.

### November 23, 2026

**New**
- **“Supply calculator”** block: customers enter their usage per day or week and see how long a pack lasts, plus the matching subscription interval with a “Choose this interval” button. Also in the “Featured product” block (“Show supply calculator”). See [Subscriptions](10-subscriptions.md).
- **“Savings calculator”** block: subscription vs. one-time purchase projected over a year, optionally with “Less packaging” from a metafield. Shares the usage with the supply calculator.
- Both blocks in the product templates of the Refill, Mortar and Pumice styles.
- **“Profile scales”** block: properties such as taste, texture or solubility as boxes, dots or a bar (“3/5”), from the metafield `custom.profile` (JSON or text) or from entries in the editor; optionally as a short version on product cards. See [Product data](09-product-data.md#profile-scales).
- **“Routine with products”** block: steps with time, text and a linked product, total price and “Add all to cart” (sold-out products are skipped). See [Product page](06-product-page.md#routine-with-products).
- **Free sample in the cart**: choose a sample from a collection from a minimum order value; new “Free sample” tier in the progress bar, automatic removal below the threshold. See [Cart](07-cart-and-checkout.md#free-sample-in-the-cart).
- Styles: Mortar shows a taste profile and a tea ritual, Pumice texture/scent and a skincare routine, Refill solubility/taste and a morning/evening routine.

### November 22, 2026

**New**
- Header: logo sized by **height** instead of width (“Logo” block → “Size logo by”): “Logo height on desktop” (32 px), “Logo height on mobile” (28 px) and “Logo height when sticky” (28 px); the width follows the aspect ratio, so square sticky logos no longer end up too large. “Width (previous)” remains available.
- Header: search, account and cart each as “Text”, “Icon” or “Icon and text” (“Search, account, cart” block → “Display”, from 990 px; icons on mobile).
- Cart: **“Cart count”** under Theme settings → “Cart” – “Automatic” (as before), “In brackets (2)”, “Bubble with number”, “Dot without number”, “Number only”; bubble color from the color scheme or the brand colors. Same in the header, drawer title and cart page.
- Brand colors also for “Background/Text when sticky” (header) and “Highlighted menu items” (menu).
- **Buttons:** new “Tertiary” style and “Button size” (“Normal”, “Small”) in the “Button” block, scroll story slides and the “All posts” link; the tertiary button’s look (text with arrow or tinted fill, color from the scheme or brand colors) under Theme settings → “Buttons”.
- Blog posts: “All posts” link on/off, custom text, as a button with style and size.
- Footer: column heading style (color, font, size, bold, uppercase) in the “Footer” section.
- “Back to top” button: color, font, bold and size (S/M/L) under Theme settings → “Layout”.
- Product cards: “Title color on hover” also in the brand colors.
- Product cards: “Underline title on hover” and “Title color on hover” (accent, text or secondary text from the color scheme) under Theme settings → “Product data” → “Product cards”. Defaults look as before.
- Header: country and language in the new “button with list” style. New “Style” setting in the “Search, account, cart” block: “One button, two columns” (default, button “DE · EUR / DE”), “Two buttons” (like the footer), “In the announcement bar” or the previous panel. In the mobile menu, the “Country and language” field opens the same list as a sheet from the bottom.
- Menu: new “Submenu style” setting – “Automatic” (default: simple submenus as a slim list below the menu item, otherwise the mega menu), “Classic: mega menu” or “List like dropdowns”. In the mega menu, link rows without large images now get the same fill on hover.
- Theme settings **“Brand colors”**: five fixed colors (accent 1, accent 2, promotion / sale, highlight, success / seal). Blocks with a color choice – “Badge”, badge colors under “Product data”, compare-at price in the “Price” block – offer “Scheme color”, the brand colors and “Custom color”.
- **Price colors** under “Brand colors” → “Prices”: color for the sale price and the compare-at price on the product page, product cards and in the cart. The sale color only appears when a compare-at price is shown next to it; the theme corrects weak contrast per color scheme.
- “Product recommendations” section: “Spacing above and below” and “Width” like the other sections.
- Quote and carousel: “Font size” (S–XL) and “Font weight” (regular/bold) for quotes; in the carousel for all quotes, in a quote individually.
- “Ingredient spotlight”: “Line above each ingredient” toggle.
- Footer: “Countries in the selector” and “Country codes” in the “Bottom bar” block (include/exclude list like the header).

**Improved**
- Option rows (card, set, “Often bought together”, quick view): stay open after choosing until closed with × or Escape; screen readers announce the new value. New edit icon, the area behind it follows “Corners”.

**Changed**
- Refill style: color scheme 2 is now “Surface” (cool light grey for changes between sections), scheme 3 “Light blue” (quiet accent). Your own changes to the schemes are kept.

**Fixed**
- “Image with text” (e.g. the home page hero): the text panel now uses the section’s color scheme. Turn on “Own color scheme for the text panel” for a scheme of its own.
- Key figures and usage parameters: long values such as “1 level scoop” get smaller step by step and wrap if needed instead of overflowing.
- Notes that only appear in the theme editor look the same everywhere and carry the label “Only visible in the editor”.
- Promo tile: the button sits below the tile area, as tall and styled as “Add to cart” on product cards and in line with them.

### November 21, 2026

**New**
- Footer: country and language as compact buttons (“Germany · EUR €”, “English”) that open a list above them (like the header, with search from nine countries and flags; on phones as a sheet from the bottom). No “Apply” needed any more – an entry switches on click. New setting “Show flags” in the “Bottom bar” block.
- Dropdowns (sorting, variant list without JavaScript, country/language without JavaScript) in the style of the collapsibles: a filled field with a small label inside and the arrow in a light dot; phones keep the familiar system picker.
- Collapsibles in a new style (accordion, FAQ, collapsible product blocks): each entry as a panel with a plus/minus dot, tinted when open; rounding follows “Corners”, colors follow the color scheme; subtle opening animation.
- Theme setting **“Customer address form”** (Theme settings → “Language and text”): storefront texts informal (du/tu) or formal (Sie/vous/Lei/usted) in all languages with a polite form (including German, French, Italian, Spanish, Dutch, Polish, Czech, Portuguese).
- **Seven new languages** for storefront and editor texts: Dutch, Danish, Swedish, Finnish, Polish, Czech, Portuguese (Portugal) – 12 languages in total.
- Cart page on phones: a checkout bar with subtotal and “Checkout” while the items scroll past.
- Cart: subscription items with a short delivery timeline (“Today · Dec 21 · Jan 20”) and the price without subscription struck through; a “… each” unit price from quantity 2; stock limit right at the quantity field (“Only 4 items available.”).
- Status colors (success, notice, error) adapt to each color scheme and stay readable on dark schemes.
- “Featured product”: gallery as a slider with thumbnails (new default) or grid.
- “Blog posts”: “Use blog title as heading” setting.
- 404 page with a button that leads to search.
- New video blocks start with a Shopify sample video; the logo list shows a logo icon as a placeholder in the editor.

**Improved**
- Editor: about 20 settings only appear once they take effect (cart tiers, mega menu feature, promo tile, scroll story, key figures in product grids). Product card settings regrouped (“Buying from product cards”); “Image on hover” is now “Image motion on hover”.
- Live search: stays in the header only from 1200 px; below that, and when space is tight, it expands.
- Product page with two columns from tablet width, without empty space below the gallery; “Build a set” clearer on phones.
- Theme editor: selecting a popup, info popup, menu or menu tile opens it in the preview; slides and announcements scroll into view; animations never hide anything in the editor.
- Headings and card titles only hyphenate when a word doesn't fit on the line.
- Pages: consistent top spacing, blog cover image no longer cropped, blog titles at most three lines, glossary without the gap, announcements wrap onto two lines on desktop when needed, long titles shortened in cart and recommendations, two-digit countdown.
- Quote without a preset name; “Matches your pack” in text color instead of the accent color.

**Removed and changed**
- Wishlist removed (heart on product cards, product page button, header link, `wishlist` template): Shopify's Theme Store treats wishlists as app functionality. Please use a wishlist app.
- Store checks in the theme editor removed; the items are now a list under [Mandatory information](11-compliance.md#5-check-before-launch).
- The Follow on Shop button in the footer is off by default.

**Fixed**
- Country and language couldn't be opened on phones.
- An announcement bar with discount codes made the page too wide on phones.
- Duplicate heading in the “Blog posts” block.
- Gallery slider with one image, promo tile in the last column and on phones, placeholder graphics in the store for menu tiles and scroll story slides without an image.
- Cart page: “+” shows the new quantity right away.
- Theme editor: after moving a section, gallery, carousel and header reacted twice or not at all; “Only one entry open at a time” now also works on the landing page.

**Accessibility**
- Focus is never hidden under the sticky header or buy bar, and it is kept after cart changes, when removing filters and in the gallery slider.
- Filters on phones as a dialog; search as a panel closes when tabbing out and also opens with the space bar.
- Announcements for country filter results and product counts in menu links; only the current image of the gallery slider is in the tab order.
- Forms: invalid fields get a colored border, error messages are connected to their field.
- “Reduce motion” from the accessibility panel applies in all scripts (carousel, gallery, full screen view, numbers, header, page transitions).

**Loading speed**
- Secondary features (popup, countdown, set, video, scroll story and more) load when the browser is idle or on first interaction.
- The large image at the top of the home page loads first, card images below the collection image later; render-blocking CSS about two thirds smaller, the country list only loads when opened.
- Lighthouse mobile (median): home page 90, product page 89, collection 87; desktop 98–99.

### Additions from November 20–21, 2026

**Header and navigation**
- One shared panel below the header for submenus, search and country/language – no flicker when moving between menu items, with a choice of animation (“None”, “Fade in”, “Slide down”).
- Mega menu: adjustable width and columns, images on links (small or large), a feature column with a product, collection or image with link, highlighted menu items with color and badge, and click-to-open instead of hover.
- Mobile menu with levels to click through (“Back”) and image tiles before, between or after the menu items.
- Country and language in the header: flag or globe, flags in the list, a search field from nine countries, include or exclude countries by ISO code.
- Search as a panel, an expanding field or an always-visible live search; quick links and product suggestions while the field is empty.
- Announcement bar with a discount code and a “Copy” button.
- Sticky header: its own colors, a more compact height, a smaller or separate logo; more styles for menu links.

**Collections and product cards**
- Image motion on hover: subtle zoom or zoom that follows the mouse, combinable with the second image.
- Choose variants on the card (flavor, color, pack size) and add them to the cart directly.
- Promo tile in the product grid (image, text, link, color scheme, 1 or 2 columns wide).
- Infinite scroll (“Automatically on scroll”), default sorting per list, image fit and a 9 : 16 aspect ratio.
- Subcollections from a collection metafield; rating stars on cards; custom badge colors; equal-height cards with 44 px buttons.

**Product page**
- Gallery layouts “Even grid”, “Mosaic” and “Slider” with thumbnails above, below, left, right, or dots/counter.
- Full-screen gallery instead of image zoom: the image grows to fill the screen, product info slides aside, browse, zoom, close by scrolling.
- The variant image moves to the first position on change; the page no longer jumps.
- New blocks: “Rating stars” (from your reviews app's metafields), “Often bought together”, “Info pop-up” with dosage table and size chart versions, “Benefit list (USPs)”, “Metafield content”.
- “Delivery date” as a single line, “Estimated delivery by …”, with a delivery time per product; the subscription delivery timeline shows the same date as “With you”.
- Facts table: numbers roll in when first visible.
- “Featured product” as a standalone block with a switch for every part; breadcrumbs with a parent collection from a metafield or the last visited collection.
- Variant picker with variant images, three sizes, borderless tiles and “swatch only”; compare-at price color, brand position and brand link.

**Cart**
- Progress bar with up to three tiers (e.g. free shipping, sample, discount), also in other currencies.
- Recommended products automatically (Shopify recommendations), from “Recently viewed” or fixed; 1–4 products, also on the cart page.

**Animation and accessibility**
- Theme settings “Animation”: master switch, intensity, reveal sections, product rows, headings, parallax, line to cart, hover effects, four page transitions.
- “Scroll story” section with slides that blend into each other as you scroll.
- Optional accessibility panel (text size, contrast, spacing, readable font, links, focus, reading mask, reduced motion), off by default.

**Editor**
- Settings appear once they're relevant; clear subheadings in every block.
- Block picker with 13 categories, recommended blocks in product and collection, consistent names (“Cart: items” …).
- Text and label size, separate corners for buttons and input fields, “Custom text” as serving label.
- Structured data for blog posts (BlogPosting) and more organization details.

**Removed before the first release**
- Social media fields for Pinterest, Threads and LinkedIn.
- The “Product” setting in individual product blocks (use “Featured product” instead).
- The “Link: manage subscriptions” setting in the “Search, account, cart” block (the link belongs in the customer account menu).
- The image zoom window (replaced by full screen) and the three-step delivery date display (replaced by a single line).

### First version

**Design and foundations**
- Three styles: Refill (supplements), Mortar (spices, tea, coffee), Pumice (natural cosmetics, drugstore).
- Three font roles (headings, body text, data and prices), five color schemes with nine roles each, lines instead of fills.
- Fully block-based: one section for all content, 27 section templates, group and columns for your own layouts.
- Header with mega menu (product counts per collection, product teaser), mobile menu, quick search, account menu and cart drawer; footer with menus, newsletter, country/language selectors and payment icons.
- Interface texts in English, German, French, Italian and Spanish.
- Right-to-left languages (Arabic, Hebrew, Persian, Urdu): layout, cart drawer and arrows mirror automatically.
- “Shoppable image” block: show products right on a photo (lookbook).

**Buying and reordering**
- Featured product (block and section template), 3D models with “View in your space”, Shop Pay Installments below the price, gift cards sent to a recipient, dynamic checkout buttons on by default, videos and 3D in quick view too.
- Social media profiles (theme settings, “Social media” footer block, structured data), Follow on Shop button, “Custom Liquid” section, cart tax note based on your tax settings, options per cart line, password page with logo or store name, page numbers on All collections, swatches can be turned off, collection image shown by default.
- Purchase options for one-time purchase or subscription via selling plans, with savings as percentage and amount, delivery timeline and “Preselect subscription”.
- Subscription switch per cart item, “Reorder” for signed-in customers, “Manage subscriptions” link in the account menu.
- Quantity tiers (pack sizes or quantity discount), “Build a set”, set contents for fixed bundles.
- Quick add and quick view from the product card, pre-order, back-in-stock request, swatches, combined listings.
- Cart with free shipping progress, “Goes well with”, order note and gift wrap.
- Subscription interval recommended to match how long the pack lasts, with a note when the interval is too long.

**Product facts**
- Key figures with serving, price per day or serving, supply duration (“Lasts 30 days – until …”) and scale values (“3/5”).
- Industry settings: serving label, price per, facts table type, mandatory information product type.
- Facts table for supplements, food, pet food, feeding guide and custom columns.
- Mandatory information per product type with an editor checklist; product safety (GPSR) with manufacturer details from the theme settings.
- Usage and preparation with key values, trust badges with lab report, ingredient spotlight.
- Ingredient glossary with a page per ingredient, “Contained in” and an A–Z overview.
- Delivery date with cut-off time, business days and holidays; custom badges from tags and metafield.

**Pages**
- Collection and search with filters, sorting, subcollection bar and “Load more”.
- Templates for contact, FAQ, about us, landing page without navigation, ingredient glossary, accessibility statement, product (subscription), product (bundle), collection with image, blog, article, 404, password page, gift card.
- Popup for newsletter or promotions, age verification, “Back to top” button, announcement bar, countdown, marquee, carousel, video, logo list.

**Quality**
- Accessibility to WCAG 2.2 AA, tested automatically.
- Loading pages ahead (speculation rules), page transitions, prioritized loading of the first product image.
- Structured data for product groups with GTIN, unit price, subscription offers, shipping and return policies, facts table and ratings; breadcrumbs, organization, FAQ.
