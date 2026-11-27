# Subscriptions

Refill works with any subscription app that uses Shopify **selling plans**, for example the “Shopify Subscriptions” app. The theme displays the subscription plans and calculates savings, price per day and delivery dates. Sign-up, billing and management of subscriptions are handled by the app.

## 1. Create a subscription plan

1. Install a subscription app, e.g. “Shopify Subscriptions”.
2. Create a plan in the app, e.g. “Subscribe & save” with deliveries every 30, 60 and 90 days and a discount.
3. Assign the plan to the products you want.
4. Add a subscription policy under **Settings → Policies**.

**Naming delivery intervals:** the delivery timeline reads the interval from the plan's first option or its name. It recognizes a number plus day, week or month, e.g. “30 days”, “Every 2 weeks”, “1 month”, “Alle 2 Wochen”. A month counts as 30 days. Without a recognizable interval, the timeline is hidden; the subscription still works.

## 2. Purchase options on the product page

The **“Purchase options”** block is included in all product templates. It only appears for products with subscription plans.

- Subscription rows come first, with savings as a percentage and an amount (“You save €1.99 per delivery”); one-time purchase comes last.
- Switching updates price, key figures (price per day at the subscription price) and timeline without reloading the page.
Block settings: **“Show delivery timeline”** and **“Recommend interval matching the supply”**.

### Interval matching the supply

With **“Recommend interval matching the supply”** (on by default), the block compares how long the selected pack lasts with the plans' delivery intervals:

- It recommends the plan with the longest interval the pack still covers (with about 10 % leeway). That plan is marked “Matches your pack · lasts 30 days”.
- If no plan is selected yet and “Preselect subscription” is on, this plan is preselected instead of the first one.
- If the selected interval is longer than the pack lasts, a note appears (“This pack lasts about 30 days, but deliveries come every 60 days. A shorter interval avoids running out.”).

This needs servings data on the product (servings per pack, optionally servings per day), see [Product data](09-product-data.md). Without it, the block behaves as if the setting were off.

### “Product (subscription)” template

The `product.subscription` template places the purchase options directly below the price, before the key figures. Assign it to products you mainly sell by subscription: open the product → **“Theme template”** → `subscription`.

## 3. Preselect subscription

**Theme settings → “Product data” → “Preselect subscription”** (on by default):

- Products with subscription plans open with a subscription plan instead of one-time purchase.
- Links in the theme (product cards, search, recommendations) lead directly to the first plan, so price and selection match from the start.
- If the product page is opened without a plan (e.g. from a search engine), the theme selects the plan matching the supply, otherwise the first plan.
- Customers can choose “One-time purchase” at any time; that choice is kept.

If a product is set up in the app as “subscription only”, the first plan is always selected.

## 4. Delivery timeline

With a subscription selected, the timeline shows “Next deliveries” as points on a line:

