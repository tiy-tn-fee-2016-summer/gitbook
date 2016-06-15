<script src="../../js/position.js">
</script>

# CSS Positioning

The `position` property in CSS is very tricky to understand but is a powerful tool when working with layouts.
The `position` values are `static`, `relative`, `fixed`, and `absolute`: each of these act in their own special way to effect where elements are rendered on the screen and how they effect the rendering of other elements.
Depending on the value of the `position` property, `top`, `bottom`, `left`, and `right` will have different effects on our element.

> **NOTE** This page has positionable examples (there's one already fixed to the top). If you want to toggle these examples, click the button in the bottom right (BTW that's position fixed too!).
The inputs represent the `top` and `right` properties on the parent element and tweaking these inputs will move the boxes around so that you can play with these values right in this book.

## `position: static`

Static positioning is the default value for the `position` property.
This means that the position of the current element will be determined only by its box model (width, height, padding, margin, and border).

To move statically positioned elements we can use margins to add extra white space and this will effect any HTML elements that come after the element in HTML.
With `position: static` the `top`, `bottom`, `left`, and `right` properties have no effect.

## `position: relative`

Relative positioning allows us to slightly tweak the existing position of an element from where it would usually be statically positioned.
The `top`, `bottom`, `left`, and `right` push the element from the specified edge.

Elements with `position: relative` will still effect the rendering of based on their original position.
This means that `position: absolute; top: 20px;` will start to cover up elements after it so be VERY AWARE of when we use `position: relative`.
Except for small changes like lining up inline-block icons, `position: relative` is probably not what we want to use for positioning.

## `position: fixed`

Fixed position allows us to set an element to be positioned in the same spot no matter where the element is in our HTML and no matter where the user has scrolled.
The `top`, `bottom`, `left`, and `right` match the specified edge to that same edge of the viewport.
So `position: fixed; top: 0; right: 0;` will "pin" the element to the top right of the viewport.
See the example one on this page?

`position: fixed` elements are on a whole different plane from static and relatively positioned elements.
This means that when it comes time to figure out where to draw elements on the page, it ignores anything that is `position: fixed`.
So it doesn't take up room within the parent element.

## `position: absolute`

Absolute positioning allows elements to be positioned absolutely in comparison to other elements on the page.
The way this works is that element looks for the first parent element that isn't `position: static` and then uses that to compare where to position the current element.
From there, the `top`, `bottom`, `left`, and `right` work much in the same way as `position: fixed` does except instead of comparing to the edge of the viewport, the element is positioned comparing to the edge of the non-static parent element.

> **NOTE** if all parent elements are statically positioned, then the element will position itself in comparison to the `body` element. This is different from `display: fixed` since scrolling WILL effect the elements position. See the yellow example in the top left (you may need to scroll up).


<div class="positionable fixed-example">
  <pre>position: fixed;</pre>
  <input type="number" step="5" value="0" data-property="top" data-unit="px">
  <input type="number" step="5" value="0" data-property="right" data-unit="px">
</div>

<div class="positionable page-absolute-example">
  <pre>position: absolute;
transform: translateX(100%);</pre>
  <p>Positioning uses %</p>
  <input type="number" step="5" value="0" data-property="top" data-unit="%">
  <input type="number" step="5" value="100" data-property="right" data-unit="%">
</div>

<div class="positionable relative-parent">
  <pre>position: relative;</pre>
  <p>I'm the only thing that gives my parent it's size!</p>

  <div class="positionable absolute-example">
    <pre>position: absolute;</pre>
    <pre>Positions to bottom instead of top</pre>
    <input type="number" step="5" value="0" data-property="bottom" data-unit="px">
    <input type="number" step="5" value="0" data-property="right" data-unit="px">
  </div>
</div>

<div class="positionable relative-move-parent">
  <div class="positionable relative-move-example">
    <pre>position: relative;</pre>
    <input type="number" step="5" value="0" data-property="top" data-unit="px">
    <input type="number" step="5" value="0" data-property="right" data-unit="px">
  </div>
  <p>I'm might get covered up</p>
</div>

<style>

  .toggle-examples {
    z-index: 99;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;

    background: rgba(0, 0, 0, 0.2);
  }

  .positionable {
    display: none;
    padding: 1rem;
  }

  .fixed-example {
    position: fixed;
    top: 0;
    right: 0;
    background: red;
  }

  .page-absolute-example {
    position: absolute;
    top: 0;
    right: 100%;
    background: yellow;
    transform: translateX(100%);
  }

  .relative-parent {
    margin: 10rem auto;
    background: red;
    position: relative;
  }

  .absolute-example {
    position: absolute;
    bottom: 0;
    right: 0;
    background: blue;
  }

  .relative-move-parent {
    background: white;
    border: 2px solid black;
  }

  .relative-move-example {
    position: relative;
    top: 0;
    right: 0;
    background: green;
    margin: 10px;
  }

  .relative-move-example + p {
    background: blue;
    padding: 10px;
    margin: 10px;
  }
</style>

<div class="toggle-examples">
  <button class="toggle-examples__btn">Toggle Examples</button>
</div>
