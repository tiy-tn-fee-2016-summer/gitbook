# Box Model

When working with sizing things in CSS, there are 4 different properties to account for:

* height/width
* margin
* padding
* border

## `margin` vs `padding`

At first when working with elements, these two properties often feel like they do the same job.
For many beginning developers the choice of `margin` or `padding` often comes down to whichever doesn't already have an existing value.

However, these two properties have VERY different effects on the element in play.
While `margin` will give space around the element being styled, `padding` adds room within an existing element.
The easiest way to see this in action is by having some backgrounds that are visible.

First let's look at an element with `40px` of `margin`:

<div style="background: red; overflow: hidden;">
  <p style="width: calc(50% - 20px); background: blue; color: white; margin: 40px; font-size:20px; line-height: 4rem;">margin: 40px;</p>
</div>

And here's the same div with `40px` of `padding` instead:

<div style="background: red;">
  <p style="width: calc(50% - 20px); background: blue; color: white; margin: 40px; font-size:20px; line-height: 4rem;">margin: 40px;</p>
</div>

## When is 50% not 50% - Box Sizing

When working with columns, you will often want to use percentage widths or even `px` values.
However, with the default settings in CSS, you have to be careful because percentages may not work the way you expect.
See this example:

<div style="background: red; padding: 20px 0; overflow: hidden;">
  <p style="width: 50%; box-sizing: initial; background: blue; color: white; float: left; padding: 20px; font-size:20px; line-height: 4rem;">width: 50%; float: left; padding: 20px;</p>
  <p style="width: 50%; box-sizing: initial; background: green; color: white; float: left; padding: 20px; font-size:20px; line-height: 4rem;">width: 50%; float: left; padding: 20px;</p>
</div>

The issue here is with something called the `box-sizing` property.
This property tells the browser how to interpret the `padding` and `border` values when drawing the element on the screen.
By default, `box-sizing` is set to a value called `content-box` which means that the width and height are the size of the actual content and THEN padding and border are added around this element.

What this means is the `p` tags above with `width: 50%; float: left; padding: 20px;` are actually 50% + 20px + 20px wide (2x 20px because of left and right padding).
This can make creating grids with space between different columns a bit of a chore.

In contrast, there is another value for `box-sizing` called `border-box` which calculates the `border` and `padding` values from WITHIN the set `width` and `height`.
This means that while you may not know the exact size of things like images inside of your grid, you WILL know the full element size for layout purposes.

Here's the same grid from before with `box-sizing` set to `border-box`:

<div style="background: red; padding: 20px 0; overflow: hidden;">
  <p style="width: 50%; box-sizing: border-box; background: blue; color: white; float: left; padding: 20px; font-size:20px; line-height: 4rem;">width: 50%; float: left; padding: 20px;</p>
  <p style="width: 50%; box-sizing: border-box; background: green; color: white; float: left; padding: 20px; font-size:20px; line-height: 4rem;">width: 50%; float: left; padding: 20px;</p>
</div>
