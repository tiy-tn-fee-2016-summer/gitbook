# Organizing CSS

## Comments Are Our Best Friend

Comments allow us to easily see what we are styling and give us a bit more detail than just our class names alone.
Also, the syntax highlighting in our editor will make it easier to see breaks in sections.

To make a single line comment, we can use `CMD+/` to comment the current line or selection.
But, when working with sections, it may be easier to use the block comment autocomplete in Atom.

To trigger a full comment block, type `/**` then press the `TAB` key.
This will give us a nice multi-line block that will be easier to spot when scrolling through our CSS file.

```css
/**
 * This is a comment block
 */
```

## Ordering CSS selectors

When working with CSS, it is easy to quickly get a mess of selectors and lose place in the CSS file.
Instead, if we order our CSS selectors the same way each time, it will be easier to find the styles we want to modify.
A good general order to follow is:

1. Resets
1. Base Styles
2. Layout
3. Modules
4. Modifiers and Tweaks

This order is heavily borrowed from the order and categories laid out by the [SMACSS Book](https://smacss.com/book/categorizing).
This order not only makes it easier to find things in our CSS files, it helps avoid unnecessary overriding of CSS rules since it mimics the cascading nature of CSS and specificity.

### Resets

Resets are fairly self explanatory, this includes any CSS pulled in from something like Normalize or the Meyer Web Reset.
These resets may be imported as a separate stylesheet, imported using a pre-processor like SASS, or just included as the start of our CSS file.

### Base Styles

These styles are single element selectors (not classess) used to modify the behavior of a particular element anywhere it appears across the page.
For instance we may want to remove the `text-decoration` from all `a` tags:

```CSS
a {
  text-decoration: inherit;
}
```

### Layout

The layout area of our CSS rules includes major layout of things like columns, sticky elements, etc.
Note that this will likely not include the layout or positioning for smaller items.

### Modules

After layout, we will want to continuing styles within the large chunks of our page.
This will start to get to styling individual elements on the page, but in reference to a larger module that can be moved around the page.

### States

The sates of our app usually include media queries.
With proper planning, this section can be small modifications to only a few rules, although with more complex designs, different media queries may have drastic layout changes.

### Blame

While not part of the SMACSS spec, there are many times where we may need to make small tweaks to elements on our page.
This is often called "blame" when working in agencies or teams.
It includes the small tweaks that you have to do to make things work on all browsers, or fixes for strange bugs.
Blame and modifications are often set aside in hopes that they can eventually be removed or at least that they live in a section alone so that they don't hinder ongoing development with questions like "`position: relative; top: -0.2px`? Why is this here?".
