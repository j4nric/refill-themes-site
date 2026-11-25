# Collections and product cards

Product cards appear wherever products sit in a grid: collections, search, “Products from collection”, recommendations and “Recently viewed”. You set their look once, centrally. The collection page itself is built from the **“Collection: header”**, **“Subcollections”** and **“Collection: product list”** blocks.

## Product cards

**Theme settings → “Product data” → “Product cards”** – applies to every grid in your store:

| Setting | Effect | Default |
|---|---|---|
| “Rating stars” | Stars and number of reviews below the title, see [Product page](06-product-page.md#rating-stars). | on |
| “Show color swatches” | Swatches on cards, in the variant picker and in filters. | on |
| “Second image on hover” | With a mouse, the card crossfades to the second product image (only for products with at least two images). | off |
| “Image motion on hover” | “No motion”, “Subtle zoom” or “Zoom that follows the mouse”. | Zoom that follows the mouse |
| “Underline title on hover” | Underlines the product title as soon as the mouse is over the card. | on |
| “Title color on hover” | “Accent”, “Text” (no color change) or “Secondary text” from the card's color scheme, or a brand color. | Accent |
| **Buying from product cards** | | |
| “Quick add on product cards” | “Add to cart” or “Choose options” button on the card. | on |
| “Choose variants on the card” | Pick flavor, color or pack size right on the card. | on |
| “Preferred option for cards”, “Pack size options” | Order and display of the option rows, see below. | – |

Custom badges and badge colors (see [Badges](#badges)) follow below.

Which key figures a card shows (serving, price per day) is set in each block, e.g. “Collection: product list” → **“Show key figures (serving, servings)”** and **“Show price per day or serving”**. Both switches only appear once the metafields for amount per serving or servings per pack are entered under Theme settings → “Product data”.

Long product titles take up at most two lines on cards. Headings and titles only hyphenate a word when it doesn't fit on a line by itself.

### Image motion on hover

- **“Subtle zoom”** enlarges the image by a few percent.
- **“Zoom that follows the mouse”** zooms the same way and shifts the image a few pixels against the mouse movement – it feels three-dimensional without ever showing an edge.
- Both only work with a mouse – not on touch devices and not with reduced motion. They combine with **“Second image on hover”**: both images then zoom together.

### Title on hover

The whole card is a link. To show which card is about to open, it highlights the title as soon as the mouse is anywhere over the card – and also when someone tabs to the title with the keyboard:

- **“Underline title on hover”** turns the underline on or off.
- **“Title color on hover”** picks the color from the card's color scheme: “Accent” (the color of links and buy buttons), “Text” (color stays) or “Secondary text”. All three are easy to read in the scheme. The five brand colors are also available: if one is too weak on the card's background (below 4.5 : 1, e.g. accent 1 on the dark scheme), the card uses the scheme's text color there. There are deliberately no free colors, so the title stays readable on light and dark schemes.
- With “Text” and the underline off, the title stays calm; only the image motion (if enabled) then marks the card.

### Variants on the card

With **“Choose variants on the card”**, shoppers buy straight from the grid without opening the product page:

- Every option with several values appears as a **quiet row** above the button: the option name on the left (e.g. FLAVOR), the selected value next to it, a small edit icon (a pencil over a square) on the right.
- A click on the row shows the values below it as choices; the icon turns into an ×. Only one row is open at a time. After choosing, the row stays open so shoppers can compare at their leisure; it closes with the × (or Escape on the keyboard). The area behind the icon and the × follows the “Corners” setting (square, slightly rounded or round).
- Choosing updates the image (variant image), price, compare-at price and unit price. Sold-out or unavailable combinations are struck through.
- **“Add to cart”** adds exactly the chosen variant and opens the cart. If “Preselect subscription” is on and the variant offers a subscription, the first subscription plan is added.
- Products with a single variant have no rows. If a product is only sold as a subscription, the button reads **“Choose options”** and opens quick view.

The same rows appear in **“Build a set”**, **“Often bought together”** and **quick view**. The product page keeps its own variant picker.

How to control the rows (applies to all four places):

| Setting | Meaning | Example |
|---|---|---|
| “Preferred option for cards” | Option names separated by commas. These rows come first, the others follow in product order. | `Flavor, Color, Variety` |
| “Pack size options” | The values of these options appear as text choices, even if they have swatches. All other options show the swatch next to the name if “Show color swatches” is on and the value has one. Prefilled with common names in five languages. | `Size, Pack size, Weight` |

Without JavaScript, the rows on the card are hidden and the button links to the product page.

### Badges

Cards show “Sold out”, “Sale” and “Subscribe −10%” automatically, plus up to two custom badges from a `badge:…` product tag or a metafield (see [Product data](09-product-data.md#badges-on-product-cards)).

To give specific badges their own colors: **Theme settings → “Product data” → “Badge colors”**. Enter the badge text under **“Badge 1: text”** (e.g. `New`; case doesn't matter) and **“Background”** and **“Text color”** appear. Without a text color, the theme picks black or white, whichever reads better. You can color four badges this way.

## Collection page

The `collection` template contains breadcrumbs, **“Collection: header”** (title, description and collection image – **“Show collection image”**, on by default), **“Subcollections”** and **“Collection: product list”**.

### Product list

**“Collection: product list”** block:

| Group | Settings |
|---|---|
| “Appearance” | “Columns on large screens” (2–5), “Columns on small screens” (1–2), “Image aspect ratio” (1 : 1, 4 : 5, 9 : 16), “Image fit” (“Fill frame (crop)” or “Show whole image” for cut-out products), key figures and price per day |
| “Filtering and sorting” | “Show filters”, “Show sorting”, “Default sorting” |
| “Pagination” | “Products per page”, “Pagination” |

Next to a filter sidebar, cards never get narrower than about 200 px; if space is tight, the grid shows one column fewer than you set.

**Filters** are set up in the **Search & Discovery** app (availability, price, product type, options, metafields). Color values with swatches appear as swatches.

### Default sorting

Shopify sorts a collection the way it's set in the admin (Products → Collection → **Sort**). That's the fastest option. If you want collections to open with a different order without changing each one, pick a **“Default sorting”** in the block, such as “Best selling” or “Date, new to old”. If it differs, the theme redirects to the sorted address right away when the collection opens (one extra page request). “As set in the collection” turns this off. The default also applies when “Show sorting” is off.

### Page numbers, “Load more” or infinite scroll

**“Pagination”**:

| Value | Behavior |
|---|---|
| “Page numbers” | Classic pages 1, 2, 3 … |
| ““Load more” button” | Adds the next page to the list. |
| “Automatically on scroll” | Loads the next page just before the shopper reaches the end of the list. After five pages the “Load more” button returns so the footer stays reachable. |

With “Load more” and “Automatically”, the address stays shareable (it reflects the last loaded page), and screen readers hear “Showing 36 of 60 products”. Without JavaScript, a link to the next page is shown. The **“Search: results”** block offers the same choice.

## Promo tile

A tile inside the product grid – for a promotion, a guide or a sample set. It's available in the **“Collection: product list”** block and the **“Products from collection”** block.

1. Expand the block → **“Add block”** → **“Promo tile”**.
2. **“Placement”**: **“After product no.”** (0 = before the first product) and **“Width”** (“1 column” or “2 columns”).
3. **“Content”**: **“Image”** (with **“Image fit”** once an image is chosen), **“Heading”**, **“Text”**, **“Link”** and – once a link is entered – **“Button label”**.
4. **“Appearance”** → **“Color scheme”** (default Scheme 2).

Good to know:

- You can add several tiles, each with its own position.
- In collections, tiles only appear on the first page. “Load more” and infinite scroll append products without tiles; after filtering or sorting, the tile is back in its place.
- If the position is higher than the number of products, the tile goes at the end.
- With a link, the whole tile is clickable. Without heading, text and image it stays hidden in the store; the editor shows a hint.
- Like “Add to cart” on product cards, the button sits below the tile area: same height, same style and in line with the card buttons in the same row.
- If a 2-column tile lands in the last column of a row, the next product card moves into the gap. On phones, a tile that stands alone in its row is at least half the grid width tall.

## Subcollections

The **“Subcollections”** block shows a bar of collections as chips above the product list. Sources, in this order:

1. A **collection metafield** on the current collection (recommended – each collection gets its own subcollections),
2. otherwise **“Collections (fallback)”** – the same selection on every collection page without the metafield,
3. otherwise a **“Menu”** (only shown while no fallback collections are selected).

**Set up the metafield:**

1. Admin → **Settings → Metafields and metaobjects → Collections → Add definition**.
2. Name it, e.g. “Subcollections”, with namespace and key `custom.subcollections`.
3. Type **Collection**, **List of values**, save.
4. Open the parent collection (Products → Collections) → under **Metafields** at the bottom, pick the subcollections. Their order there is the order of the chips.

The first chip, “All”, links to the current collection. If you use a different key, enter it in the block under **“Data source” → “Metafield: subcollections”**.

| Metafield | Resource | Type | Used for |
|---|---|---|---|
| `custom.subcollections` | Collection | Collection (list) | Chips in the subcollections bar |

## Collection list

**“Collection list”** block: collections as tiles; left empty, every collection with products. On the “All collections” page the list is paginated (**“Maximum number”** per page). **“Image aspect ratio”** (1 : 1, 4 : 5, 3 : 2) and **“Image fit”** (“Show whole image”, the default – nothing is cropped – or “Fill frame”). Long names wrap inside the tile.

## Search page

The “Search” template contains **“Search: header”** and **“Search: results”** with filters, columns, key figures and the same **“Pagination”** as collections (page numbers, “Load more”, “Automatically on scroll”). Under **“No results”** → **“Suggestions when empty”**, choose a collection; up to four of its products appear when a search finds nothing. Quick search in the header is covered in [Header and navigation](04-header.md#search).

## Wishlist

Refill has no built-in wishlist: Shopify's Theme Store rules treat wishlists as app functionality. For a wishlist, install a wishlist app and add its app blocks in the theme editor under **“Add block” → “Apps”** (for example on the product page).
