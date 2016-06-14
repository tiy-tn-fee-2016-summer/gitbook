# CSS `display` Property

When working on layout, one of the critical tools is the ability to change HOW elements are rendered and how they decide WHERE to render.

Key to this is the `display` property which dictates how elements interact with other elements in the rendering process.

# `display: block;`

For the ["Div-like elements"](../day-1/elements.html#div-like-elements), and [Parent elements](../day-1/elements.html#parent-elements), the default `display` value is set to `block`.
This means that without other changes (more on this in the [float docs](float.html)), `block` elements will render on their own line within the parent element.
`block` elements will also have `width` and `height` properties that can be set.
Block elements by default will take up the full width of their parent if no `width` property is set.

# `display: inline-block;`

The only tag that defaults to `inline-block` is the `img` element.
Elements with `display: inline-block;` will act just like `block` elements, however instead of rendering on their own line, `inline-block` elements render inline and `inline-block` elements only take up the width of their content instead of the full width of their parent (unless `width` is set via CSS).

> **NOTE** `inline-block` elements will affect the line height of the current line and will not have let text wrap around it. If you want to have text wrap around an element, use the [`float` property](float.html).

# `display: inline`

The last major value for the `display` property is the `inline` setting.
This works similar to the `inline-block`, however `width` and `height` are only determined by the text content of the element.
The ["Modifier elements"](../day-1/elements.html#modifiers) such as `span` or `strong` tags usually default to being `display: inline` since they are generally used to make subtle modifications to text or font settings and not for layout purposes.

> **NOTE** there is an edgecase where the `width` and `height` of `inline` `img` tags can be set. This is an outlier and `inline-block` should be used to keep consistent styles across all elements with a particular selector.

# `display: none`

The `none` value for the display property does exactly what it says.
This meant that the element will take up no room on the page and redering continues on as if it does not exist.
This can be useful for items like drop-down menus or other hidden elements when used in tandem with either Pseudo-Selectors like `:hover` or Javascript.

# Other `display` Values

While `block`, `inline-block`, `inline`, and `none` cover the majority of use cases, there are a few other `display` values which can come in use for different scenarios:

### `table`, `table-row`, `table-cell`

While we for the most part are beyond the days of table based layouts, there are a few cases where the table-like display types might be useful without actually using `table` elements.
One instance of this is a navbar with equally spaced nav items:

<p data-height="200" data-theme-id="0" data-slug-hash="epyKYr" data-default-tab="result" data-user="rtablada" class='codepen'>See the Pen <a href='http://codepen.io/rtablada/pen/epyKYr/'>epyKYr</a> by Ryan Tablada (<a href='http://codepen.io/rtablada'>@rtablada</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

# Flex Box

Flex box (`display: flex;`) is a newer display option that allows for a ton of different options.
It is a bit tricky to use, so getting used to it will take it's own lesson and set of documentation.
