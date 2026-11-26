# FAQ

## A block does not appear

Go through these points in order:

1. **Product block outside a product page?** Blocks in the “Product: buying”, “Product: content” and “Product: facts” categories show data of the current product. On the home page or regular pages, the editor shows “Shows product data – works on product pages only.”
2. **Metafield empty?** Data-driven blocks (facts table, badges and certificates, ingredients: spotlight, usage, metafield content, benefit list, info pop-up) are hidden when neither the metafield nor the input in the block has a value. Check the product's value and the key under **“Data source”** in the block (`namespace.key`, e.g. `custom.data_table`).
3. **Wrong metafield type?** Then the editor shows “Metafield … has a different type than expected”. The facts table needs a **list of metaobject entries**, trust badges a **list of texts**. See [Product data](09-product-data.md).
4. **Condition not met?**

| Block | only appears when … |
|---|---|
| “Purchase options” | the product has subscription plans |
| “Pickup availability” | local pickup is turned on under Settings → Shipping and delivery |
| “Reorder” | a customer is signed in and has at least one order |
| “Recently viewed” | the visitor has already viewed products |
| “Countdown” | the end is in the future, or a “Text after the end” is set |
| “Sticky buy bar” | the “Buy buttons” block is on the page and scrolls out of view; on large screens only with “Also on large screens” |
| “Set contents (bundle)” | the variant has bundle metafields |
| “Rating stars” | a reviews app fills `reviews.rating` and there is at least one review |
| “Often bought together” | the selected variant is available and the source returns at least one add-on |
| “Info pop-up” | the chosen source (text, page, metafield) has content |
| “Promo tile” | a heading, text or image is set; in collections only on the first page |
| “Delivery date” | the variant is available (not when sold out or on pre-order) |

5. **Empty section?** Sections without visible content collapse in the store but stay visible in the editor.

## A setting from this guide is missing in the editor

Many settings only appear once they have an effect – “Thumbnails”, for instance, only with the “Slider” gallery layout, or the sticky colors only when the header is sticky. Check the setting above it. There's an overview in [Sections and blocks](03-sections-and-blocks.md#settings-appear-when-relevant).

## Images are missing

- **Product without an image**: add images under Product → media.
- **Home page after installation**: images in the hero and image blocks come from the demo store or are empty. Choose your own image in every **“Image”** block.
- **Ingredients without an image**: fill the `image` field in the metaobject entry, or choose an image in the “Ingredient” block.
- **Second image on hover missing**: the setting only works on devices with a mouse and only for products with at least two images.
- **Logo list empty**: the templates intentionally contain no logos. Add “Logo” blocks with your own images.

## The subscription is not visible

1. Is a subscription app installed and a plan created?
2. Is the plan assigned to **this product**?
3. Does the product template used by the product contain the **“Purchase options”** block?
4. The “Subscribe −…%” badge on cards only appears for percentage discounts.
5. The delivery timeline needs a recognizable interval in the plan (“30 days”, “Every 2 weeks”).

More in [Subscriptions](10-subscriptions.md).

## “Price per day” or “Lasts … days” is missing

- Fill the servings per pack metafield (default `custom.servings_per_container`).
- The key in **Theme settings → “Product data”** must not be empty.
- Check **“Show price per day or serving”** and **“Show supply duration”** in the “Key figures” block.
- On product cards, the price per day only appears when all variants have the same price.

## Live search only shows as a “Search” link

