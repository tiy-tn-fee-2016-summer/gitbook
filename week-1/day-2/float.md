# CSS `float` Property

The `display` property helps a ton when working with boxes of content.
However, this can be only half of the battle when trying to setup your layouts.


Another useful tool when working with layouts is the `float` property.
Using `float` allows you to break out of the standard `display:block;` where every element gets on its own line.
Instead the way that float works is that it grabs and puts itself in the first available pixel that the width of the element fits inside of the parent.

The two values for float are `left` or `right`.
This means that the floated element will snap to either the first available pixel snapped to the left or right.

The easiest way to visualize the `float` property in action is to watch what happens when it exists in a block of text:

<div style="overflow: auto;">
<p style="background: #aaa; color: black;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <img src="http://lorempixel.com/200/200" alt="placeholder" style="float: right;">
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</div>

The code to make this happen is:

```html
<p style="background: #aaa; color: black;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <img src="http://lorempixel.com/200/200" alt="placeholder" style="float: right;">
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

Notice a few things, since this image is inline to the text content of the `p` tag, the text wraps around unlike `display: inline-block;` where only one line of text is next to the full height of the image.
Also notice that the background of the `p` tag does not respect the height of the `img` tag and ends a bit early.
This is because floats do not tell their height to parent elements.
To fix this all we would have to do is add `overflow: auto` (or any `overflow` value other than `visible`) to make the parent interrogate the true height of all children elements that are `position: relative` or `position: static`.

<p style="background: #aaa; color: black; overflow: auto;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <img src="http://lorempixel.com/200/200" alt="placeholder" style="float: right;">
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
