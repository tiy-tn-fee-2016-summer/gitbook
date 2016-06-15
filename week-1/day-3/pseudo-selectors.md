# Pseudo Selectors in CSS

Working with CSS, there are some times where you want to style some other things in the DOM.
Pseudo Selectors are modifiers to your CSS selectors and they always start with a `:` and come right up against the selector you are trying to modify.
These pseudo selectors can be broken down into three different types:

* State Selectors - These modify styles when the user is interacting with the element
* Element Search - These allow you to get an even more specific version of the existing selectors
* Location Selectors - Modify parts of or elements around an existing selector (these start with `::`)

## State Selectors

State selectors are the easiest and most common pseudo selector in CSS.
These selectors allow you to listen and only style things if the user is hovered, clicking, or interacting in different ways with the current element.
A few example of these selectors are:

* `:hover` - Only style when the user's mouse is within the padding, border, or content of an element
* `:active` - Only style when a user has clicked the element and nothing else (works on things like buttons or links)
* `:visited` - Only style when a user has visited an `a` tag
* `:focus` - Only style when a user is typing into an input
* `:checked` - Only style when a user has checked the element (only works on checkbox style inputs)

To see how this works, here is an example button:

```html
<style>
  .hoverable:hover {
    background: red;
  }
</style>

<button class="hoverable">Hover Me</button>
```

<style>
  .hoverable:hover {
    background: red;
  }
</style>

<button class="hoverable">Hover Me</button>

> **NOTE** a pseudo selector doesn't have to be on the last part of your selector string:


```html
<style>
  .hoverable:hover span {
    background: red;
  }
</style>

<button class="hoverable">Hover Me <span>Only this should change</span></button>
```

<style>
  .hoverable-inside:hover span {
    background: red;
  }
</style>

<button class="hoverable-inside">Hover Me <span>Only this should change</span></button>

## Element Search

"Element Search" style pseudo selectors allow you to specify more specific elements than regular selectors based on how you've written your HTML.
This includes things like order of different elements, special attributes like (`disabled`), or contents.
A few of the "Element Search" pseudo selectors include:

* `:first-child` - Styles the first element that matches the selector AND is very first child within a parent element
* `:first-of-type` - Just like `:first-child` but other non-matching elements can come before (usually a more reliable way to select elements)
* `:last-child`/`:last-of-type` - Just like above, but last instead of first...
* `:nth-child`/`:nth-of-type` - Styles elements that match a numerical formula such as `:nth-of-type(1)` (for the first element) or `:nth-of-type(2n)` for all even elements (commonly used for things like table row stripes)
* `:not()` - Allows you to check for any CSS selector that shouldn't be matched (commonly used to do things like putting margins on every item EXCEPT the `:first-of-type`)

To show this off, here is a list with different stripes showing these Element Search selectors:

```html
<style>
.element-search {
  background: white;
}

.element-search li:nth-child(2n) {
  background: #555;
  color: white;
}

.element-search li:first-child {
  color: red;
}

.element-search li:last-child {
  color: blue;
}

.element-search li:not(:first-of-type) {
  text-align: right;
}
</style>

<ul class="element-search">
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ul>
```

<style>
.element-search {
  background: white;
}

.element-search li:nth-child(2n) {
  background: #555;
  color: white;
}

.element-search li:first-child {
  color: red;
}

.element-search li:last-child {
  color: blue;
}

.element-search li:not(:first-of-type) {
  text-align: right;
}
</style>

<ul class="element-search">
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ul>

## Location Selectors or Pseudo Classes

Location selectors are special since they don't style existing DOM elements, but instead style newly created sub-elements.
This can be tricky to understand and can sometimes be abused, but it also can be very powerful.
"Location" style pseudo selectors all begin with `::` instead of a single `:`.
A few of these selectors are:

* `::before` - Create a sub element before the content (but inside of) the current element
* `::after` - Create a sub element after the content (but inside of) the current element
* `::first-letter` - Style the first letter of text content in an element
* `::first-line` - Style the first line of text content in an element
