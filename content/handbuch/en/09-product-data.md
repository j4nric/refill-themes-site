# Product data

Refill shows key figures, facts table, ingredients and trust badges from **product metafields**. The theme does not create any metafields itself – you decide which fields it reads. The suggested keys (`custom.…`) are already entered in all settings; if you create your metafields with exactly these keys, you do not need to change anything in the theme.

Every data-driven block works in three steps:

1. The product's **metafield**, if it has a value.
2. The **input in the block** (e.g. “Rows (if the metafield is empty)”), if the metafield is empty. Note: this input then applies to all products using this template.
3. **Hidden**, if both are empty.

## Overview

| Value | Where to set it | Suggested metafield | Type |
|---|---|---|---|
| Subtitle below the title | Theme settings → “Product data” → “Metafield: subtitle” | `custom.subtitle` | Single line text |
| Amount per serving (“4 capsules”) | “Metafield: amount per serving” | `custom.serving_size` | Single line text |
| Servings per pack | “Metafield: servings per pack” | `custom.servings_per_container` | Integer |
| Servings per day | “Metafield: servings per day” | `custom.servings_per_day` | Integer or decimal |
| Custom badges | “Metafield: custom badges” | `custom.badge` | Single line text or list |
| Facts table | “Facts table” block → “Metafield: rows (list of metaobjects)” | `custom.data_table` | List of metaobject entries |
| Profile scales (taste, texture, solubility …) | “Metafield: profile scales” or block “Profile scales” → “Metafield (namespace.key)” | `custom.profile` | JSON, list of single line texts or multi-line text |
| Facts table | “Facts table” block → “Metafield: rows (list of metaobjects)” | `custom.supplement_facts` | List of metaobject entries |
| Key ingredients | “Ingredients: spotlight” block → “Metafield: ingredients (list of metaobjects)” | `custom.key_ingredients` | List of “Ingredient” metaobject entries |
| Usage / preparation | “Usage” block → “Metafield: steps” | `custom.usage` | Multi-line text |
| Trust badges | “Badges and certificates” block → “Metafield: badges (list of texts)” | `custom.certifications` | List of single line texts |
| Lab report | “Badges and certificates” block → “Metafield: lab report (file)” | `custom.lab_report` | File |
| Expected ship date | “Buy buttons” block → “Metafield: expected ship date (pre-order)” | `custom.preorder_date` | Single line text |
| Product delivery time (business days, `3` or `3-5`) | “Delivery date” block → “Metafield: product delivery time” | `custom.delivery_days` | Single line text |
| Benefits (USPs) | “Benefit list (USPs)” block → “Metafield: benefits” | `custom.usps` | List of single line texts or multi-line text |
| Parent collection in breadcrumbs | “Breadcrumbs” block → “Metafield: parent collection” | `custom.breadcrumb_collection` | Collection |
| Rating | “Rating stars” block (fixed key) | `reviews.rating`, `reviews.rating_count` | Rating, integer – filled by your reviews app |
| Add-ons for “Often bought together” | “Often bought together” block → “Metafield (namespace.key)” | your own key, e.g. `custom.bought_together` | Product (list) |
| Free-form details (care, material, size chart …) | “Metafield content” and “Info pop-up” blocks → “Metafield” | your own key, e.g. `custom.care` | Depends on the content |

