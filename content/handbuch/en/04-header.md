# Header and navigation

The header is the **“Header”** section with three blocks: **“Logo”**, **“Menu”** and **“Search, account, cart”**. Above it sits the **“Announcement bar”** section. You find both at the top of the left sidebar in the theme editor (the “Header” group).

| Part | Where to set it |
|---|---|
| Color scheme, line, scroll behavior, panel animation | “Header” section |
| Logo, logo when sticky | “Logo” block |
| Main menu, mega menu, mobile menu, highlighted menu items | “Menu” block |
| Search, account, country and language | “Search, account, cart” block |
| Notices with a link or discount code | “Announcement bar” section → “Announcement” blocks |

## One panel for everything that opens

Submenus, search and the country/language selector all open in the same area directly below the header. When a shopper moves the mouse from one menu item to the next, the panel stays put and only its content changes – nothing flickers. Escape or a click outside closes the panel and returns focus to the button that opened it.

**Header → “Drop-down panels” → “Animation”:**

| Value | Effect |
|---|---|
| “None” | The panel appears instantly. |
| “Fade in” (default) | The panel fades in softly. |
| “Slide down” | The panel grows downward from the header. |

Visitors who choose reduced motion in their operating system or in the [accessibility panel](13-accessibility.md) see no animation. Without JavaScript, submenus and the country/language selector open on click.

Panel colors are set separately: **“Menu” block → “Menu panel color scheme”** for submenus and the mobile menu, **“Search, account, cart” block → “Panels” → “Search and country/language color scheme”** for the other two panels (shown while search or country/language is turned on).

## Logo and scroll behavior

