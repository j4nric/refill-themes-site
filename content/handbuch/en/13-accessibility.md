# Accessibility

Refill is designed to meet WCAG 2.2, level AA. The theme provides the technical foundation. Your store only becomes accessible together with accessible content – alt texts, clear language, captions – and apps that are accessible themselves.

## What the theme does

| Area | Implementation |
|---|---|
| Keyboard | Everything works without a mouse: mega menu, mobile menu, quick search, filters, variant picker, quantity fields, cart, quick view, full-screen gallery (arrow keys, Escape), country/language, info pop-up, “Often bought together”, carousel, scrolling text. “Skip to content” link. |
| Focus | Visible focus ring on all controls; focus is kept when filters or variants change; dialogs keep focus inside and return it when closed. Focus is never hidden under the sticky header or the sticky buy bar. After “+”, “−” or “Remove” in the cart and after removing a filter, it stays in a sensible place. The filter area on phones behaves like a dialog; in the gallery slider only the current image is in the tab order. |
| Screen readers | Landmarks, a clean heading hierarchy, labelled form fields, announcements for cart changes (“Cart updated. Subtotal …”), search and the country filter (“2 countries found”), tables with header cells. Menu links include the product count (“Vitamins (7 products)”). |
| Forms | Invalid fields get a colored border after submitting; error messages are connected to their field (contact, password, newsletter). |
| Contrast | All color schemes of the three styles with at least 4.5 : 1 for text and 3 : 1 for controls. Status colors (success, notice, error) adapt to each color scheme and reach at least 4.5 : 1 on dark schemes too. |
| Zoom | Layout down to 320 px width without horizontal scrolling, text scalable to 200 %, form fields at least 16 px on mobile. |
| Motion | The reduced motion system setting (or the same option in the accessibility panel) turns off every effect from [Animation](08-animation.md), transitions, scrolling text and page transitions; the scroll story then shows as normal stacked sections. Scrolling text has a pause button; carousels never rotate automatically. |
| Timing | The countdown is informational only. The popup appears no earlier than the configured delay and closes with Escape or a click outside. |
| Target size | Controls at least 44 × 44 px. |
| Language | Page language from the store language; all interface texts in 12 languages (English, German, French, Italian, Spanish, Dutch, Danish, Swedish, Finnish, Polish, Czech, Portuguese). |

Testing is automated with axe-core and Lighthouse on home, collection, product, cart and search pages, plus keyboard tests after every change.

## What you contribute

1. **Alt texts**: every product image needs a short description (Product → media → image → alt text). Images in blocks have an **“Alternative text”** setting; if empty, the theme uses the alt text from Shopify.
2. **Contrast of your own colors**: watch the notes on “Secondary text” and “Text on accent” in **Theme settings → “Colors”**.
3. **Headings**: one H1 per page. Choose the **“Heading level (SEO)”** in the **“Heading”** block.
4. **Videos** with captions, accessible **PDFs**, **no text in images**.
5. **Apps** (reviews, chat, cookie banners): check accessibility with the provider.

Check alt texts and contrast before launch using the list in [Check before launch](11-compliance.md#5-check-before-launch).

## Accessibility panel (optional)

In **Theme settings → “Accessibility options”**, **“Show accessibility panel”** turns on a floating button (off by default). It opens a panel where visitors adjust the display for themselves:

- **Text size** in four steps (100 to 150 %),
- **High contrast** (black on white, at least 7 : 1),
- **Line and letter spacing**, **Easy-to-read font** (system font), **Underline links**,
- **Highlight keyboard focus**, **Reading mask** and **Reduce motion** (animations, page transitions, scrolling text and autoplaying videos off).

The choice is stored in the visitor’s browser and applies from the first paint of every page; nothing is sent, no third-party script is loaded and no content is changed. “Reduce motion” in the panel works like the system setting: it turns off every effect from [Animation](08-animation.md), as well as motion in the carousel, gallery, full screen view and header. **“Button position”** places it bottom left or bottom right, and **“Options offered”** lets you hide individual options. **“Accessibility statement”** selects the page linked in the panel; if empty, the theme uses the page with the handle `barrierefreiheit` or `accessibility`.

> The panel is a convenience feature. It does not replace accessible content and is no proof of compliance with accessibility law – the theme is designed for WCAG 2.2 AA without it.

## Creating an accessibility statement

The theme includes the **`accessibility`** page template with a statement containing placeholders. Its text is written in German for the German Accessibility Strengthening Act (BFSG); for other markets, replace it with a statement in your language that follows your national rules.

1. Admin → **Online Store → Pages → Add page**.
2. Title “Accessibility”. The page handle (search engine listing → URL) should be `accessibility` or `barrierefreiheit`.
3. On the right under **“Theme template”**, choose **`accessibility`** and save.
4. Theme editor → open the “Accessibility” page at the top.
5. Replace all placeholders in square brackets: date, testing status, known limitations, contact method, response time.
6. Delete the gray “note for merchants” at the end.
7. Link the page in your footer menu.

The template contains the sections “How accessible is this store?”, “What we do”, “Known limitations” and “Found a barrier?” (in German). It names the German market surveillance authority for the accessibility of products and services (MLBF) as the enforcement body. For stores outside Germany, enter the competent national authority.

Under “Known limitations”, list honestly what is not yet accessible, such as content from third-party apps or videos without captions.

## The European Accessibility Act in brief

- Since **28 June 2025**, the **European Accessibility Act (EAA)** applies in the EU. Each member state has its own law; in Germany it is the **Barrierefreiheitsstärkungsgesetz (BFSG)**.
- It applies to online stores that sell to consumers.
- The benchmark is the standard **EN 301 549**, which refers to **WCAG 2.1, level AA** for web content. Refill is designed for WCAG 2.2 AA and therefore also covers 2.1.
- Microenterprises providing services are exempt (fewer than 10 employees and an annual turnover or balance sheet total of no more than €2 million).
- Among other things, stores must provide information on how they meet the requirements – this is what the accessibility statement is for.
- Checkout and customer accounts are provided by Shopify; they are not part of the theme.

> This is a brief overview, not legal advice. Whether and how the EAA applies to your business is for your legal advisor to clarify.
