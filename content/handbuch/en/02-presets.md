# Theme styles (presets)

Refill comes in three styles. All three share the same code, blocks and metafields. They differ in design, home page, product template and the terms used for servings and prices.

## Overview

| | Refill | Mortar | Pumice |
|---|---|---|---|
| Industry | Supplements, sports nutrition | Spices, tea, coffee | Natural cosmetics, drugstore |
| Design | Factual, lines instead of fills, square shapes | Cream and brown, paprika red accent, sage as a third scheme | Light cool neutral, dusty rose accent, mint as a third scheme |
| Heading font | Geist | Fraunces | Gilda Display |
| “Corners” | “Square” | “Subtle” | “Soft” |
| “Serving label” | “Daily dose” | “Cup” | “Application” |
| “Price per” | “Day” | “Cup” | “Application” |
| “Custom badge style” | “Neutral (outline)” | “Accent color” | “Neutral (outline)” |
| Mandatory information: “Product type” | “Food supplement” | “Food (e.g. tea, spices)” | “Cosmetics” |
| Facts table: “Table type” | “Supplements (amount · % NRV)” | “Food (per 100 g · per serving)” | no facts table |
| Header | Underlined links, dark announcement bar | Small uppercase with wide spacing, submenu slides down, search expands in the bar, globe icon, always sticky | Pill-shaped menu items, content-width submenu with image tiles, no divider |
| Product gallery | Grid | Slider with thumbnails on the left | Mosaic |
| Collection | 5 columns, 4 : 5 | 4 columns, 1 : 1, promo tile after product 4 | 3 columns, 4 : 5, wide promo tile |
| Product cards on hover | Zoom that follows the mouse | Second image, no zoom | Subtle zoom |
| Animation (all “Subtle”) | Sections rise, pages crossfade | Sections fade in, buttons give when pressed | Sections rise, headings build up by line, pages rise |

You can change all of these later. The terms are in **Theme settings → “Product data”**; product type and table type are in the **“Mandatory information”** and **“Facts table”** blocks of the product template. The header is covered in [Header and navigation](04-header.md), cards and collections in [Collections and product cards](05-collections.md), the gallery in [Product page](06-product-page.md) and animation in [Animation](08-animation.md).

## Refill – supplements

**Home page:** hero, “Reorder”, “Benefits with icons”, bestsellers, categories, “Build a set”, “How it works”, offer.

**Product page:** product media, title, rating stars, price, key figures (daily dose, servings, price per day, supply duration), variant picker, purchase options with delivery timeline, buy buttons, delivery date, pickup availability, “Often bought together”, badges and certificates, benefit list, description, “Care and handling” (metafield content), mandatory information, product safety. Below that, the “Facts and ingredients” section with **“Facts table”** and **“Ingredients: spotlight”**.

**Mandatory information:** product type “Food supplement”. The **“Default name (food supplements)”** and **“Default warnings”** apply to all products without their own metafield. Products that are not food supplements (e.g. protein bars) get the tag from **“Exclusion tag for default information”** (default `kein-nem`).

**Suggested metafields:** `custom.data_table` (facts table), `custom.other_ingredients` (ingredients), `custom.usage` (recommended use), `custom.warnings`, `custom.certifications`.

The **Product (subscription)** template (`product.subscription`) places the purchase options directly below the price, see [Subscriptions](10-subscriptions.md).

## Mortar – spices, tea, coffee

**Home page:** hero (large title on the left, text on the right), “Just in” with four products, “Reorder”, categories, origin, sampler, product finder, “How it works”, blog posts (from the `news` blog; if it does not exist, the section is hidden).

**Product page:** like Refill, without the badges block, with an info pop-up “Which pouch size?” and stacked benefits. Below the buy column are the **“Facts table”** with the food table type (nutrient · per 100 g · per serving) and **“Usage”** with a preparation heading and key values such as “85 °C · 3 min · 2 g / 250 ml”.

**Key figure as a scale:** In the **“Key figures”** block you can add up to two more values. A value like “3/5” is shown as a bar – useful for roast level, heat or intensity.

**Suggested metafields:** `custom.data_table` (nutrition facts), `custom.ingredients` (ingredients), `custom.preparation` (preparation steps).

> The preparation steps and key values in the template are a tea example. As long as `custom.preparation` is empty for a product, this sample text is shown. Fill the metafield for each product or change the steps and key values in the block.

## Pumice – natural cosmetics and drugstore

**Home page:** centered hero, “Popular” with a promo tile, “Reorder”, “Benefits with icons”, “Refill instead of rebuy”, product finder, categories, testimonials, “How it works”.

**Product page:** like Refill, without the badges block, with an info pop-up “Which size fits?” and benefits side by side. Below that, **“Usage”** with a usage heading and **“Ingredients: spotlight”**. There is no facts table; if you need one, add the **“Facts table”** block with **“Custom columns”**.

**Mandatory information:** product type “Cosmetics”: “Ingredients (INCI)”, “How to use”, “Responsible person” and “Period after opening” from `custom.pao` (e.g. “12 M”).

**Suggested metafields:** `custom.inci` (INCI list), `custom.usage` (how to use), `custom.pao`, `custom.key_ingredients`.

> The testimonials on the home page are sample texts (with labels such as “Abo-Kundin” – subscription customer – instead of names). Replace them only with real, verifiable reviews, or delete the section. If you leave **“Person’s name”** empty in the “Quote” block, the quote appears without a name line.

## Common to all styles

- **Collections and products** are not preselected in the Mortar and Pumice templates: the collection list shows all collections with products, and the product finder and sampler link to “All products” until you choose your own collections.
- **Menus**: Mortar and Pumice use “Main menu” and “Footer menu”, which exist in every store.
- **Logo lists** intentionally ship without sample logos: made-up press mentions would be misleading.
- **Rating stars** and **“Often bought together”** (source “Automatic”) are in every product template; without a reviews app or recommendations they stay hidden.
- The **accessibility panel** and the **Follow on Shop** button are off in every style.
- **Headings in templates** (e.g. above the preparation steps) are pre-filled. Change them in the block's **“Heading”** setting to match your store's language.

## Pet food and other industries

There is no separate style for pet food. Set up any of the three styles like this:

| Setting | Value |
|---|---|
| Theme settings → “Product data” → “Serving label” | “Feeding” |
| Theme settings → “Product data” → “Price per” | “Day” |
| “Facts table” block → “Table type” | “Pet food (analytical constituents)” or “Feeding guide (weight · amount)” |
| “Mandatory information” block → “Product type” | “Pet food” |

The block picker offers the facts table directly in matching variants: “Facts table: supplements”, “Facts table: nutrition”, “Facts table: feed”, “Facts table: feeding”, “Facts table: composition” and “Facts table: composition (INCI)”.

For all other consumables, choose “Serving” or “Application” and the product type “Other”.

## What “Serving label” and “Price per” do

- **“Serving label”** appears in the key figures, on product cards, in the facts table header and in structured data, e.g. “Cup 2 g”.
- **“Price per”** controls the “€ per day” or “€ per cup” value. “Day” uses servings per day; all other values use one serving (price divided by servings per pack).

Where the numbers come from is explained in [Product data](09-product-data.md).
