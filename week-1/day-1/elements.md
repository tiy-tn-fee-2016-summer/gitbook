# Common HTML Elements


## Parent Elements

Parent Elements exist anywhere in the `body` tag or within other HTML elements.

* `h1`, `h2`, ... `h6` - Headings (Important information)
* `p` - Paragraph
* `ol`/`ul` - Lists
  * `li` - List Item (Only can be children of `ol` or `ul`)
* `img` - Image
* `pre` - Preformatted Text
* `code` - Preformatted Code
* `button` - Button

## Div-like Elements

"Div-like" elements are used to group together HTML elements on the page for semantics or styling.

* `div`
* `section`
* `header`
* `footer`
* `nav`
* `article`
* `main`

## Modifiers

Modifiers will almost ALWAYS exist within a parent element as they set aside a particular set of plain-text content.

* `a` - Anchor tag (Link to other pages)
* `span` - Group of text (functionality to be determined by CSS or JS)
* `strong` - Defaults to bolded text (shows importance)
* `em` - Defaults to italics (shows emphasis)

## Table Elements

Table elements should only be used for ACTUAL tabular data and should not be used for layout purposes.

* `table` - Sets the outer bounds of the table and its data
* `thead` - Groups the head of a table
* `tbody` - Groups the core of the tabular data
* `tr` - Groups a row of table cells
* `td` - Table cell (use `th` when creating cells inside of `thead`)
