# Getting started

Refill is a Shopify theme for products that customers buy again and again: supplements, tea, coffee and spices, natural cosmetics and drugstore products, pet food. Subscriptions, pack sizes, reorder and clear product facts are built in.

This guide covers version 0.9.0. All labels in quotation marks appear exactly like this in the theme editor.

## In this guide

| Chapter | What it covers |
|---|---|
| [Theme styles (presets)](02-presets.md) | Refill, Mortar, Pumice and the industry settings |
| [Sections and blocks](03-sections-and-blocks.md) | How pages are built, settings, all blocks at a glance |
| [Header and navigation](04-header.md) | Mega menu, mobile menu, search, country and language, announcement bar |
| [Collections and product cards](05-collections.md) | Cards, filters, sorting, infinite scroll, promo tile |
| [Product page](06-product-page.md) | Gallery, ratings, delivery date, “Often bought together”, info pop-up |
| [Cart and checkout](07-cart-and-checkout.md) | Cart, checkout bar on phones, progress bar, recommendations, sets, quantity tiers |
| [Animation](08-animation.md) | Scroll effects, page transitions, scroll story |
| [Product data](09-product-data.md) | Metafields and metaobjects for key figures, facts table, ingredients |
| [Subscriptions](10-subscriptions.md) | Subscription app, purchase options, delivery timeline |
| [Mandatory information](11-compliance.md) | Manufacturer (GPSR), mandatory information per product type, unit price |
| [Ingredient glossary](12-ingredient-glossary.md) | A page per ingredient, A–Z overview |
| [Accessibility](13-accessibility.md) | What the theme does, accessibility panel, accessibility statement |
| [Performance and SEO](14-performance-and-seo.md) | Loading pages ahead, images, structured data |
| [FAQ](15-faq.md) | Troubleshooting |
| [Changelog](16-changelog.md) | Versions |

## 1. Install the theme

1. Open Refill in the Shopify Theme Store.
2. Choose a style: **Refill** (supplements), **Mortar** (spices, tea, coffee) or **Pumice** (natural cosmetics, drugstore). See [Theme styles (presets)](02-presets.md) for the differences.
3. Click “Try theme” or add the theme to your theme library.
4. In your admin, go to **Online Store → Themes**. Refill appears in your theme library. Click **Customize** to open the theme editor.

Work in the unpublished copy first. Publish the theme once you have completed the steps below.

> The style sets colors, fonts, home page, product template, header and footer. To switch to a different style later, add the theme again from the Theme Store with that style and move your content over.

**Sample content:** The headings, texts and buttons in the templates are written in German. Replace them with your own text in your store's language.

## 2. Your first 10 minutes

### Logo and favicon

