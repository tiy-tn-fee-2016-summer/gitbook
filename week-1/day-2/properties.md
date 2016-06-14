# CSS Properties

This is just a short list of available CSS properties based on some of the most common ones out there: for a more complete list visit MDN.

* width
* height
* display
* margin
* padding
* border
* background
  - background-color
  - background-image
* color
* border-radius
* font-size
* font-style
* text-align
* font-weight
* text-decoration

## Sizes `px` vs `%` vs `em` vs `rem`

When working with different sizes for elements, text, or white space: you have a few different options as to how to set the value in CSS.

The first and most common sizing unit is the `px`, this means that `1px` matches to a single pixel as seen on the user's screen.

> **NOTE** Retina and high resolution screens (such as on phones) render one CSS pixel over a few different screen pixels. While this does not effect things like element sizes, you may want to check this when working with images.

The next unit for sizing things is `%`. Like you might guess, this unit is a percentage.
When looking at percentages, the percentage is based on the parent element's width.

<div style="width: 300px; margin: auto; background: red;">
  <p style="width: 50%; margin: auto; background: blue; color: white; padding: 10px;">50% of 60px</p>
</div>

When working with text and white space, you may want to work in reference to base a font size.
This allows you to create a consistent flow similar to the techniques used in typesetting for books.
To refer to the current font-size of the parent element you can use the `em` unit where `1em` is 100% of the parent element's font-size.
`em` values can be very useful for doing things like increasing the size of modifier elements (`span`, `strong`, `em`, etc) in regards to the element that are within.

While regular `em` can be used for layout and spacing, it can be inconsistent since if `em` sizes are used within a parent with an `em` font-size then things can be hard to trace down.
Instead, the `rem` unit always is compared to the `font-size` of the `html`.
This allows you to make a consistent [vertical rhythm](https://drewish.com/tools/vertical-rhythm/) which makes things easier to read for users.

> For this example the `rem` is used to make different font sizes line up in their full height.
> In this case, two lines of `16px` text line up to one line of `20px` since the line heights user `rem` units that evenly divide.

<div style="margin: auto;">
  <p style="width: calc(50% - 20px); float: left; background: red; color: white; margin: 10px; font-size:16px; line-height: 2rem;">font-size:16px;<br>line-height: 2rem;</p>
  <p style="width: calc(50% - 20px); float: left; background: blue; color: white; margin: 10px; font-size:20px; line-height: 4rem;">font-size:20px; line-height: 4rem;</p>
</div>

Compare this to using `em` units at the standard `1.2em` line-height

<div style="margin: auto;">
  <p style="width: calc(50% - 20px); float: left; background: red; color: white; margin: 10px; font-size:16px; line-height: 1.2em;">font-size:16px;<br>line-height: 1.2rem;</p>
  <p style="width: calc(50% - 20px); float: left; background: blue; color: white; margin: 10px; font-size:20px; line-height: 1.2em;">font-size:20px; line-height: 1.2em;</p>
</div>
