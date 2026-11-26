# Cart and checkout

Refill has a slide-out cart (drawer) and a cart page. Both show the same content and update without reloading. Checkout is provided by Shopify; it is not part of the theme.

## Cart drawer

- Opens when customers add a product to the cart or click the cart icon.
- Contains items with quantity selector, subscription switch per item, the progress bar and “Goes well with”.
- With many items only the list scrolls; subtotal and “Checkout” stay at the bottom. Long product titles take up at most three lines.
- Closes with Escape, a click outside or the close button; focus returns to where it came from.
- Without JavaScript, the cart icon leads to the cart page.

The drawer follows the theme settings under **“Cart”** and the **“Page background color scheme”**.

## Cart after adding

Theme settings → **“Cart”** → **“Cart after adding”**:

| Option | After “Add to cart” | Cart icon |
|---|---|---|
| **“Drawer”** (default) | The drawer opens. | opens the drawer |
| **“Notification”** | “Added to cart” briefly appears below the header with the product name, “View cart” and “Checkout”. Customers keep shopping without interruption; the notification closes with Escape, a click outside or the close button. | opens the drawer |
| **“Page”** | The cart page opens. | links to the cart page, no drawer |

With “Notification”, screen readers hear “Added to cart: product name”; focus stays on the buy button. Without JavaScript every purchase leads to the cart page. On landing pages (“Landing” template, header without drawer) the cart page always opens.


## Cart count

Theme settings → **“Cart”** → **“Cart count”**. The style applies to the header, the cart drawer title and the cart page alike and updates without reloading when items are added or changed.

| Style | Header | Drawer title and cart page |
|---|---|---|
| **“Automatic”** (default, as before) | “CART (2)” next to text, bubble on the icon (mobile) | “CART (2)”; page: label “2 items” on the right |
| **“In brackets (2)”** | “(2)” after the word or icon | “Cart (2)” |
| **“Bubble with number”** | colored bubble on the icon or after the word | bubble after “Cart” |
| **“Dot without number”** | dot on the icon or after the word | dot after “Cart” |
| **“Number only”** | “2” after the word or icon | “Cart 2” |

**“Bubble and dot color”** (for “Automatic”, “Bubble” and “Dot”): “Scheme: accent” (default), “Scheme: text” or one of the brand colors; the number on it is automatically black or white. The rounding follows “Corners”. An empty cart shows no count in the header. Screen readers hear “Cart, 2 items”.

## Cart page

The “Cart” template with the **“Cart”** section and two blocks:

- **“Cart: items”**: items with image, options (for example “Size: 500 g”), subscription plan, quantity selector and remove. **“Show recommended products”** (on by default) adds “Goes well with” below the items.
- **“Cart: summary”**: subtotal, tax and shipping note, progress bar, checkout button. Settings: **“Show order note”**, **“Show dynamic checkout buttons”**.

**Tax and shipping note** (cart summary and drawer): follows your tax settings and the customer's country. With tax-inclusive prices it reads “Taxes included. Shipping calculated at checkout.”, otherwise “Taxes and shipping calculated at checkout.” If you have a shipping policy (Settings → Policies), “Shipping” links to it. If the cart only contains items without shipping (for example gift cards), the shipping part is left out. You can change the wording under Online Store → Themes → … → **Edit default theme content** (search for “taxes”).

### What each item shows