With the “Live search in the header” style, the search field only stays in the header from a window width of 1200 px. On smaller screens – and whenever the field would push the menu onto a second line – it expands when shoppers click “Search”. Fewer menu items or a smaller “Font size” in the “Menu” block make room. See [Header and navigation](04-header.md#search).

## The blog posts have no heading

If the **“Heading”** field in the “Blog posts” block is empty, no heading is shown (so it doesn't appear twice next to a separate “Heading” block). Enter a heading or turn on **“Use blog title as heading”**.

## The menu is empty after installation

In the theme editor → “Header” → **“Menu”** block, select your menu. With the Refill style, the template refers to menus from the demo store; the same applies to the “Menu” blocks in the footer.

## Preparation shows the same text for every product (Mortar)

The “Usage” block shows the sample steps from the block as long as the metafield (`custom.preparation`) is empty for a product. Fill the metafield per product, or clear or change the steps in the block.

## Mandatory information shows “food supplement” for a regular food

Change the **“Product type”** in the “Mandatory information” block, or tag individual products with the **“Exclusion tag for default information”** (default `kein-nem`). See [Mandatory information](11-compliance.md).

## The ingredient glossary is empty

Set entries to “Active”, turn on “Web pages” for the metaobject, check the type handle `ingredient` and storefront access. See [Ingredient glossary](12-ingredient-glossary.md).

## Country or language selector is missing

It only appears when more than one country is active under **Settings → Markets** or more than one language under **Settings → Languages**. In the footer it must be turned on in the “Bottom bar”; in the header in the “Search, account, cart” block (**“Show country/region”**, **“Show language”**). If a specific country is missing, check **“Countries in the selector”** and **“Country codes”**, see [Header and navigation](04-header.md#country-and-language).

## Account or “Manage subscriptions” is missing

Turn on customer accounts under **Settings → Customer accounts** and turn on **“Show account”** in the “Search, account, cart” block. Add the “Manage subscriptions” link to the **“Customer account main menu”** (Online Store → Navigation) – the account sheet is Shopify’s account component and shows that menu.

## The progress bar is missing

The “Free shipping threshold” and the tier thresholds are all 0, or the customer pays in another currency and the browser can't determine the exchange rate. See [Cart and checkout](07-cart-and-checkout.md#progress-bar-with-tiers).

## Rating stars don't appear

The stars read the standard metafields `reviews.rating` and `reviews.rating_count`. Check your reviews app's help center to see whether it fills these fields (some apps need this switched on in their settings). Products without reviews show no stars. On cards: Theme settings → “Product data” → “Rating stars”.

## Animations don't show

Check **Theme settings → “Animation” → “Enable animations”** and the individual effect. If your device has reduced motion turned on (operating system or accessibility panel), everything stays still. Content in the first visible area is never animated, by design. See [Animation](08-animation.md).

## Is there a wishlist?

No, Refill has no built-in wishlist (Theme Store rules). Use a wishlist app, see [Wishlist](05-collections.md#wishlist).

## Filters are missing on the collection page

Set up filters in the **Search & Discovery** app (e.g. availability, price, product type, brand). In the “Collection: product list” block, **“Show filters”** must be on.

## The popup does not appear (any more)

The popup appears after the configured **“Delay”**, never on the cart and password pages, and after closing only again after **“At most every … days”**. After a newsletter signup it never appears again in that browser. Use a private browser window to test. If the popup promises a discount, create the discount code yourself under **Discounts**. To turn it off, hide the “Popup” section in the footer group.

## The delivery date is wrong

In the “Delivery date” block, check **“Order cut-off for same-day dispatch (hour)”**, **“Processing time (business days)”**, the transit times and **“Days without dispatch or delivery”**. Enter public holidays again every year (`YYYY-MM-DD`, one date per line). If a product has its own delivery time in the `custom.delivery_days` metafield, it replaces the block's transit time. Calculations use the store's time zone. The same date appears as “With you” in the subscription delivery timeline.

## Back-in-stock requests – where do they arrive?

For sold-out variants, customers can leave their email address (“Buy buttons” block → **“Show back-in-stock request”**). You receive a message via the store's contact form with product, variant, SKU and the customer's address. You notify the customer yourself once the product is back.

## A block can't be dragged into a group

The theme editor only moves blocks by dragging within their current parent. Add the block again inside the group and delete the old one, see [Moving an existing block into a group or column](03-sections-and-blocks.md#moving-an-existing-block-into-a-group-or-column).

## Support

For further questions, contact [support@refill-themes.com](mailto:support@refill-themes.com). Please include your store address (`…myshopify.com`), the theme version and the page concerned, ideally with a screenshot.
