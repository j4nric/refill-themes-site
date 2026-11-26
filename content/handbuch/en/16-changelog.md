# Changelog

Versions follow semantic versioning. From the first published version on, settings and block types are never renamed or removed, only added – your customizations are kept when you update.

## 0.9.0 – November 2026

First complete version of all pages and core features.

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
- “Line art”, “Line animation”, “Counter bar” and “Decoration” (in content) blocks created before this update now follow the alignment of their group. If such a block was deliberately aligned differently from its group (e.g. centered line art in a left-aligned group), turn off “Match group alignment”. The templates of the styles have been updated.
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