| Detail | Example |
|---|---|
| Line price, with the regular price struck through for discounts or subscriptions | ~~€19.90~~ €17.91 |
| Unit price from quantity 2 | “€19.90 each” |
| Unit price per measure | “€23.43/100 g” |
| Subscription plan with a short delivery timeline | “Today · Dec 21 · Jan 20” (see [Subscriptions](10-subscriptions.md#6-subscriptions-in-the-cart)) |

**Stock:** If Shopify tracks a variant's inventory and overselling is off, the quantity can't be raised above stock – instead of a request, “Only 4 items available.” appears right away. If stock has dropped in the meantime or the item is sold out, the line shows “Only 2 items available.” or “Sold out – please remove it to check out.” above the quantity. In all other cases Shopify corrects the quantity and the theme shows its message.

**Quantity rules (B2B):** If variants in a catalog have a minimum, increment or maximum (Shopify B2B “quantity rules”), the line shows “Minimum: 6 · Increments of 6”. “+” and “−” count in that increment, “−” at the minimum removes the line, and an entry like 7 is set to 6 (with a notice). The quantity field on the product page works the same way; without a quantity field, “Add to cart” adds the minimum. With volume pricing, a “Volume pricing” list appears below the buy button (“1+ €9.90 each · 10+ €8.90 each”).

Discounts, stock and error messages use the status colors, which adapt to the color scheme – readable in a dark drawer too (see [Getting started](01-getting-started.md#colors)).

### Checkout bar on phones

On the cart page on phones, a bar with the subtotal and **“Checkout”** sticks to the bottom of the screen from two items on, while the items scroll past. As soon as the summary's checkout button comes into view, the bar disappears – there are never two checkout buttons on screen. The bar has no setting; on large screens the summary already sits next to the items.

### Gift wrap

1. Create a “Gift wrap” product with a price – with no shipping and in no collection, so it does not show up in product lists.
2. Theme editor → cart page → **“Cart: summary”** block → **“Gift wrap (product)”**: select this product.

The cart page then shows a toggle “Gift wrap (+€2.50)” that adds or removes the product as its own item. For a gift message, turn on **“Show order note”**; customers write the message in the order note. For gift wrap and a gift message in the drawer too, see [Gift options](#gift-options).

### Empty cart and search without results

The **Cart: items** block (cart page) and the **Search: results** block (search page) have a setting **Suggestions when empty**. Pick a collection, for example “Bestsellers”: when the cart is empty or a search finds nothing, the store shows up to four products from it under “Popular right now”. Without a collection, only the message and the button to all products appear.

## Preferred delivery date

Customers choose the day they would like their delivery in the cart. The date field sits below the items in the drawer and above “Checkout” on the cart page. The date is saved to the order as a cart attribute and appears there under “Additional details”, in the format YYYY-MM-DD. Shopify checkout is not changed.

Theme settings → **“Cart”** → **“Show preferred delivery date”** (off by default). Then these settings appear:

| Setting | Effect |
|---|---|
| **“Attribute name”** | How the date is named on the order (default “Delivery date”). Don’t change the name after launch if packing slip templates or apps read it. |
| **“Required”** | See below. |
| **“Lead time (working days)”** | Earliest date: today plus this many working days (Monday to Friday, excluding blocked dates), then the next delivery day. |
| **“Latest date (days from today)”** | How far ahead customers can choose a date. |
| **“No deliveries on”** | Weekdays without delivery: none, Sunday, Saturday and Sunday, Sunday and Monday, or Saturday to Monday. |
| **“Blocked dates”** | One date per line as YYYY-MM-DD, e.g. public holidays (2026-12-25). These days don’t count as working days either. Enter them again every year. |
| **“Note”** | Shown below the field. Empty: “This is a preference, not a guaranteed delivery date.” The theme adds blocked weekdays and holidays automatically, e.g. “No deliveries on Sundays. No deliveries on public holidays either.” |

If someone picks a blocked day, the field shows “There are no deliveries on this day. Please choose another date.” “Checkout” only continues with a valid day. The date is a preference: the theme does not promise delivery on that day. You plan shipping yourself, e.g. with the attribute in your packing slip template.

**Required:** If the field is required, the theme hides every way to checkout that bypasses the field:

- the express checkout buttons (e.g. Shop Pay, PayPal) on the cart page,
- “Buy it now” on the product page, in quick view and in the “Featured product” block,
- “Checkout” in the notice after adding (it then leads to the cart).

The date still cannot be enforced, because checkout can be opened directly. So check orders without a date yourself.

## Gift options

Customers mark an order as a gift in the cart (drawer and cart page). The choices are saved to the order as cart attributes and appear there under “Additional details”. Shopify checkout is not changed.

Theme settings → **“Cart”** → **“Show gift options”** (off by default). Then turn on the individual parts:

- **“Gift wrap” checkbox:** Without a gift wrap product, the checkbox only saves “Yes” as an attribute. It is free and the value is the same in every language.
- **“Gift wrap product”** (optional): With a product, the checkbox adds the gift wrap to the cart as its own line item with a price, e.g. “Gift wrap (+€2.50)”. Create the product as described under [Gift wrap](#gift-wrap). If a gift wrap product is already set in the “Cart: summary” block, that one applies on the cart page.
- **“Gift message” field** with **“Maximum characters”** (default 200). A counter below the field shows the characters written. Unlike the free-form order note, the message has a character limit and a fixed name on the order.
- **“Hide prices on the packing slip” checkbox:** only saves the request, see below.

Under **“Attribute name”** you set how each choice is named on the order (defaults “Gift wrap”, “Gift message”, “Hide prices”). Don’t change the names after launch if packing slip templates, Flow or apps read them. The checkboxes always save “Yes”. So in Flow and in the packing slip template, check for “not empty”, not for a specific value.

### Hide prices on the packing slip

The checkbox only saves the request as an attribute. Shopify creates the packing slip from your template; the theme cannot change it. For the packing slip to follow the request, go to **Settings → Shipping and delivery**, open the **“Packing Slip”** template under **“Documents”** at the bottom, and wrap the price columns in a condition, e.g.:

```liquid
{% if order.attributes["Hide prices"] == blank %} … price … {% endif %}
```

Use the attribute name you have set. You can print the gift message there with `{{ order.attributes["Gift message"] }}`. The packing slip can read the order’s attributes (verified with a test order). Shopify’s default packing slip shows no prices; you only need the condition if your template prints them. Check your template with a test order: open the order → “Print” → “Print packing slips”.

## Progress bar with tiers

The bar shows how much is left until the next reward – for example free shipping from €49, a free sample from €75 and 10% off from €100.

**Theme settings → “Cart” → “Progress bar”:**

| Setting | Meaning |
|---|---|
| “Free shipping threshold” | Tier 1, amount in your store currency, e.g. `49`. `0` = off. |
| “Tier 2: threshold”, “Tier 2: reward” | E.g. `75` and “Free sample”. Tier 2 appears once tier 1 is above 0; “reward” once its own threshold is above 0. |
| “Tier 3: threshold”, “Tier 3: reward” | E.g. `100` and “10% off”. Tier 3 appears once tier 2 is above 0. |

All thresholds default to `0` (off). A threshold you have entered always stays visible.

In the cart, the bar runs up to the highest tier with markers for the others. Above it a line reads “€19.79 more for the next reward: 10% off” (for tier 1, “€12.10 more for free shipping”); with two or more tiers a list below shows each amount, with a check mark once reached. When everything is reached, it says “All rewards reached”. With a single threshold, it stays the simple free shipping note.

**Important:** the theme only shows progress. You set up each reward in Shopify yourself:

1. Free shipping: **Settings → Shipping and delivery** → a shipping rate with the condition “from €49”.
2. Gift or discount: **Discounts → Create discount** → an automatic discount with a minimum order value (e.g. “Buy X get Y” for a free sample, or 10% off from €100).
3. Keep the amounts in the theme and in the discount identical. Only promise in the text what a discount actually delivers.

**Other currencies (Markets):** if someone pays in another currency, the bar converts the thresholds with the current rate and rounds up to whole amounts. Shopify rounds prices per market on its own, so the bar is an approximation there. If the browser can't determine the rate, the bar stays hidden.

The free shipping threshold also feeds the structured data, see [Performance and SEO](14-performance-and-seo.md).

## Free sample in the cart

From a certain order value, customers choose a free sample from a collection in the cart – e.g. a protein sample sachet, 10 g of tea or a trial size of a cream. The sample is added as its own line item (marked “Free sample”, quantity at most 1).

**1. Create sample products.** The theme does not change prices. To make the sample free, there are two ways:

- Create sample products with a **price of 0** (recommended). Shipping as needed; track inventory so empty samples don’t appear.
- Or sample products with a price plus an **automatic discount** (e.g. “Buy X get Y” or 100 % off the sample collection from a minimum order value). The editor flags samples that have a price.

Don’t add samples to other collections. Convenient: an **automated collection** with the condition “Product tag is equal to *sample*”. The setting **“Hide samples in product lists”** (on by default) keeps them out of collection pages, “All products”, search and predictive search, product recommendations, “Frequently bought together”, “Goes well with” and the “Product grid” block – only the sample collection’s own page shows them. Limits: Shopify still counts samples in “24 products” and the number of pages (a page may then show one or two cards fewer), and the first 50 products of the sample collection apply. To remove a sample from search entirely (also for search engines), use the metafield `seo.hidden` = 1.

**2. Theme settings → “Cart” → “Free sample”:**

| Setting | Effect |
|---|---|
| “Sample collection” | Without a collection the feature is off. Up to 8 available products appear. |
| “Minimum order value” | Amount in store currency **without** samples, e.g. `40`. `0` = no minimum (at least one other product must be in the cart). |
| “Samples per order” | 1–3, default 1. |
| “Show selection in cart drawer” | On by default. On the cart page, the **“Cart: summary”** block → **“Show free sample”** controls the display (below the progress bar). |
| “Hide samples in product lists” | On by default. See above. |

**What customers see:**

- **Below the threshold** the [progress bar](#progress-bar-with-tiers) shows the tier “Free sample” and “€12.10 away from a free sample” – there is no separate notice, so nothing appears twice.
- **From the threshold** “Free sample – Choose your free sample.” appears with the samples (image, title, “Free”, button “Choose”). A chosen sample is marked “✓ Selected” with “Remove”. With one sample allowed, “Swap” exchanges it for another.
- **If the cart drops below the threshold** (quantity reduced, item removed), the theme removes the sample and shows “Free sample removed: the order value without samples is below €40.00.” If there are more samples than allowed or a sample twice, it corrects this without a notice.
- **Other currencies (markets):** the threshold is converted like the progress bar; without an exchange rate the selection stays hidden.
- **Without JavaScript** samples can be chosen (the page reloads), but not swapped, and automatic removal does not happen. For a hard limit at checkout, set up the automatic discount with a minimum order value (option 2 above).

## Recommended products (“Goes well with”)

In the cart drawer and on the cart page, “Goes well with” suggests more products, each with “Add”. **Theme settings → “Cart” → “Recommended products”:**

| Setting | Effect |
|---|---|
| “Source” | “Automatic (Shopify recommendations)” (default): products that match the item added last. “Recently viewed”: the products this shopper viewed most recently. “Fixed selection”: only your list. |
| “Recommendation type” | Only with “Automatic”: “Related products” or “Complementary products” (maintained in the Search & Discovery app; without entries the theme falls back to related products). |
| “Number of products” | 1–4, default 2. |
| “Fixed selection” | Products such as trial sizes or accessories. With the other sources they fill any empty slots; without JavaScript only they appear. |

Products already in the cart are never recommended. Titles take up at most two lines. Products with several variants or subscription-only products get “Choose options” (a link to the product page) instead of “Add”. On the cart page, turn the area off in the “Cart: items” block with **“Show recommended products”**.

For recommendations on the product page, use the **“Product recommendations”** section (“Recommendation type”: “Similar products” or “Complementary products”) and the **“Often bought together”** block, see [Product page](06-product-page.md#often-bought-together).

## Build a set

Customers choose several products from a collection and add them to the cart together – for example “3 teas of your choice, 10 % off”.

1. Create a collection with the products for the set.
2. On any page, add the **“Build a set”** section template (or the **“Build a set”** block).
3. Settings:
   - **“Collection”**
   - **“Number of products”** – how many products of the collection are offered
   - **“Minimum quantity in the set (pieces)”**
   - **“Minimum number of different products”** – prevents reaching the minimum with a single product
   - **“Maximum quantity per product (pieces)”**
   - **“Offer text”** – describes the discount
4. Under **Discounts**, create a matching **automatic discount**, e.g. 10 % on products in this collection from 3 items. The theme does not apply any discount itself – the offer text must match the discount rule.

Products with several available variants get one row per option with a pencil, as on product cards (see [Variants on the card](05-collections.md#variants-on-the-card)); values that are sold out entirely are disabled. Without JavaScript, a plain dropdown appears instead. Items already in the cart are kept. If the minimum cannot be reached with the settings, the editor shows a note.

## Quantity tiers

**“Quantity tiers”** block on the product page, **“Tier type”**:

### Pack sizes (variants)

1. Create pack sizes as variants, e.g. an option “Pack size” with “1 tin”, “3 tins”, “6 tins”.
2. In the block, enter the option name under **“Variant option”** (empty: the last option).

The block shows price, unit price and the saving compared to the smallest pack for each size. A click switches the variant.

### Quantity discount

1. Under **Discounts**, create an automatic quantity discount, e.g. 10 % from 3 items, 15 % from 6 items.
2. Enter the same tiers in the block under **“Tiers”**, one tier per line: `quantity | discount in %`, e.g.

```
1 | 0
3 | 10
6 | 15
```

The selection sets the quantity; Shopify calculates the discount in the cart (“The quantity discount is applied in the cart.”). Always keep the tiers in the block and the discount rule identical.

## Fixed bundles

For bundles sold as their own product (e.g. with the “Shopify Bundles” app), there is the `product.bundle` template with the **“Set contents (bundle)”** block. It lists the included products and their quantities and shows the saving compared to buying them separately.

The block reads the variant metafields **“Metafield: products in the bundle”** (default `custom.component_reference`) and **“Metafield: quantities”** (default `custom.component_quantities`). Without this data it is hidden.

## Reorder

The **“Reorder”** block shows signed-in customers their last order (**“Items shown”**) and adds all available items back to the cart with one click. It is hidden for guests and customers without orders. Requirement: customer accounts are turned on.

## Dynamic checkout buttons

Buttons such as PayPal, Apple Pay or Shop Pay are turned on separately:

- Product page: **“Buy buttons”** block → **“Show dynamic checkout buttons”** (on by default; always hidden for products with subscriptions, and for gift cards while “Send to someone else” is selected).
- Cart page: **“Cart: summary”** block → **“Show dynamic checkout buttons”**.

Which payment methods appear is set under **Settings → Payments**.

**Appearance:** In the **“Buy buttons”** block, **“Style of the “Buy it now” button”** sets how the button without a brand logo looks: **“Outline (like secondary buttons)”** (default, so “Add to cart” stays the most prominent button), **“Filled (like primary buttons)”** or **“Shopify default”**. Corners and height always follow the theme buttons (Theme settings → “Layout” → “Corners” → “Buttons”). Shopify renders branded buttons such as Shop Pay, PayPal, Apple Pay or Google Pay in a closed area: the theme can only adjust their corners and height (in the cart too); colors, font and hover are set by the payment provider.
