# The `attr` CSS Function

When working with Pseudo Elements (`::before` and `::after`), there are times where we want to make the `content` of the pseudo element dynamic from our HTML.

To do this we can use HTML Data Attributes and the CSS `attr` to change the value of `content` on the fly.

## Data Attributes

In HTML, we can use data attributes to add extra context to our element that isn't shown to the user in browser.
This can be used to modify the behavior of the element in JS, but can also be used in CSS using the `attr` function.

Data attributes can be anything that needs to be stored with an element, but for valid HTML, all attributes that are not part of the traditional HTML specification should be started with `data-`.
For instance if we wanted to store the price for a store item we could have the following markup:

```html
<div class="store-item" data-price="45">
  <h3>Super Organic Kale</h3>
</div>
```

## `attr` Function

In CSS to pull in the value of any attribute from an element (not just data attributes), we can use the `attr` function.
To do this we just need to put the name of the attribute we want to pull as the argument to the `attr` function.
To pull in the value of the `class` attribute would be `content: attr(class)`.

To continue the look at the store-item example above we could style a before element:

```css
.store-item::before {
  content: '$' attr(data-price);
}
```

And this would look like:

<style>
.store-item::before {
  content: '$' attr(data-price);
}
</style>

<div class="store-item" data-price="45">
  <h3>Super Organic Kale</h3>
</div>
