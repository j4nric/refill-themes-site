# Performance and SEO

Refill is built for fast loading: little CSS and JavaScript, images in suitable sizes, and partial updates instead of full page loads for filters and variants. The following settings get the most out of it.

## Loading pages ahead

**Theme settings → “Layout” → “Page navigation” → “Load pages ahead”**:

| Option | Effect |
|---|---|
| “Off” | Pages load only on click. |
| “Fetch on hover (recommended)” | When someone points at a link (or taps it), the browser loads the page in advance. The click feels instant. |
| “Fully prepare (fastest)” | Product and collection pages are rendered completely in the background. In rare cases third-party analytics may count such pages as a visit. |

Cart, checkout and account pages are never loaded ahead. The feature is off in the theme editor.

**Page transitions:** In browsers that support it, the image of a clicked product card moves smoothly into the gallery while the header stays in place. This is off with reduced motion and in the editor. To change or turn it off: Theme settings → “Animation” → “Page transition”, see [Animation](08-animation.md).

## Images

- **Size**: upload images in sufficient resolution (product images e.g. 2000 × 2000 px). Shopify automatically delivers suitable sizes and modern formats.
- **Aspect ratio**: consistent product images (e.g. all 1 : 1) look calmer. Blocks such as **“Product media”**, **“Products from collection”** and **“Collection: product list”** have an **“Aspect ratio”** or **“Image aspect ratio”** setting.
- **Cut-out product photos**: in the **“Image”** block, **“Fit” → “Show whole image”** suits images on the “Image background” color.
- **First large image**: for the **“Image”** or **“Image with text”** block at the very top of the page, turn on **“Load immediately (image at the top of the page)”** – and only there. All other images load when they come close to the viewport. The theme automatically prioritizes the first product image on product pages.
- **Second image on hover** (Theme settings → “Product data”) loads additional images; leave it off if loading speed comes first.
- **Videos** from YouTube or Vimeo load only after a click (YouTube in privacy-enhanced mode). A **“Cover image (YouTube/Vimeo)”** improves the display.
- **Background videos** (Section → “Background”, “Image with text” → “Video instead of image”) only load once they become visible; until then the still image is shown. At the very top of the page turn on “Load still image immediately” or “Load immediately”; the video is never preloaded.

## Apps and custom code

Every app that adds scripts to your store costs loading time. Turn off app embeds you do not use (theme editor → **App embeds**). Code in the **“Custom Liquid”** block or section loads on every page that contains it.

The **Follow on Shop** button (footer, “Social media” block) also loads Shopify modules that can delay the first paint on phones, and it sets cookies from shop.app. That's why it is off by default; only turn on **“Show Follow on Shop”** if you use the Shop app.

## Search engines: the basics

- **Meta description**: for the home page under **Online Store → Preferences**, for products, collections and pages under **Search engine listing → Edit**.
- **Headings**: exactly one H1 per page. The templates are set up that way; in your own sections choose the **“Heading level (SEO)”** in the “Heading” block.
- **Alt texts** for all images, see [Accessibility](13-accessibility.md).
- **Breadcrumbs** on collection, product and article pages – visible and as structured data.

## Structured data for Google and AI assistants

Refill describes products for search engines and AI shopping assistants (e.g. ChatGPT, Perplexity) as structured data following schema.org. This information is not visible in the store.

**Included automatically:**

| Page | Data |
|---|---|
| Product | Product group with all variants, price and availability, GTIN from the variant barcode (valid lengths only), size/color from option names, unit price, subscription offers per plan, facts table rows as product properties, ratings from the standard metafields `reviews.rating` and `reviews.rating_count` (filled by review apps), country of origin, material and audience from optional metafields |
| Home page | Organization (name, legal name, logo, description, contact, optional address and VAT ID, social media profiles) and website with search |
| Collection, product, article | Breadcrumb path |
| Article | Blog post (headline, description, featured image, author, published and modified dates, publisher with logo, tags) |
| Pages with the “FAQ” block | Questions and answers |

**Settings:** **Theme settings → “Structured data”**. The values must match your actual shipping and return policies.

| Setting | Meaning |
|---|---|
| “Shipping rate (standard)” | Amount without currency, e.g. `3.90`. Empty: no shipping details. From the “Free shipping threshold” (cart), 0 is reported. |
| “Handling time (days)” | Days until dispatch. |
| “Transit time minimum (days)” / “Transit time maximum (days)” | Delivery time. |
| “Return window (days)” | 0: no return details. |
| “Return shipping costs” | “Free” or “Paid by the customer”. |
| “Metafield: facts table” | For any kind of facts table. Product metafield of type “list of metaobjects”, each entry with `amount` (text) and `label` (text) or `ingredient` (reference with a `name` field); rows are reported as product properties. Preset to `custom.data_table` in the Refill style. |
| **Organization** | |
| “Logo” | Empty: logo from **Settings → Brand**. |
| “Legal company name”, “VAT ID” | As in your legal notice. |
| “Customer service email”, “Phone” | Empty: details from **Settings → Store details**. |
| “Include business address” | Off by default. Only turn on if the address may be public. |
| **Products** | |
| “Brand” | “Product vendor” or “Store name (own brand)”. Without a vendor, the store name is always used. |
| “Metafield: country of origin”, “Metafield: material or composition”, “Metafield: target audience” | Optional product metafields (text or list of text), preset to `custom.country_of_origin`, `custom.material`, `custom.target_audience`. If the metafield is missing, the detail is left out. |

> Mortar style: the product template reads the facts table from `custom.data_table`. Enter the same key under “Metafield: facts table” so the nutrition facts also appear in the structured data.

**Tips:**

- Fill in the **barcode** (GTIN/EAN) for every variant.
- Name options clearly, e.g. “Size”, “Weight” or “Color” (German, French, Italian and Spanish names are recognized too) – then the theme detects size and color.
- Check the home page and product pages with Google's Rich Results Test (search.google.com/test/rich-results). The theme leaves out empty details so the data stays valid.

## Animation and loading speed

Effects from **Theme settings → “Animation”** only load their code when at least one is switched on, and only after the page has rendered; the first image (LCP) is never delayed and nothing shifts the layout. Measurements with every effect on stayed within the usual variation. The effects themselves are described in [Animation](08-animation.md).

Other features that save loading time:

- **Rating stars** read the reviews app's metafields directly; collection pages don't need the app's script (see [Product page](06-product-page.md#rating-stars)).
- **“Automatically on scroll”** only loads more products as shoppers approach the end of the list.
- The **full-screen gallery** and **“Often bought together”** only load their code when the block is on the page.
- **Secondary features** such as the popup, countdown, “Build a set”, video and scroll story only load their code once the browser is idle or someone interacts with the page. Only the CSS for the page frame and header blocks the first paint; the large image at the top loads first.

## Measurements

With Lighthouse on Nov 21, 2026, the demo store scored 90 on the home page, 89 on the product page and 87 on the collection page on mobile (median of three runs), and 98–99 on desktop; 100 for accessibility and 0 for layout shift (CLS). Your store's loading time depends heavily on images, apps and Shopify's own scripts; measure it yourself after every major change, e.g. with Lighthouse in Chrome's developer tools or the performance reports in your Shopify admin.
