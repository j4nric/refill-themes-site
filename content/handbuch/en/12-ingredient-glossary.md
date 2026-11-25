# Ingredient glossary

The glossary gives every ingredient its own page: name, form, source, description, image and the products that contain it. An overview page lists all ingredients from A to Z. In the “Ingredients: spotlight” block on product pages, names link automatically to their glossary page.

The glossary uses the same “Ingredient” metaobjects you create for the “Ingredients: spotlight” block (see [Product data](09-product-data.md)).

## Requirement: “Ingredient” metaobject

The metaobject definition must have the **type handle `ingredient`**, with the fields `name`, `form`, `source`, `description`, `image` and optionally `vegan`. **Storefronts** access must be on.

## Step 1: Turn on web pages for the metaobject

1. Admin → **Settings → Metafields and metaobjects** (or “Custom data”) → **Metaobjects** → **Ingredient**.
2. Under the options or features, turn on **“Web pages”**.
3. Save. Shopify now gives every entry its own address, e.g. `/pages/ingredient/magnesium`.

The theme includes a template for the **“Ingredient” metaobject** (an “Ingredient” section with the **“Ingredient: profile”** block and a “Products with ingredient” section with the **“Ingredient: products”** block). You do not need to assign anything.

## Step 2: Set entries to “Active”

> **Important:** With web pages turned on, every entry has a status. When you turn on web pages, Shopify sets all existing entries to **“Draft”** – they are then **invisible** in the store: the glossary page is missing, the A–Z list stays empty, and the entries also disappear from product pages (e.g. from “Ingredients: spotlight”). The same applies to new entries saved as drafts.

1. Admin → **Content → Metaobjects → Ingredient**.
2. Open each entry, set the status to **“Active”** and save. In the list you can select several entries and change them together.

Then check one entry in your store via its address.

## Step 3: Create the A–Z overview page

1. Admin → **Online Store → Pages → Add page**.
2. Title e.g. “Ingredients”, optionally an introduction.
3. On the right under **“Theme template”**, choose **`ingredients`** and save.
4. Add the page to a menu (Online Store → Navigation).

The template contains the page content and an “Ingredients A–Z” section with the **“Ingredients: glossary”** block: all entries grouped by first letter, with a jump bar and the form next to each name. Without web pages turned on, the block shows only the names without links.

## The blocks in detail

| Block | Settings | Note |
|---|---|---|
| “Ingredients: glossary” | “Heading” | Lists all active entries. |
| “Ingredient: profile” | “Ingredient handle”, “Show image” | On glossary pages the current entry is used automatically; elsewhere enter the entry's handle (Content → Metaobjects → Ingredient → entry → “Handle”, for example `magnesium`). |
| “Ingredient: products” | “Heading” (`[name]` is replaced by the name), “Ingredient handle”, “Products from collection”, “Number of products” | Finds products via `custom.key_ingredients` and the facts table rows (`ingredient` field). |

> **Why a handle instead of a picker?** The Shopify Theme Store only allows metaobject pickers for Shopify's standard definitions. “Ingredient” is a custom definition, so you enter the handle as text.

**Limit of “Ingredient: products”:** the block searches up to 50 products of the selected collection (empty: all products). For larger catalogs, choose a suitable collection under **“Products from collection”**, e.g. “Minerals”.

## Linking ingredients to products

A product counts as “contains ingredient X” if

- X is selected in the product's `custom.key_ingredients` metafield, or
- a row of its facts table (`custom.data_table`) references X in the `ingredient` field.

If you entered different metafields in the blocks, adjust **“Metafield: key ingredients”** and **“Metafield: facts table”** under **“Data source”** in the “Ingredient: products” block.

## Troubleshooting

| Problem | Cause and solution |
|---|---|
| A–Z list empty, editor shows “No ingredients yet” | No entries, type handle is not `ingredient`, or storefront access is off. |
| Entries exist in the admin but not in the store | Status is “Draft” – set it to “Active”. |
| Names without links | “Web pages” not turned on for the metaobject, or entry still in “Draft”. |
| “Ingredient: products” finds no products | Neither the product metafield nor facts table rows reference the entry; the product is outside the first 50 of the collection. |
