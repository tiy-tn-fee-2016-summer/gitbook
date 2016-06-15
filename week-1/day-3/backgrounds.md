# Background Tricks

When working with background usually, you will start with just a color.
But, backgrounds are a lot more powerful than just this.
Here are just a few tricks that are available.

## `background-image`

When working with sites, you will often have a design require an image as a background.
Whether for a call to action or just as a texture, images as backgrounds are just a mater of saying `url(your-url-here.png)`.

## Gradients

We aren't just limited to images from the web or our local server.
One of the great things is the ability to make a gradient right in CSS.
When working with gradients there are two different options: `linear-gradient` and `radial-gradient`

These work in a similar fashion where you can specify different "stops" or places along the gradient that you want do be different colors.
These "stops" are made up of a color value and a size value.

For example you could have a `background-image: linear-gradient(white 0%, black 100%);`

<h1 style="background-image: linear-gradient(white, black);">Hey</h1>

If you only set two stops you can omit the size values and the browser will assume you want to go from one color to the other in even increments across the size of your element: `background-image: linear-gradient(white 0%, black 100%);`

<h1 style="background-image: linear-gradient(white, green,  black);">Hey</h1>

But if you want more power, you can specify the different stops and even use px or em values: `background-image: linear-gradient(white 0%, green .3em, white .6em, black 100%);`

<h1 style="background-image: linear-gradient(white 0%, green .3em, white .6em, black 100%);">Hey</h1>

If you set stops at the same value, you can make hard lines: `background-image: linear-gradient(white .3em, green .3em, white .6em, black 100%);`

<h1 style="background-image: linear-gradient(white .3em, green .3em, green 1em, white 1em, black 100%);">Hey</h1>

Finally you can change the direction that `linear-gradient` goes by specifying a different first parameter, this can either be `to ___` where blank is a direction: `background-image: linear-gradient(to right, white .3em, green .3em, white .6em, black 100%);`

<h1 style="background-image: linear-gradient(to right, white 1.3em, green 1.3em, white 4.1em, black 100%);">Hey</h1>

Or you can specify a degree to angle the gradient: `background-image: linear-gradient(45deg, white .3em, green .3em, white .6em, black 100%);`

<h1 style="background-image: linear-gradient(45deg, white 1.3em, green 1.3em, white 4.1em, black 100%);">Hey</h1>

Finally radial-gradient works just like linear-gradient but instead of specifying the direction the first parameter specifies where to start the center of the gradient and what poroportions to make the radius (circle or ellipse): `background-image: radial-gradient(circle at top right, white .3em, green .3em, white .6em, black 100%);`

<h1 style="background-image: radial-gradient(circle at top right, white 1.3em, green 1.3em, white 4.1em, black 100%);">Hey</h1>

## `background-position`

When working with background images, you may want to reposition the background image.
This can be used in combination with `overflow: hidden` as a way of cropping parts of images or even to create sprite sheets (a large single image file composed of small images that is used for multiple backgrounds).
The background position takes either size values (px, em, rem, %) to move the image from the top left corner, or special values `top`, `bottom`, `left`, `right` to pin the image to the parent edge of the same name.
There is a final value `center` which centers the background and this is a valid value for both vertical and horizontal positioning.

## `background-attachment`

> **NOTE** These examples aren't properly rendering in Chrome... I'm not sure if it's something on my machine or a bug or what... Check in Safari for now...

The `background-attachment` property allows you to change how the scroll position of the page effects the background.
There are three different values:

* `fixed` - background image does not move when you scroll, this makes it look like things are "skating" across the background image. This is shown in the colored surrounding div in both examples
* `scroll` - default behavior: this is similar to the `fixed` value but is limited to `overflow: scroll` this is presented below

<div style="background: url(http://lorempixel.com/output/abstract-q-c-640-480-4.jpg) center center fixed; background-size: cover; overflow: auto">
  <div style="background: url(http://lorempixel.com/output/animals-q-g-640-480-2.jpg);  height: 200px; overflow: scroll; margin: 20px;">
    <h2 style="margin:0; height: 300px">This is good</h2>
  </div>
</div>

* `local` -scolling up and down moves the picture up and down.

<div style="background: url(http://lorempixel.com/output/abstract-q-c-640-480-4.jpg) center center fixed; background-size: cover; overflow: auto">
  <div style="background: url(http://lorempixel.com/output/animals-q-g-640-480-2.jpg) local;  height: 200px; overflow: scroll; margin: 20px;">
    <h2 style="margin:0; height: 300px">This is good</h2>
  </div>
</div>

## `background-size`

Another powerful tool when working with backgrounds is the `background-size` property.
By default, the image of a background will take up the size of said image regardless if that is larger or smaller than the element which the image is a background.
To change this behavior you can use the `background-size` property and pass either a size value (px, em, etc) or two special values: `cover` and `contain`.

The `cover` value specifies that the image should not leave ANY whitespace and should cover the full element both vertically AND horizontal with a single instance of the image.

The `contain` value specifies that the image should cover the either the element vertically or horizontal with a single instance of the image, this often leaves extra un-styled background unless you get the image resolution and element sizing JUST right.

> **Note** that if a background is too small to fully fill the background of an element, it will repeat in both the X and Y axis unless you change the `background-repeat` property to `no-repeat`.

## `background` Combined Property

When working with backgrounds everything listed above (including the `background-repeat`) property can be combined on a single line with the `background` property: `background: url(http://lorempixel.com/output/abstract-q-c-640-480-4.jpg) center center no-repeat fixed;` is the same as `background-image: url(http://lorempixel.com/output/abstract-q-c-640-480-4.jpg); background-position: center center; background-repeat: none; background-attachment: fixed;`