| Point | Example | Source |
|---|---|---|
| Today | “Today – Ordered” | – |
| First delivery | “by Nov 25 – With you” | The same date as the “Delivery date” block (cut-off, processing time, transit time, product delivery time), see [Product page](06-product-page.md#delivery-date) |
| Following deliveries | “Dec 26 – Delivery 2”, “Jan 25 – Delivery 3” | Order date plus the selected plan's interval – the way the subscription app triggers follow-up orders, and the same as in the cart |

Below it reads “Then every 30 days. Change or cancel in your account.” If there's no “Delivery date” block on the page, the timeline counts deliveries from today. The dates are a preview based on the plan's interval; the dates in your subscription app are binding. Without JavaScript the timeline shows the dates counted from today.

## 5. Subscriptions on product cards

Product cards of subscription products show the badge “Subscribe −10 %” with the highest percentage saving of the plans.

If **“Quick add on product cards”** is on:

- Products **without** variants go straight to the cart – with the first subscription plan if “Preselect subscription” is on, otherwise as a one-time purchase.
- Products **with** variants: with **“Choose variants on the card”**, customers pick a flavor or pack size right on the card, and the button adds that variant with the first subscription plan (when “Preselect subscription” is on). Products with further options or subscription-only products open quick view, where customers choose the variant and purchase option. See [Collections and product cards](05-collections.md#variants-on-the-card).

## 6. Subscriptions in the cart

- Subscription items show the plan name and, below it, a short delivery timeline with the next dates and what they mean, e.g. “Today – Ordered · Dec 26 – Delivery 2 · Jan 25 – Delivery 3”. The dates are counted from the order date, as on the product page (without a recognizable interval the timeline is left out).
- The price without the subscription is struck through next to the subscription price, so the saving stays visible.
- Items **without** a subscription whose product has a plan offer a switch: short, with an icon, “Subscribe and save 10%” or “Switch to subscription”. With one plan for the variant, one click moves the item to it (only screen readers hear the plan name). With several plans the hint opens a list of the plans with plan name and saving (the first is selected; long names wrap and stay fully readable on phones), and “Apply” switches; if the savings differ, the hint reads “Subscribe and save up to 15%”. Without JavaScript it leads to the product page.
- Dynamic checkout buttons (PayPal, Apple Pay, Shop Pay) are hidden on product pages with subscriptions because they cannot handle subscriptions.

## 7. Link the customer portal

The account in the header is Shopify’s **account component**: a click opens a sheet with sign-in (including “Sign in with Shop”) and the links of the **“Customer account main menu”**. Add the subscription portal link there:

1. Copy the customer portal address from your subscription app (with Shopify Subscriptions, “Subscriptions” appears in the customer account automatically).
2. Go to **Online Store → Navigation** and open **“Customer account main menu”**.
3. Add a menu item, e.g. “Manage subscriptions”, with that address.

Requirements: customer accounts are turned on under **Settings → Customer accounts**, and **“Show account”** is on in the **“Search, account, cart”** block.

## 8. Reordering without a subscription

For customers without a subscription there is the **“Reorder”** block (included on the home page): signed-in customers see their last order and add all available items back to the cart with one click. Subscription items are added as one-time purchases. For guests, the section is hidden.

## 9. Supply and savings calculators

Two product page blocks help customers decide on a subscription. Both only use your product data and prices – no claims about effects. They need **servings per pack** (optionally **servings per day**), see [Product data](09-product-data.md). If a product or variant lacks these values, the blocks hide themselves; the editor shows a note.

### Supply calculator “How long does it last?”

Customers enter their usage (a number and “per day” or “per week”) and immediately see:

- **Lasts about:** how long one pack of the selected variant lasts (servings per pack ÷ usage).
- **Matching delivery interval:** the subscription plan with the longest delivery interval the supply still covers (like the recommendation in the purchase options, with about 10 % leeway). If every interval is longer than the supply, the shortest one is shown with a note.
- **“Choose this interval”** selects the plan in the “Purchase options” block; price, key figures and delivery timeline update as if chosen by hand.

The starting value is “servings per day” from the product data. The input label follows the theme setting **“Serving label”**, e.g. “Number of daily doses”, “Number of cups” or “Number of applications”.

Settings: **Heading** (empty: “How long does it last?”), **Text**, **Enter usage per** day or week (default; customers can switch), **Input label** (empty: automatic), **Recommend matching subscription interval**. Without subscription plans the block only shows how long the pack lasts.

Also available in the **“Featured product”** block: **“Show supply calculator”** (off by default).

### Savings calculator

Compares subscription and one-time purchase, projected over one year:

- **Packs** per year: 365 days ÷ supply, rounded.
- **One-time purchase:** packs × price of the selected variant.
- **Subscription:** the same packs at the price of the matching plan. If the subscription app staggers the discount (e.g. “first 3 deliveries −20 %, then −10 %”), each step is included.
- **Savings:** the difference. Without a price benefit, the three amounts are hidden.
- **Less packaging** (optional): grams of packaging one pack saves compared with buying new, × packs. Source: a number metafield (setting **“Metafield: packaging saved per pack (g)”**, e.g. `custom.packaging_saved`; variant metafield before product metafield, so the value can apply to the refill pouch only) or a fixed value.

Settings: **Heading** (empty: “Subscribe or buy once?”), **Text**, **Let customers enter their usage**, **Enter usage per**, **Input label**, **Show estimate note** (“Estimate … excluding shipping”), plus the packaging fields.

**Working together:** With both blocks on one page, they share the usage – an entry in the supply calculator also updates the savings. Turn off **“Let customers enter their usage”** in the savings calculator so there is only one input (as in the included product templates).

**Without JavaScript**, both blocks show the result for the starting value, without the input.

| Industry | Supply calculator | Savings calculator |
|---|---|---|
| Supplements (Refill) | “How long does a tub last?” – daily doses per day | Subscription vs. one-time purchase |
| Tea and spices (Mortar) | “How long does the tea last?” – cups per day | Favourite tea on subscription |
| Natural cosmetics (Pumice) | “How long does a refill last?” – applications per week | Refills on subscription, plus less packaging |

## Common problems

| Problem | Solution |
|---|---|
| Supply or savings calculator missing | Fill in “servings per pack” for the product or variant. The savings calculator also needs a subscription plan with a discount or a packaging figure. |
| No “Matching delivery interval” | Name the interval in the plan name or first option as a number plus day/week/month (section 1). |
| “Choose this interval” missing | The “Purchase options” block must be on the same page (or in the same “Featured product”). |
| Purchase options do not appear | Assign the plan to the product in the subscription app; check that the product template contains the “Purchase options” block. |
| No delivery timeline | Turn on “Show delivery timeline”; name the interval in the plan name or first option as a number plus day/week/month. |
| No price per day for subscriptions | Fill in the servings metafields, see [Product data](09-product-data.md). |
| “Manage subscriptions” link missing | Turn on customer accounts, add the link to the “Customer account main menu” (section 7), sign in as a customer. |