1. **“Logo” block**: **“Logo image”** and **“Size logo by”**. The default is **“Height (recommended)”**: the logo always has the same height – **“Logo height on desktop”** (default 32 px, from a window width of 990 px) and **“Logo height on mobile”** (default 28 px) – and its width follows the image’s aspect ratio. Wide wordmarks and square logo marks fit equally well. **“Width (previous)”** restores the former “Logo width” setting. Without an image, the store name appears as text; with “Height”, its font size follows the logo height.
2. **“Header” section → “On scroll” → “Sticky header”**: “Scrolls with the page”, “Always visible” or “Show when scrolling up” (default).
3. As soon as the header is sticky, three more settings appear: **“Background when sticky”**, **“Text color when sticky”** (empty = the color scheme's colors; a semi-transparent background blurs the content behind it) and **“Text and height when sticky”** (“Unchanged”, “Slightly smaller (90%)”, “Compact (80%)”).
4. In the “Logo” block under **“On scroll”**: **“Logo height when sticky”** (default 28 px, desktop and mobile) and **“Separate logo when sticky”**, for example just your logo mark. Because height counts, a square mark no longer ends up larger than the wordmark. With “Size logo by: Width”, the previous “Logo size when sticky” in percent appears here instead.

The sticky colors **“Background when sticky”** and **“Text when sticky”** each offer “Scheme color”, the brand colors or “Custom color” (default; an empty color picker keeps the color scheme). For the text there is also **“Matching the background brand color (black/white)”**.

**“Line below header”** turns the divider between header and page content on or off.

## Main menu and mega menu

1. Admin → **Online Store → Navigation**: create or edit your main menu. Up to three levels are supported.
2. Theme editor → **“Menu”** block → **“Menu”**: select your main menu.
3. On large screens, items with a submenu open a mega menu (the second level becomes column headings, the third level a list below each) or a slim list below the menu item – see “Submenu style”.

### Submenus

“Menu” block → **“Submenus”**:

| Setting | Effect |
|---|---|
| “Open submenus on hover” | Off: submenus open on click only. |
| “Submenu style” | **“Automatic”** (default): submenus with a single level appear as a list like the dropdowns; the mega menu stays for submenus with a third level, with “Images on links” or with a featured column. **“Classic: mega menu”**: always the mega menu. **“List like dropdowns”**: always the list (a third level is indented below). The list is a card right below the menu item: rows with a fill on hover, the current page in bold with a check mark, “Show all” at the end. Arrow keys move through the rows. “Width”, “Columns” and the image settings apply to the mega menu only; the animation (“Header” section) applies to both. The mobile menu stays the same. |
| “Width” | “Full page” or “Fit content, below the menu item” (a narrower panel with a border that stays inside the window). |
| “Columns” | “Automatic” or 2–5 columns. |
| “Third level in the mega menu” | “Always visible” (default) or “Expand on hover”: third-level links appear below their second-level link when the mouse points at it or it is reached with the Tab key; a small arrow next to the title marks them. On touch devices they stay visible. |
| “Submenu text size” | “Small”, “Medium” (default) or “Large” for second-level links in the mega menu and in the list. “Small” helps with long names. Words that are too long break with hyphenation. |
| “Show product counts” | Number of products next to collections. |
| “Images on links” | “None”, “Small, next to the title” or “Large, above the title”. Shows the image of the linked collection or product; collections without an image use their first product's image. |
| “Image tiles for these menu items” | Titles or handles of top-level menu items, separated by commas (for example `Tea`). These submenus show large images above the title regardless of “Images on links”, at most four per row when “Columns” is “Automatic”. |
| “Image ratio” | With “Large, above the title” and with image tiles: square, portrait (4:5) or landscape (3:2). |
| “Menu panel color scheme” | Colors of the mega menu and the mobile menu. |

### Feature in submenu

A dedicated column in the mega menu for a promotion. “Menu” block → **“Feature in submenu”**:

1. Choose the **“Content”**: “Product”, “Collection” or “Image with link”.
2. Depending on that choice, pick a **“Product”** or **“Collection”** (image, title and product count come from the collection), or enter **“Image”**, **“Heading”** and **“Link”** for “Image with link”.
3. Optional **“Eyebrow text”**, for example “New in”. Eyebrow text, “Position” and “Only for these menu items” appear once a product, collection, image or heading is set.
4. **“Position”**: “Right (end)” or “Left (start)”.
5. **“Only for these menu items”**: titles or handles of top-level items, separated by commas (for example `Tea, Coffee`). Empty: every item with a submenu.

The product and collection pickers always stay visible (Shopify can't hide resource pickers); only the one that matches the selected “Content” is used.

**A different feature per menu item:** add up to eight **“Submenu feature”** blocks inside the “Menu” block, each with its own content and menu items. The settings above apply to submenus without their own block.

### Highlighted menu items

Make individual items such as “Sale” or “New” stand out. “Menu” block → **“Highlighted menu items”**:

- **“Menu items”**: titles or handles separated by commas, for example `Sale, New`. Applies on every level, on desktop and in the mobile menu.
- **“Highlight color”**: “Color scheme accent”, a brand color or “Custom color” (default; then **“Color”**, empty = the color scheme’s accent color).
- **“Highlight style”**: “Color” (default: the text uses the color), “Underlined”, “Dashed underline” or “Bold”. With the last three the text keeps the text color and the line uses the chosen color, so customers can tell highlighted items from the current page, which also uses the accent color with the “Text” link style.
- **“Badge text”**: optional, for example “New”; shown as a small outlined badge next to the item.

### Desktop appearance

“Menu” block → **“Appearance (desktop)”**: **“Link style”** (“Text (accent color on hover)”, “Underline on hover”, “Filled (like buttons)”), **“Spacing between items”**, **“Font size”**, **“Uppercase”** and **“Show arrows for submenus”**. If the menu has more items than fit on one line, it wraps to a second line.

## Mobile menu

On phones, the menu icon opens a list. The **text** of a menu item goes to its page; the **arrow** next to it opens the submenu as its own level. Each level starts with **“Back”** and the parent's title as a link; Escape also goes back one level. The third level works the same way. Without JavaScript, submenus expand inside the list.

### Images in the mobile menu

Image tiles with a heading, text and link – for categories or a promotion:

1. Expand the “Menu” block → **“Add block”** → **“Image”**.
2. Fill in **“Image”**, **“Heading”**, **“Text”** and **“Link”**. Add as many as you like.
3. In the “Menu” block under **“Mobile menu”**: **“Image position”** (“Before the menu”, “Between menu items”, “After the menu”), plus **“After menu item”** when you choose “Between”, then **“Image columns”** (1–3) and **“Image ratio”**.

These images only appear in the mobile menu, not in the desktop mega menu. An “Image” without an image file appears as a text tile with heading and text.

**“Country and language in menu”** controls what appears at the end of the mobile menu: “Country and language”, “Country/region only”, “Language only” or “Off”. If country and language sit in the announcement bar, the mobile menu is the only place to choose them below 990 px – don’t choose “Off” then.

## Search

“Search, account, cart” block → **“Show search”**, then under **“Search”**:

| Setting | Effect |
|---|---|
| “Style” | “Panel below the header” (default): clicking “Search” opens the field and suggestions below the header. “Field expands in the header”: the field slides over the header bar and suggestions open in the panel. “Live search in the header”: the field stays in the header from a window width of 1200 px; below that, and whenever the field would push the menu onto a second line, it behaves like “Field expands in the header”. |
| “Quick links” | A menu whose links show while the search field is empty, e.g. popular categories. |
| “Product suggestions” | A collection; up to four of its products show while the field is empty. |

As shoppers type, search suggests search terms, collections, pages and products with price and unit price; “All results for …” opens the search page. Arrow keys move through suggestions, Enter opens one, and Escape first clears the selection, then closes. The search page itself is covered in [Collections and product cards](05-collections.md).

## Country and language

The selector appears once your store offers more than one country (**Settings → Markets**) or more than one language (**Settings → Languages**). The header then shows a button with a flag and codes on the right, e.g. “DE · EUR / DE”; it opens a list below with country/region (flag, currency on the right) and language side by side. The current value is highlighted with a check mark. Every option is its own button – nothing changes until someone clicks. From nine countries on, a search field appears above the list. Escape or a click outside closes the list; arrow keys move through the entries.

**“Style”** sets how the selector looks:

| Style | Effect |
|---|---|
| “One button, two columns” (default) | One button with codes; country and language side by side in one list. If the store only offers several countries or several languages, the button shows just that part. |
| “Two buttons” | Like the footer: one button for country (“DE · EUR €”) and one for language (“English”), each opens its own list below. Needs more room next to search, account and cart. |
| “In the announcement bar” | The two buttons sit on the right of the dark bar above the header, keeping the header free. Requires the “Announcement bar” section to be present and visible in the header; if it is missing, the default style appears in the header automatically. On phones the selector is in the mobile menu. |
| “Panel below the header (previous style)” | The earlier style: a wide panel below the header like the mega menu, with a multi-column country list. |

Without JavaScript the button still opens the list, and entries still switch on click.

More settings in the same group:

“Search, account, cart” block → **“Country and language”**:

| Setting | Effect |
|---|---|
| “Show country/region”, “Show language” | Turn either part on or off. |
| “Icon” | “Flag of the current country” (default), “Globe” or “No icon” (not with “Two buttons”, where “Flags in the country list” also controls the flag on the button). |
| “Flags in the country list” | A flag before each country. |
| “Also show in the header on phones” | Adds the icon to the mobile header as well (by default it's only in the mobile menu). |
| “Countries in the selector” | “All countries in your markets”, “Only these countries” or “All except these countries”. |
| “Country codes” | Appears with “Only these” or “All except”: two-letter ISO codes separated by commas or spaces, e.g. `DE, AT, CH`. With “Only these countries”, your order is kept. |

The country a shopper is currently in always stays in the list, even if your filter excludes it. The filter applies to the header (including the announcement bar) and the mobile menu; the footer has its own settings (see below).

At the end of the **mobile menu**, a “Country and language” field shows the current value. Tapping it opens the same list as a sheet from the bottom across the full width.

### Country and language in the footer

The footer's “Bottom bar” shows country and language as two subtle buttons, e.g. “Germany · EUR €” and “English”. A click opens a list above the button – the same list as in the header panel: the current value is highlighted, a search field appears from nine countries, and nothing changes until an entry is clicked. On phones the list slides in from the bottom across the full width. Escape or a click outside closes it. Which countries the footer offers is set by **“Countries in the selector”** and **“Country codes”** in the “Bottom bar” block – the same logic as in the header, but separate settings (default: all countries of your markets). **“Show flags”** in the “Bottom bar” block controls the flag on the button and in the list, independently of the header. Without JavaScript, dropdowns with an “Apply” button appear instead.

## Account, cart

- **“Show account”**: Shopify's account component with sign-in (including “Sign in with Shop”) and the links of the **“Customer account main menu”**. Add a link to your subscription portal there, see [Subscriptions](10-subscriptions.md). Requires **Settings → Customer accounts** to be turned on.
- **Cart**: opens the cart drawer, see [Cart and checkout](07-cart-and-checkout.md).

**“Display”** (“Search, account, cart” block): for **“Search”**, **“Account”** and **“Cart”** choose **“Text”** (default, uppercase word), **“Icon”** or **“Icon and text”**. Applies from a window width of 990 px; on mobile the icons are always used. Screen readers announce the name in every style, for the cart including the count (“Cart, 2 items”).

How the **cart count** looks – in brackets, as a bubble, as a dot or as a plain number – is set under Theme settings → **“Cart”** → **“Cart count”**, see [Cart and checkout](07-cart-and-checkout.md#cart-count).

## Announcement bar

The **“Announcement bar”** section sits above the header. Each **“Announcement”** block is one line:

| Setting | Effect |
|---|---|
| “Text” | The notice, e.g. “Free shipping over €49”. |
| “Link” | Turns the line into a link, with an arrow. |
| “Discount code” | Shows the code as a tag with a copy icon (screen readers: “Copy discount code …”). After a click a check mark appears; shoppers paste the code at checkout. |

**Set up a discount code:**

1. Admin → **Discounts → Create discount** → create a discount code, e.g. `WELCOME10`.
2. Theme editor → Announcement bar → “Announcement” block → **“Discount code”**: enter exactly the same code.
3. State the terms in **“Text”**, e.g. “10% off your first order”.

The theme only displays and copies the code; whether it applies is up to the discount in Shopify. There is intentionally no discount field in the cart: themes in the Shopify Theme Store aren't allowed to add one, and shoppers enter codes at checkout. Without JavaScript the code can still be selected; only the button is missing.

Several announcements form a swipeable bar on phones; on desktop they wrap onto a second line when they don't fit side by side.

Adjust texts such as “Free shipping over €49” to your actual terms, or delete the block.
