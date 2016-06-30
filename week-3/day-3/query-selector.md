# Javascript and the DOM

So far, all of the content and styling of the page we have done has used only HTML and CSS.
But, as we want to modify the content of the page AFTER the initial load, we will have to work with Javascript.
And to start out, we will need a way to grab parts of the page for modification.

## DOM vs HTML

When working with Javascript and what the user sees in the browser, we are no longer interacting with raw HTML.
The elements on the page are actually part of what is called the DOM (Document Object Model).

This means that EVERYTHING that our users see on the page are actually available as individual objects that can be changed using Javascript.

The DOM is different from HTML because HTML is the raw text that is interpreted by the browser to build out the working DOM that our user sees and interacts with.

## `document`

In Javascript land in the browser, we can access the current DOM using the global `document` variable.
This represents everything that is available to the user (even the hidden and invisible stuff).

## `document.querySelector`

To grab further elements within the `document` object, we can run the `document.querySelector` function and pass in a selector just like the ones that we use to select elements in CSS.

So to grab a div with a class of `superman` we could use the following code:

```js
var someVar = document.querySelector('.superman');
```

However, note that `document.querySelector` only selects the first element that matches a given query string.

## `document.querySelectorAll`

To select all elements for a given query string, we have to use `document.querySelectorAll`.
This will return all the elements matching a query string as a new `NodeList`.

This is just a watered down array that only has a `length` property.
That means without some work we can't use things like `map`, `reduce`, `filter`, or even `forEach` on this resulting set.

## Turning `NodeList`s into Arrays

To turn any "array-like" object into a real Javascript array, we can use the `Array.from` function and pass in the "array-like" object.
Lucky for us, the `NodeList` object type in Javascript falls into the category of "array-like".

So to run some code for EVERY `.superman` element in the DOM, we can use the following code:

```js
var superman = document.querySelectorAll('.superman');

superman.forEach((item) {
  // Do something forEach item in the superman array
});
```