1. Theme editor → **“Header”** section → **“Logo”** block.
2. Upload your logo under **“Logo image”** and set its size with **“Logo height on desktop”** (from a window width of 990 px) and **“Logo height on mobile”** (below that, including tablets); the width follows the aspect ratio. If **“Size logo by”** is set to “Width (previous)”, **“Logo width”** applies instead. Without an image, the store name is shown.
3. **Theme settings** (gear icon) → **“Layout”** → **“Favicon”**: square image, at least 180 × 180 px. The favicon appears in the browser tab, bookmarks and history (32 × 32 px) and on phone home screens. Simple shapes stay recognizable best at that size.
4. Optional, in the “Logo” block under **“On scroll”**: **“Logo size when sticky”** and **“Separate logo when sticky”**, see [Header and navigation](04-header.md#logo-and-scroll-behavior).

### Colors

**Theme settings → “Colors”** contains five color schemes. Each scheme has the same roles:

| Role | Used for |
|---|---|
| “Background” | Section background |
| “Background gradient” | Optional, replaces the solid background on large areas |
| “Text” | Body text and headings |
| “Secondary text” | Labels and form borders – needs at least 4.5 : 1 contrast against the background |
| “Divider lines” | Lines between areas and columns |
| “Accent” | Buttons, badges, highlights |
| “Text on accent” | Text on accent areas – needs at least 4.5 : 1 contrast against the accent color |
| “Image background” | Area behind cut-out product images |
| “Selected option” | Selected variant, selected purchase option |

Every section, the header and the footer have their own **“Color scheme”** setting (default: Scheme 1). **To change colors across the whole store, edit Scheme 1.** **“Page background color scheme”** only applies to the background behind and between sections and to the cart, quick search and dialogs – ideally choose the same scheme as for your sections.

What the five schemes are meant for (applies in all styles):

| Scheme | Refill default | Use |
|---|---|---|
| 1 | “Paper”, near white | Default for all sections |
| 2 | “Surface”, cool light grey | Calm change between sections (subscription explainer, FAQ, product area) |
| 3 | “Light blue”, derived from the accent | Quiet accent (hero, comparison, promo tile) |
| 4 | “Ink”, dark | Marquee, key figures, quotes |
| 5 | “Signal”, accent surface | The one loud spot on a page (offer, subscription call to action) |

Tip: Change “Accent” and “Text on accent” first – these are your brand’s main colors. The other roles are already balanced in each style.

### Brand colors

**Theme settings → “Brand colors”** holds five fixed colors for single elements, independent of the color scheme:

| Setting | Refill default | Meant for |
|---|---|---|
| “Accent 1” | `#1F4FD1` (signal blue) | Badges, lines, brand elements |
| “Accent 2” | `#0F5E6E` (petrol) | Second brand color |
| “Promotion / sale” | `#B42318` (red) | Sale prices, promotion badges |
| “Highlight” | `#F2C230` (yellow) | Surfaces such as badges – too light as a text color on light backgrounds |
| “Success / seal” | `#1A6E46` (green) | Quality seals, “lab-tested” |

Wherever a block offers a color, choose between **“Scheme color”**, a **brand color** and **“Custom color”** (the color picker then appears): the **“Badge”** block (setting “Style”), badge colors under **“Product data”** (setting “Color” per badge) and **“Compare-at price color”** in the **“Price”** block. Change a brand color and it changes everywhere it is selected. Text on a brand color is black or white automatically, whichever reads better.

**Prices:** Under “Brand colors” → **“Prices”** you set **“Sale price”** (default in the Refill style: “Brand color: promotion / sale”) and **“Compare-at price”** (default: “Scheme: secondary text”). This applies to the product page, product cards and cart. The sale color **only appears when a compare-at price is shown next to it** (compare-at price higher than the price, subscription saving or a discount in the cart); products without a compare-at price keep the normal text color. If a brand color does not reach 4.5 : 1 contrast on a color scheme’s background (e.g. red on the dark scheme 4), the theme automatically uses the scheme’s text or secondary text color there.

**Status colors** for success, notice and error (e.g. “In stock”, discounts, error messages) are built into the theme and have no setting of their own. If one of them would be hard to read on a color scheme’s background (below 4.5 : 1, for example on dark or strongly colored schemes), the theme automatically uses a darker or lighter variant there, or the scheme’s text color as a last resort. Status is never shown by color alone, always together with text or an icon.

### Fonts

**Theme settings → “Typography”**: three fonts for **“Headings”**, **“Body text”** and **“Data and prices”**. The data font is used for numbers, prices, units and short labels; a monospaced font works best. Under **“Font sizes”**, **“Heading size”** scales all headings and titles, **“Size of text and labels”** scales body text, labels, prices, key figures, forms and buttons – in all sections and blocks (90–120%). Input fields stay at least 16 px.

### Corners

**Theme settings → “Layout” → “Corners”**: **“Cards, images and panels”** (square, subtle or soft), plus separate **“Buttons”** and **“Input fields”** (same as cards and images, square to round, or “Pill”). Dropdowns show their own arrow with a fixed distance to the edge.

### Buttons

There are three button styles: **“Primary”** (filled in the accent color – the one prominent spot of a view), **“Secondary”** (outline) and **“Tertiary”** (the quietest). Choose the style and **“Button size”** (“Normal” or “Small”) for each button in its block, e.g. the “Button” block, scroll story slides and the “All posts” link of the blog posts. Small buttons are a little lower but still easy to tap.

Set how the tertiary button looks under **Theme settings → “Buttons”**: **“Style”** “Text with arrow” (default: underlined text with →) or “Tinted fill” (lightly tinted area without outline), plus the **“Color”** from the color scheme (“Scheme: text” is the default, “Scheme: accent”) or a brand color. If a brand color is too weak as text on a color scheme (below 4.5 : 1), the theme uses the scheme’s text color there.

### Menus

1. In your admin, create a main menu and a footer menu under **Online Store → Navigation** (new stores already have “Main menu” and “Footer menu”).
2. Theme editor → **“Header”** → **“Menu”** block → **“Menu”**: select your main menu. Menus can have up to three levels; on large screens they open as a mega menu, on phones as a menu you click through level by level.
3. Theme editor → **“Footer”** → **“Menu”** blocks: choose one menu per column (e.g. Service, Legal).

> Check this step carefully with the Refill style: the template refers to menus from the demo store. If those menus do not exist in your store, the menu stays empty until you select yours.

Images and featured content in the mega menu, image tiles in the mobile menu, search, country and language, and how the header behaves on scroll are covered in [Header and navigation](04-header.md).

### “Back to top” button

Under **Theme settings → “Layout”**, **Show “Back to top” button** adds a button that returns to the top of long pages. Below it: **“Display”** (“Icon”: a square with an arrow, tap target at least 44 px, covers the least content; “Icon and text”; or “Icon on phones, icon and text on desktop” – screen readers always announce “Back to top”), **“Color”** (“Scheme: outline” as before, “Scheme: accent” or a brand color as a fill with black or white text), **“Font”** (data, heading or body font; only the data font is set in uppercase), **“Bold”** and **“Size”** (S, M, L).

The button moves out of the way of fixed bars: it sits above the sticky buy bar, the compare bar and the cookie banner while they are visible. On the product page on phones, it only appears together with the sticky buy bar (above it), so it never covers prices in the buy area.

### Announcement bar

The **“Announcement bar”** section above the header: each **“Announcement”** block is one line with an optional link and an optional **“Discount code”** to copy (details in [Header and navigation](04-header.md#announcement-bar)). Adjust texts such as free shipping thresholds to your actual terms or delete them.

### Home page

The home page is filled with sample sections. Work through them from top to bottom:

1. **Replace images**: click the section, select the **“Image”** or **“Image with text”** block and upload your own image. For the first large image at the top of the page, turn on **“Load immediately (image at the top of the page)”**.
2. **Choose collections**: the **“Products from collection”**, **“Collection list”** and **“Build a set”** blocks need a collection from your store.
3. **Edit the text**: headings, text, buttons. Write factually, without health or efficacy claims.
4. Hide sections you do not need with the eye icon, or delete them.

Add new sections with **“Add section”**. Ready-made section templates such as “Image with text”, “FAQ” or “Product grid” are listed there directly, see [Sections and blocks](03-sections-and-blocks.md).

### Footer

The **“Footer”** section holds **“Text”**, **“Menu”**, **“Newsletter”** and **“Social media”** blocks (up to eight blocks in total). If you leave a menu's **“Heading”** empty, the menu name is used; new menu blocks start with the Shopify menu **“Footer”**. The **“Bottom bar”** optionally shows **“Show country/region selector”**, **“Show language selector”**, **“Show payment icons”** and **“Show policy links”**, plus **“Show flags”** for the country selector. Country and language appear as compact buttons with a list (see [Header and navigation](04-header.md#country-and-language-in-the-footer)) and only appear once more than one country or language is active under **Settings → Markets**.

In the **“Footer”** section itself, **“Column headings”** controls how the column headings look: **“Color”** (scheme color, brand color or custom color; the theme replaces weak contrasts with the scheme color), **“Font”** (data, heading or body font), **“Size”** (S, M, L), **“Bold”** and **“Uppercase”**. Default as before: data font, small, uppercase, secondary text.

### Social media and Follow on Shop

1. Theme settings → **“Social media”**: enter full profile URLs, for example `https://www.instagram.com/yourshop` (Instagram, Facebook, TikTok, YouTube, X). Empty fields use the links from **Settings → Brand**, if any.
2. The **“Social media”** footer block shows only networks with a link, as icons (name for screen readers) or, under **“Style”**, as **“Icons with names”**. Without links and without the Shop button it hides itself.
3. The profiles are also added as `sameAs` to the store's structured data (home page), the X profile as `twitter:site`.
4. **“Show Follow on Shop”** (off by default) shows the button that lets customers follow your store in the Shop app. Shopify controls its look and colors. It requires **Shop Pay** and the **Shop** sales channel.

### Customer address form

**Theme settings → “Language and text” → “Customer address form”** sets how the theme’s texts address your customers: **“Informal (du/tu)”** (default) or **“Formal (Sie/vous/Lei/usted)”**. It applies to every theme language with a polite form – German (du/Sie), French (tu/vous), Italian (tu/Lei), Spanish (tú/usted), Dutch (je/u), Polish, Czech (ty/vy) and Portuguese. English and the Nordic languages (Danish, Finnish, Swedish) are unaffected. It covers sentences such as “Dein Warenkorb ist leer.” / “Ihr Warenkorb ist leer.”, the confirmations after the contact form, newsletter sign-up and comments, and the messages in search, the delivery timeline and back-in-stock alerts.

Texts you enter yourself in sections and blocks (headings, paragraphs, button labels) are not changed. Some templates and new blocks start with sample texts in the informal form, for example “Abo nach deinem Takt”, “10 % auf deine erste Bestellung”, “Stell dein Set zusammen”, “Das könnte dir auch gefallen” or “Bist du mindestens 18 Jahre alt?”. Adjust them in the editor if you use the formal form. If you edit storefront texts under Online Store → Themes → … → **Edit default theme content**, the formal versions are listed under **“Sections › Formal”**.

## 3. Before you publish

1. **Enter manufacturer details**: Theme settings → **“Mandatory information”**, see [Mandatory information](11-compliance.md).
2. **Connect product data**: Theme settings → **“Product data”**, see [Product data](09-product-data.md).
3. **Go through the required items**: policies, manufacturer details, unit prices, alt texts, contrast and meta descriptions, using the list in [Check before launch](11-compliance.md#5-check-before-launch). Open the home page, a product page and the cart and work through the items.
4. **Review optional features**: animation (Theme settings → “Animation”), the accessibility panel (Theme settings → “Accessibility options”) and Follow on Shop (footer, “Social media” block) – see [Animation](08-animation.md) and [Accessibility](13-accessibility.md).
5. **Publish**: Online Store → Themes → **“Publish”** on Refill.

## Help

For questions about the theme, contact support at [support@refill-themes.com](mailto:support@refill-themes.com). Please include your store address (`…myshopify.com`), the theme version and the page concerned.
