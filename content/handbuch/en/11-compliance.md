# Mandatory information

Refill shows manufacturer details, food and cosmetics labelling, unit prices and policies where they belong: in the product listing itself, before checkout. The theme helps you fill them in and shows in the editor what is missing.

> **Not legal advice.** This chapter describes how the theme displays information. Which information applies to your products and how it must be worded is for your legal advisor, trade association or the competent authority to clarify. Have your product pages reviewed before launch.

## 1. Manufacturer (GPSR)

Under the EU General Product Safety Regulation (GPSR), the manufacturer's name, address and contact details belong on the product page. A link to another page is usually not enough.

**Enter once for all products:**

1. Theme editor → **Theme settings → “Mandatory information”**.
2. **“Manufacturer name”** – for your own brand, your company.
3. **“Manufacturer address”**.
4. **“Manufacturer email or website”**.
5. **“Responsible person in the EU”** – required if the manufacturer is based outside the EU: name, address, contact.

These details appear in the **“Product safety”** block and in **“Mandatory information”** as food or feed business operator or responsible person.

**Different manufacturer for individual products:** create the product metafield `custom.manufacturer` (multi-line text) and enter name, address and contact there. It replaces the theme settings for that product.

**Safety information:** product metafield `custom.safety_information` (multi-line text). The **“Product safety”** block shows it under “Safety information”.

## 2. “Mandatory information” block

The block collects the information usually required before purchase in a collapsible area on the product page. **“Product type”** sets the labels and the checklist:

| Product type | Information and labels |
|---|---|
| “Food supplement” | Name of the food, ingredients, net quantity, recommended daily dose, warnings, food business operator. Default name and default warnings for all products without their own metafield. |
| “Food (e.g. tea, spices)” | As above, “Preparation” instead of “Recommended daily dose”, no default texts. |
| “Cosmetics” | “Ingredients (INCI)”, “How to use”, “Responsible person”, “Period after opening”. |
| “Pet food” | “Animal species”, “Type of feed”, “Composition”, “Additives”, “Feeding instructions”, “Feed business operator”. |
| “Other” | Neutral labels, “How to use”. |

### Metafields

| Information | Block setting | Suggested | Type |
|---|---|---|---|
| Name of the food | “Metafield: name of the food” | `custom.legal_name` | Single line text |
| Ingredients / INCI / composition | “Metafield: ingredients or composition …” | `custom.other_ingredients` | Multi-line text or rich text |
| Net quantity | “Metafield: net quantity” | `custom.net_quantity` | Single line text |
| Recommended use | “Metafield: recommended use” | `custom.usage` | Multi-line text |
| Warnings | “Metafield: warnings” | `custom.warnings` | Multi-line text |
| Manufacturer | “Metafield: manufacturer (overrides theme settings)” | `custom.manufacturer` | Multi-line text |
| Period after opening (cosmetics) | “Metafield: period after opening (e.g. 12 M)” | `custom.pao` | Single line text |
| Animal species (pet food) | “Metafield: animal species” | `custom.animal_species` | Single line text |
| Type of feed | “Metafield: type of feed (e.g. complete feed)” | `custom.feed_type` | Single line text |
| Additives | “Metafield: additives” | `custom.additives` | Multi-line text |

The Mortar and Pumice styles read the ingredients from `custom.ingredients` and `custom.inci` respectively. What counts is the key entered in the block.

### Highlighting allergens

Mark allergens in the ingredients list with `*asterisks*` (e.g. `*soy* lecithin`) or in bold if the metafield is rich text. The theme shows them in bold and adds “Allergens are shown in bold.” For the product type “Cosmetics”, asterisks stay as characters because in INCI lists they usually mark organic ingredients.

### Automatic net quantity

If `custom.net_quantity` is empty, the theme takes the quantity from the variant's unit price (see section 3), e.g. “120 g”.

### Default information for food supplements

For the product type “Food supplement”:

- **“Default name (food supplements)”** – applies to products without `custom.legal_name`.
- **“Default warnings”** – apply to products without `custom.warnings`.
- **“Exclusion tag for default information”** (default `kein-nem`) – products with this tag, such as a protein bar, get no default name and no warnings.
- A metafield value of `-` hides a single item for one product.

### Checklist in the editor

In the theme editor, the block lists the usual items missing for the product shown under “Missing for this product (only visible in the theme editor):”. The list is a filling aid. It does not check whether your information is complete or correct.

## 3. Unit price

For goods sold by weight or volume, a unit price is generally required in the EU (in Germany under the Price Indication Ordinance, PAngV).

1. Open the product → select a variant → turn on **Show unit price**.
2. Enter the **total measurement** (e.g. 120 g) and the **base unit** (e.g. 100 g or 1 kg).

Refill shows the unit price on product cards, on the product page, in quantity tiers and in structured data.

## 4. Policies

Add these under **Settings → Policies**:

- Refund / return policy
- Privacy policy
- Terms of service
- Shipping policy
- Subscription policy (for subscription products)
- Legal notice / contact information

The footer's **“Bottom bar”** links the policies automatically when **“Show policy links”** is on. Add other pages (e.g. legal notice, accessibility) to a footer menu.

The “Tax included” or “Tax excluded” note with a shipping note below the price comes from **“Show tax and shipping note”** in the “Price” block. If a shipping policy exists, the shipping note links to it.

## 5. Check before launch

These items are often overlooked. Go through them for the home page, a product page and the cart before you publish:

| Item | Where to fix it |
|---|---|
| Manufacturer details (GPSR) missing | Theme settings → “Mandatory information” |
| Privacy policy, terms of service, refund policy, shipping policy missing | Settings → Policies |
| Subscription product without a subscription policy | Settings → Policies |
| No unit price | Product → variant → unit price |
| No accessibility statement | Page with the `accessibility` template, see [Accessibility](13-accessibility.md) |
| Product image(s) without alt text, product without an image | Product → media |
| Image(s) in the page content without alt text | “Image” block → “Alternative text” |
| Color scheme contrast below 4.5 : 1 | Theme settings → “Colors” |
| No meta description | Edit the page's search engine listing |

## 6. Age verification

For age-restricted products, there is an **“Age verification”** section in the footer group. It is hidden in the template.

1. Theme editor → show the **“Age verification”** section with the eye icon.
2. Set **“Minimum age”**, **“Heading”** (`[age]` is replaced by the minimum age), **“Text”**, **“Button: confirm”** and **“Button: decline”**.
3. **“Link when declined”**: the address “decline” leads to (empty: Google home page).
4. **“Remember answer (days)”**: after confirming, the prompt does not appear again in that browser for this many days.

The prompt opens on the first visit and cannot be closed with Escape. It is a prompt, not a technical lock: without JavaScript it does not appear. Check whether your products require real age verification.

## 7. Copy without health claims

Write product texts factually: amounts, ingredients, origin, testing. Health claims for food and food supplements are strictly limited in the EU (Nutrition and Health Claims Regulation). The theme's sample texts deliberately contain no efficacy claims. Blocks such as “Timeline”, “Product finder” and “Comparison table” contain placeholders only – their content is your responsibility.