**Collection metafield:** `custom.subcollections` (collection, list) for the “Subcollections” bar, see [Collections and product cards](05-collections.md#subcollections). What each product page metafield does is described in [Product page](06-product-page.md#product-page-metafields).

The metafields for mandatory information and product safety are listed in [Mandatory information](11-compliance.md).

The Mortar and Pumice styles read some different keys in their product template (e.g. `custom.data_table`, `custom.preparation`, `custom.inci`), see [Theme styles (presets)](02-presets.md). What counts is always the key entered in the block under **“Data source (change only for custom metafields)”**.

## Creating a metafield – the basics

1. Admin → **Settings → Metafields and metaobjects** (called “Custom data” in some admin versions) → **Products** → **Add definition**.
2. Enter a name, e.g. “Servings per pack”.
3. Set **namespace and key** exactly as in the theme setting, e.g. `custom.servings_per_container`.
4. Choose the type (see table) and save.
5. Open a product → scroll to **Metafields** at the bottom and enter the value.

If you already have metafields with other keys, enter those in the theme (format `namespace.key`) instead of creating new ones.

## Key figures: serving, price per day, supply duration

The **“Key figures”** block on the product page and the product cards show:

| Display | Calculation |
|---|---|
| Serving, e.g. “Daily dose 2 capsules” | Label from “Serving label” + `custom.serving_size` |
| Servings | `custom.servings_per_container` |
| Price per day / serving | Price of the selected variant (or subscription price) ÷ servings per pack; with “Price per” = “Day”, also × servings per day |
| “Lasts 30 days – until …” | Servings per pack ÷ servings per day; the visitor's browser calculates the date |

To set it up:

1. Create the metafields `custom.serving_size` (single line text) and `custom.servings_per_container` (integer).
2. Optionally create `custom.servings_per_day`. Without a value, 1 is used.
3. Fill in your products, e.g. “2 capsules” and “60”.
4. In the **“Key figures”** block, check **“Show price per day or serving”** and **“Show supply duration (“Lasts 30 days – until …”)”**.
5. On collection pages and in product grids, **“Show serving and price per day or serving”** controls the same values on the cards.

**Serving label:** Theme settings → “Product data” → **“Serving label”** (“Daily dose”, “Serving”, “Cup”, “Application”, “Feeding”). If none of these fits, choose **“Custom text”** and enter, for example, “Bar” under **“Custom label”**. Translate the text for other languages with the Translate & Adapt app.

**Variants with different pack sizes** (500 g / 1 kg): also create `custom.servings_per_container` as a **variant metafield** with the same key (Settings → Metafields and metaobjects → **Variants**). The product page then calculates per variant. On product cards, the price per day only appears when all variants have the same price; cards use the product metafield.

**Additional key figures:** In the “Key figures” block, add a **“Label”** and **“Value (e.g. 3/5 for a scale)”** under **“Additional figure 1”** and **“Additional figure 2”**. Connect the value to a metafield with the dynamic source icon so each product shows its own value. A value like “3/5” (3 to 10 steps) is shown as a bar.

## Setting up the facts table

The facts table reads a **list of metaobject entries**. Each entry is one row.

### Step 1: Metaobject definition “Facts row”

1. Admin → **Settings → Metafields and metaobjects → Metaobjects → Add definition**.
2. Name it, e.g. “Facts row”.
3. Add fields – the **keys** must be exactly these:

| Key | Type | Content |
|---|---|---|
| `label` | Single line text | Row name, e.g. “Magnesium” or “Energy” |
| `amount` | Single line text | Second column, e.g. “300 mg” |
| `nrv` | Single line text or number | Third column; for supplements the number without a % sign (the theme adds “%”) |
| `indent` | True or false | Optional: “of which” row, indented |
| `ingredient` | Metaobject reference to “Ingredient” | Optional: links the row to the glossary; without `label`, the ingredient's name is shown |

4. Under **Access**, turn on **Storefronts** access and save.

### Step 2: Product metafield

1. **Settings → Metafields and metaobjects → Products → Add definition**.
2. Namespace and key `custom.data_table`, type **Metaobject**, referencing “Facts row”, **List of entries**.

### Step 3: Create rows and assign them

1. Admin → **Content → Metaobjects → Facts row** → add entries.
2. Open a product → “Facts table” metafield → select the entries in the order you want.

### Step 4: Configure the block

**“Facts table”** block → **“Table type”**:

| Table type | Columns |
|---|---|
| “Supplements (amount · % NRV)” | Ingredient · per daily dose · % NRV |
| “Food (per 100 g · per serving)” | Nutrient · per 100 g · per serving |
| “Pet food (analytical constituents)” | Analytical constituents |
| “Feeding guide (weight · amount)” | Body weight · amount per day |
| “Composition (ingredient · share or function)” | Ingredient · share · function; empty column headers show these defaults, your own replace them |
| “Custom columns” | Enter “Column header 1” to “Column header 3” yourself |

Except for supplements, the third column is optional: if the rows have no values for it, it is left out. A custom **“Footnote”** replaces the default footnote for every table type.

**Composition and INCI list:** The “Composition” table type suits blends (chai: cinnamon 30 %, ginger 20 % …) and cosmetics (INCI name · function). Under **“Source”** choose **“Facts table metafield (rows)”** (metaobjects as above) or **“Text metafield (list, e.g. INCI)”**. The text metafield (default `custom.inci`, single or multi-line text) holds the entries separated by commas or line breaks, e.g. `Aqua, Glycerin, Butyrospermum Parkii Butter*, Parfum`; the table shows them as a running list in this order. In the block picker: “Facts table: composition” and “Facts table: composition (INCI)”.

**Without metaobjects:** enter the rows in **“Rows (if the metafield is empty)”**, one row per line: `Name | Value | third column`. Start a line with `-` to indent it. This input applies to all products without a filled metafield – mainly useful in a separate product template for a single product.

If the metafield has a different type than expected, the editor shows a note and the theme uses the input from the block.

## Ingredients

The **“Ingredients: spotlight”** block shows key ingredients with image, form, source and description.

1. Create the metaobject definition **“Ingredient”** with the type handle `ingredient` (Settings → Metafields and metaobjects → Metaobjects → Add definition):

| Key | Type |
|---|---|
| `name` | Single line text |
| `form` | Single line text, e.g. “Bisglycinate” |
| `source` | Single line text, e.g. “Germany” |
| `description` | Multi-line text |
| `image` | File (image) |
| `vegan` | True or false (optional, shown in the profile) |

2. Turn on **Storefronts** access.
3. Create the product metafield `custom.key_ingredients`: type **Metaobject** → “Ingredient”, **List of entries**.
4. Add entries under **Content → Metaobjects → Ingredient** and select them on the product.

The same entries power the [Ingredient glossary](12-ingredient-glossary.md). The type handle `ingredient` is required for it.

**Profile:** The **“Ingredient: profile”** block shows up to three details. Under **“Details”** enter a **label** and the metaobject **field key** for each. Defaults are form (`form`), source (`source`) and vegan (`vegan`); for skincare e.g. “Function” (`function`), for tea “Growing region” (`region`) and “Altitude” (`altitude`). An empty key hides the detail.

**Products for an ingredient via the INCI list:** In the **“Ingredient: products”** block enter `custom.inci` under “Metafield: ingredient list (text, optional)”. A product matches if its list contains the value of the ingredient's `inci_name` field (e.g. “Butyrospermum Parkii Butter”), otherwise the name.

**Without metaobjects:** if the metafield is empty, the block shows its **“Ingredient”** sub-blocks with “Image”, “Name”, “Form and source” and “Description”.

## Badges on product cards

Besides “Sold out”, “Sale” and “Subscribe −10 %”, cards show up to two custom badges:

- **Product tag** in the form `badge:New` – the tag `badge:New` creates the badge “New”.
- **Metafield** from **“Metafield: custom badges”** (default `custom.badge`), single line text or a list of texts.

**“Custom badge style”**: “Neutral (outline)” or “Accent color”. To give individual badges their own colors, use **“Badge colors”**, see [Collections and product cards](05-collections.md#badges).

## Profile scales

The **“Profile scales”** block (category “Product: facts”) shows properties as a scale – such as the taste profile of a tea (brisk, floral, smoky), the texture of a cream (light ↔ rich) or how well a powder dissolves. Each property shows its label and value (“3/5”) in the data font, below it boxes, dots or a bar and the labels of both ends. Screen readers hear “Acidity: 2 of 5, scale from mild to bold”.

**Data per product:** create a product metafield `custom.profile` (the key can be changed under theme settings → “Product data” → “Metafield: profile scales” or in the block). Two formats:

| Type | Content |
|---|---|
| **JSON** | List with `label`, `value` and optionally `left`, `right`, `max`:<br>`[{"label": "Acidity", "value": 2, "left": "mild", "right": "bold"}, {"label": "Body", "value": "3/5"}]`<br>Short form without ends: `{"Acidity": 2, "Sweetness": 3.5}` |
| **List of single line texts** or **multi-line text** | one property per entry or line: `Label \| value \| left \| right`, e.g. `Texture \| 4 \| light \| rich`; without ends also `Scent: 2` |

Values are numbers with a comma or point (half steps fill half a box) or fractions such as `3/5`. Without a fraction, **“Steps for metafield values”** applies (default 5, possible 3–10). Entries without a label or without a number are skipped.

**Without a metafield:** add entries under **“Property”** in the block – **“Label”**, **“Value”** (0–10, half steps), **“Steps”**, **“Left label (low)”** and **“Right label (high)”**. These entries apply to all products using the template that have no metafield values. A filled metafield takes priority; the editor points this out.

**Settings:** “Heading”, **“Style”** (boxes, dots – round or square depending on “Corners” –, bar), **“Show value as number (3/5)”**, “Note” (e.g. “Rated by our tasting team”) and **“Product”** – empty means the product of the page; with a selected product the block works on any page, e.g. next to “Featured product”.

**On product cards:** theme settings → “Product data” → “Product cards” → **“Show profile scales on product cards”**: up to three properties from the same metafield as one-line scales below the key figures (collections, search, product lists).

Scales describe properties, not effects. Do not put health or efficacy claims into labels or notes.

## Trust badges and lab report

1. Create `custom.certifications` as a **list of single line texts** and fill it per product, e.g. “Vegan”, “Lab tested”. Only list certifications you can prove.
2. Optionally create `custom.lab_report` as a **file** – the block links to it with “View report”; set **“Link text for the report”** to e.g. “View lab report” or “View certificate”.
3. Without a metafield: enter badges in the block under **“Badges (if the metafield is empty)”**, one per line.

## Usage

**“Usage”** block: steps from `custom.usage` (multi-line text, one line = one step) or from **“Steps (if the metafield is empty)”**. Under **“Key values”** are **“Temperature”**, **“Time”** and **“Amount”**, e.g. “85 °C · 3 min · 2 g / 250 ml”. Empty fields are hidden; you can connect them to metafields with dynamic sources.

## More content from metafields

- **“Metafield content”**: enter a heading, connect a metafield (**“Metafield”**) and choose the display; with **“Collapsible”** it becomes a collapsible area. Without a metafield value it shows the text in the block. Details in [Product page](06-product-page.md#metafield-content). (The older “Metafield collapsible” block keeps working in existing templates but is no longer in the picker.)
- **“Info pop-up”**: content from a product metafield (rich text, text, page reference, image, metaobject) in a window – a size or dosage table per product, for example. See [Product page](06-product-page.md#info-pop-up-size-chart-and-dosage-table).
- **“Tabs”**: connect a tab's **“Content”** to a metafield (rich text or multi-line text) with the dynamic source icon. Empty tabs are hidden.

## Pre-order and swatches

- **Pre-order:** turn on “Continue selling when out of stock” for the variant. At zero stock, the button reads “Pre-order”. Enter a text such as “mid-December” in the variant or product metafield `custom.preorder_date`; it appears as “Expected to ship: …”. Which metafield is read is set on the product page in the “Buy buttons” block and for the quick view under **Theme settings → “Product data” → “Metafield: expected ship date (quick view)”**.
- **Swatches:** set up swatches (color or image) for option values (e.g. flavor) in Shopify. Refill shows them in the variant picker, on cards and in filters.
