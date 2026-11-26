# Product page

The product page is the **“Product”** section in the `product` template (plus `product.subscription` and `product.bundle`). Every part is its own block that you can move, hide or delete. When you add a block, the picker lists the matching blocks first; everything else is under **“Show all”**.

Product blocks always show the product of the page. To show a different product on any page, use **“Featured product”** (below).

## How the template is set up

This is the `product` template in the Refill style (top to bottom in the buy column):

| Block | In short | More |
|---|---|---|
| Product media | Gallery on the left | [Gallery](#product-media) |
| Product title, Rating stars, Price | Top of the buy column | [below](#title-and-price) |
| Key figures | Serving, price per day, supply duration | [Product data](09-product-data.md) |
| Variant picker, Purchase options, Buy buttons | Choosing and buying | [below](#variant-picker), [Subscriptions](10-subscriptions.md) |
| Delivery date, Pickup availability | Delivery | [below](#delivery-date) |
| Often bought together | Add-ons | [below](#often-bought-together) |
| Profile scales | Properties as a scale (taste, texture …) | [Product data](09-product-data.md#profile-scales) |
| Badges and certificates, Benefit list (USPs) | Trust | [below](#benefit-list-usps) |
| Product description, Metafield content, Mandatory information, Product safety | Collapsible details | [below](#metafield-content), [Mandatory information](11-compliance.md) |
| Sticky buy bar | While scrolling | – |

Below follow the “Facts table and ingredients” and “Routine with products” sections, product recommendations and “Recently viewed”. Like every section, “Product recommendations” has “Color scheme”, “Spacing above and below”, “Width” and “Line above section”. Mortar and Pumice add an info pop-up and a different gallery, see [Theme styles](02-presets.md).

Collapsible blocks placed directly below each other (description, metafield content, mandatory information, product safety) share one divider and read as a single stack.

Gallery and buying column sit side by side from tablet width (windows from about 765 px, including tablets in portrait), and stack on phones.

## Product media

**“Product media”** block → **“Layout on large screens”**:

| Layout | From tablet width up |
|---|---|
| “Grid” (default) | First image large, then two columns; a leftover last image takes the full width |
| “Stacked” | All images full width, one below the other |
| “Even grid (2 columns)” | Equal-size images in two columns |
| “Mosaic (one large, two small)” | Alternates one large and two small images |
| “Slider” | One image at a time, arrows on hover, arrow keys |

With **Slider**, two more settings appear: **“Thumbnails”** (“Below”, “Above”, “Left”, “Right” or “None (dots or counter)”) and – only with “None” – **“Show position as”** (“Counter (1 / 4)” or “Dots”). Thumbnails on the left or right move below the image on phones. If a product has only one image, there are no thumbnails.

**“Aspect ratio”**: 1 : 1 or 4 : 5. On phones the gallery is always a swipeable strip with a counter or thumbnails. Videos, YouTube/Vimeo and 3D models live in the same gallery; phones with AR show “View in your space”.

### Variant image

If a variant has its own image (Admin → Product → Variant → Image), the gallery shows it when that variant is selected:

- **Grid, Stacked, Mosaic:** the selected variant's image moves to the first position and the others follow in their usual order. This also works when someone opens a variant link.
- **Slider:** the slider moves to the variant image.

The page itself doesn't scroll – shoppers stay where they made their choice.

### Full screen

**“Full screen on image click”** (on by default): clicking an image makes it grow to fill the screen while the product info slides aside (downwards on phones).

- Browse: swipe, arrows or arrow keys; a counter shows “2 / 4”.
- Zoom: the magnifier button, a mouse click or a double tap; the zoomed area follows the mouse or finger.
- Close: ×, Escape, scrolling with a mouse wheel or trackpad, or a vertical drag on phones.

Full screen loads images at the resolution the screen needs. With reduced motion it opens without animation. When the setting is off, images aren't clickable.

## Title and price

**“Product title”**: **“Show brand”** with **“Brand position”** (above or below the title) and **“Link brand”** (to a page with all of that brand's products). **“Show subtitle”** appears once **“Metafield: subtitle”** is set under Theme settings → “Product data”.

**“Price”**: **“Show tax and shipping note”**, **“Show Shop Pay Installments”** (only appears when installments are active in your store) and **“Compare-at price color”** (empty = the color scheme's secondary text).

### Rating stars

The **“Rating stars”** block shows stars, the average and the number of reviews – without loading a reviews app's script.

**Requirement:** a reviews app that fills Shopify's standard review metafields (e.g. Judge.me, Loox, Yotpo, Shopify Product Reviews; check your app's help center). The fields aren't visible in the admin; the app writes them.

| Metafield | Type | Content |
|---|---|---|
| `reviews.rating` | Rating | Average with its scale, e.g. 4.6 out of 5 |
| `reviews.rating_count` | Integer | Number of reviews |

**Setup:**

1. Product page → **“Add block”** → **“Rating stars”** (category “Product: content”), drag it below the title. The templates already have it there.
2. **“Appearance”**: **“Show number (e.g. 4.6)”** and **“Show number of reviews”**.
3. Optional **“Link to reviews”** → **“Reviews section anchor”**: the ID of the area where your app shows its reviews (with or without `#`). The stars then jump there.
4. On product cards: Theme settings → “Product data” → “Product cards” → **“Rating stars”**.

Without reviews (or with 0 reviews) the block stays hidden; the editor shows a hint. Screen readers hear “4.6 out of 5 stars, 128 reviews”. The values also feed the structured data.

## Variant picker

**“Variant picker”** block:

| Setting | Effect |
|---|---|
| “Style” | “Tiles”, “Rows” or “Images (variant images)” – image tiles for options whose variants have their own images. |
| “Size” | Small, medium, large (the tap target is always at least 44 px). |
| “Tiles without border” | A filled area instead of an outline; not with “Rows”. |
| “Show swatch only” | Just the swatch; the name shows on hover and above the picker. Only visible when “Show color swatches” is on in theme settings. |

**Swatches** come from Shopify: give the product a category with an attribute such as “Color” and connect the option to that category metafield; each value then gets a color or an image.

Purchase options (one-time or subscription) are covered in [Subscriptions](10-subscriptions.md). In the **“Buy buttons”** block you set quantity, dynamic checkout buttons, stock status (**“Low stock below”**), **“Show back-in-stock request”** and, under **“Advanced”**, the metafield for the pre-order date.

## Delivery date

The **“Delivery date”** block shows one line such as “Estimated delivery by Wed, Nov 25”, plus “if you order by 2 pm” on shipping days before the cut-off. The browser calculates the date in your store's time zone.

| Group | Setting | Meaning |
|---|---|---|
| “Shipping” | “Order cut-off for same-day dispatch (hour)” | Orders placed before this hour ship today. |
| | “Processing time (business days)” | Business days until dispatch. |
| “Delivery” | “Transit time minimum / maximum (business days)” | Delivery time; different values show a range. |
| | “Deliver on Saturdays” | Saturday counts as a delivery day. |
| | “Days without dispatch or delivery” | Holidays, one date per line (`YYYY-MM-DD`). Update them every year. |
| “Data source” | “Metafield: product delivery time” | Replaces the transit time for individual products. |

**Delivery time per product:** create the product metafield `custom.delivery_days` (single line text) and enter business days, e.g. `3` or `3-5`.

The line is hidden for sold-out variants and pre-orders. Without JavaScript it reads “Delivery: 1–2 business days after dispatch”. The subscription delivery timeline uses the same date for “With you”, see [Subscriptions](10-subscriptions.md#4-delivery-timeline).

## Often bought together

The **“Often bought together”** block (category “Product: buying”) shows the product on the page with up to three add-ons. Each row has a checkbox, image, title and price; below are the total and **“Add all”** or **“Add selected”**. One click adds everything in a single step and opens the cart.

| Setting | Effect |
|---|---|
| “Heading” | Default “Frequently bought together”. |
| “Offer text” | E.g. “Save 10% when bought together” – only if you've set up the discount (see below). |
| “Source” | “Automatic (Shopify recommendations)”, “Fixed selection” or “Product list metafield”. |
| “Fixed selection” | Up to three products; with “Automatic” they fill any empty slots. |
| “Metafield (namespace.key)” | Only with “Product list metafield”; prefilled with Shopify's complementary products metafield. |
| “Number of add-ons” | 1–3, default 2. |
| “Preselect add-ons” | Checkboxes start ticked. |

**Where add-ons come from:**

- **Automatic:** first the **complementary products** you maintain in the **Search & Discovery** app (app → Product recommendations → choose a product → add complementary products), otherwise Shopify's related products.
- **Product list metafield:** add-ons per product, e.g. a metafield `custom.bought_together` of type **Product, list of values**.

The page's product follows the selected variant and purchase option (one-time or subscription). Add-ons with several variants get one row per option with a pencil, as on product cards; subscription-only products with several plans also get a “Purchase option” row. **Quick view** uses the same rows to choose variants. If the page's variant is sold out or no source finds anything, the block hides.

**Discounts:** the theme never changes prices. For a bundle offer, create an automatic discount under **Discounts** (e.g. “Buy X get Y” or an amount off from two items) and describe it in “Offer text”. Shopify applies the discount in the cart.

## Routine with products

The **“Routine with products”** block (category “Products and collections”) shows steps with linked products and adds them all to the cart with one click – e.g. a morning and evening routine, a tea ritual or a skincare routine. It works on any page, including the product page (in the styles as its own section below the facts table).

Each **“Step”** has **“Time”** (a short label like “Morning” or “Step 1”), **“Title”**, **“Text”** and optionally a **“Product”**. With a product, a small card appears with image, title (link to the product page), price and – with several available variants – a compact picker.

| Setting | Effect |
|---|---|
| “Heading”, “Introduction” | Top of the block; both optional. |
| “Layout” | “Stacked” (default, numbered list with the card on the right from 600 px width) or “Side by side” (columns from 600 px, stacked when narrower). |
| “Number the steps” | “01”, “02” … in the data font. |
| “Show “Add all to cart”” | Total price and button below the steps. |
| “Button style”, “Button size” | Secondary by default, so the page’s buy button stays the loud element. |

**How “Add all to cart” behaves:**

- Adds all **available** products of the steps to the cart in one go (selected variant, quantity 1); the cart then opens like any other add to cart.
- **Sold-out** products show “Sold out” in their step and are skipped; below the button it says “One sold-out product is skipped.”
- If Shopify rejects adding them together (e.g. because stock has run out in the meantime), the theme adds the products one by one and names what failed (“Not added: …”).
- Products with a subscription option are added as a one-time purchase, subscription-only products with their first plan.
- Without JavaScript the steps keep their links to the products; total price and button are hidden.

The theme does not grant a routine discount. To offer one, create an automatic discount under **Discounts** (e.g. from three products of a collection) and mention it in the introduction. Write steps factually (amount, order, timing), without efficacy claims.

## Info pop-up: size chart and dosage table

A link or button opens a window with extra information – a size chart, a dosage or feeding table, or a grind-size guide. The picker (category “Collapsible and tabs”) has four versions: **“Info pop-up”**, **“Info pop-up: table”**, **“Info pop-up: dosage table”** and **“Info pop-up: size chart”**.

| Setting | Effect |
|---|---|
| “Type” | “General”, “Dosage table” or “Size chart” – sets the label and icon while “Label” is empty. |
| “Label”, “Window title” | Link text and heading in the window (empty = label). |
| “Appearance” | “Text link” or “Button”; “Show icon”. |
| “Source” | “Text”, “Page” or “Product metafield”. |
| “Text” | Only with source “Text”: formatted text without tables. |
| “Page” | A Shopify page whose content appears in the window. |
| “Metafield (namespace.key)”, “Metaobject field” | Only with source “Product metafield”. |

**One size chart for all products (page):**

1. Admin → **Online Store → Pages → Add page**, e.g. “Size chart”. Build the table in the page editor (table icon in the toolbar).
2. Product page → **“Add block”** → **“Info pop-up: size chart”** → **“Page”**: select that page.

**A table per product (metafield):** choose **“Product metafield”** as the source and enter the key. Supported types are rich text, single- and multi-line text, page reference, file (image) and metaobject reference – for metaobjects the block reads the field named in **“Metaobject field”** (default `content`).

Without content the block stays hidden. The window closes with ×, Escape or a click outside; without JavaScript the content expands in place.

## Benefit list (USPs)

**“Benefit list (USPs)”** block – short points such as “Ships within 24 hours” or “Lab tested”, e.g. below the buy buttons. **“Layout”**: “Stacked” or “Side by side”. Side by side, **“Columns”** sets the number of columns: “Automatic” (as many as fit), 2 or 3 – one column on phones. **“Center icon and text”** puts the icon above the text, both centered.

- **Same for every product:** “Benefit” child blocks with **“Text”** and **“Icon”**.
- **Per product:** metafield `custom.usps` (list of single line texts or multi-line text, one line per benefit). When it's filled, it replaces the child blocks, and the **“Icon”** setting under “Data source” applies to all its entries.

## Metafield content

For any product detail without its own block – care, material, dimensions, origin. **“Metafield content”** block:

1. Enter a **“Heading”**, e.g. “Care and handling”.
2. **“Metafield”**: enter the key, e.g. `custom.care`.
3. **“Display”** (appears once a metafield is entered): “Automatic”, “Text”, “List” (one line per item) or “Table” (rows as `Label: value` or JSON).
4. **“Text (if the metafield is empty)”**: fallback for products without a value. It applies to every product using this template.
5. **“Collapsible”** (on by default) and **“Open by default”** (only with a heading).

Without a value and without fallback text, the block hides. It also works inside a tab.

## Facts table: rolling numbers

In the **“Facts table”** block, **“Roll in numbers when first visible”** is on by default: when someone scrolls to the table, the values roll once like a counter to their real figure. Units and separators stay in place, and the table doesn't change size. No animation if the table is already visible on load, with reduced motion or without JavaScript; screen readers always read the real number. How to fill the table is in [Product data](09-product-data.md#setting-up-the-facts-table).

## Breadcrumbs

The **“Breadcrumbs”** block above the product: Home › Collection › Product. The theme picks the collection like this:

1. Product metafield **“Metafield: parent collection”** (default `custom.breadcrumb_collection`, type Collection),
2. otherwise the collection the shopper came from (**“Use last visited collection”**, on by default),
3. otherwise the product's first collection.

Search engines always see option 1 or 3.

## Featured product

The **“Featured product”** block and section template show any product on any page, with gallery (including video and 3D), title, price, variant picker, purchase options and buy buttons just like the product page.

1. Choose a **“Product”**. Without one, the editor shows a prompt.
2. Under **“Content”**, switch parts on or off: **“Show gallery”** (with **“Layout on large screens”** – “Slider” with thumbnails, the default, or “Grid” – and **“Aspect ratio”**), **“Show title”** (with **“Show brand”**), **“Show price”**, **“Show variant picker”** (with **“Style”**), **“Show purchase options”**, **“Show buy buttons”** (with **“Show quantity”** and **“Show dynamic checkout buttons”**) and **“Show “View details” link”**.

Add your own text or badges as further blocks next to it in the same section; inside the block, only app blocks are possible.

## Product page metafields

| Metafield | Type | Used for |
|---|---|---|
| `reviews.rating`, `reviews.rating_count` | Rating, integer | Rating stars (filled by your reviews app) |
| `custom.delivery_days` | Single line text, e.g. `3` or `3-5` | Delivery time per product in “Delivery date” |
| `custom.usps` | List of single line texts or multi-line text | Benefit list per product |
| `custom.breadcrumb_collection` | Collection | Parent collection in the breadcrumbs |
| `shopify--discovery--product_recommendation.complementary_products` | Product (list) | Complementary products from Search & Discovery |
| your own key, e.g. `custom.bought_together` | Product (list) | “Often bought together” with source “Product list metafield” |
| your own key, e.g. `custom.care`, `custom.size_chart` | Rich text, text, page, file or metaobject | “Metafield content”, “Info pop-up” |

All metafields for key figures, facts table, ingredients and badges are in [Product data](09-product-data.md); mandatory information is in [Mandatory information](11-compliance.md).
