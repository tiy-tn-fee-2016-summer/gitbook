# CSS Translating

When working with [`position: absolute`](position.html), all percentage measurements are based on the compared parent element's width and height.

But sometimes we want to move an element based on it's OWN `width` and `height` (especially if those properties are only based on the element's content and not hard set with CSS).
To do this type of movement we can use the `transform` property along with the `translate` functions in CSS.
This can be particularly helpful when needing to center an element.

## Centering Anything

When working with elements that need to be vertically positioned, one way that will work 90% of the time is to use a mix of `position: absolute;` along with `transform`
and `translate`.
But first let's look at what ONLY `position: absolute` can do.

<div style="position: relative; height: 300px;">
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>

  <div style="background: blue; text-align: center; position: absolute; top: 50%; left: 50%; width: 25%; height: 25%; float: left;">Center Me</div>
</div>

```html
<div style="position: relative; height: 300px;">
  <div style="background: blue; text-align: center;
  position: absolute; top: 50%;
  left: 50%; width: 25%; height: 25%;">
    Center Me
  </div>
</div>
```

Notice that this moves the top left corner to be perfectly centered (I've added a red and black grid to make this easier to see).
But this isn't what we want!
We want the actual blue box to be centered in the parent element.

To get around this we could use `position: relative` with a few more elements to get our content centered:

<div style="position: relative; height: 300px;">
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>

  <div style="text-align: center; position: absolute; top: 50%; left: 50%; width: 25%; height: 25%;">
    <div style="position: relative; bottom: 50%; right: 50%; background: blue; width: 100%; height: 100%;">Center Me</div>
  </div>
</div>

```html
<div style="position: relative; height: 300px;">
  <div style="text-align: center;
  position: absolute; top: 50%; left: 50%;
  width: 25%; height: 25%;">
    <div style="position: relative; background: blue;
    bottom: 50%; right: 50%;
    width: 100%; height: 100%;">
      Center Me
    </div>
  </div>
</div>
```

Notice for this to work we had to create a new element and move our background to this sub-element.
We also had to use some weird `width: 100%; height: 100%` so that it fills the width and height.

This isn't ideal since it will not always work and it adds unneeded HTML markup.
Instead we can do the same trick to move the blue box based on its size using the `transform` property and the `translate` function instead of a sub-element with `position: relative`.
The `translate` function takes two values for how we want to move the element in the X and Y axis.
Since we need to move up and to the right by 50% of our width and height, our `translate` function would look like `transform: translate(-50%, -50%);`.
If we only need to move one direction, we can use either `translateX` or `translateY` which take one argument to move in the axis named by the function.

<div style="position: relative; height: 300px;">
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>

  <div style="background: blue; text-align: center;
  position: absolute; top: 50%; left: 50%;
  width: 25%; height: 25%;
  transform: translate(-50%, -50%)">Center Me</div>
</div>

```html
<div style="position: relative; height: 300px;">
  <div style="background: blue; text-align: center;
  position: absolute; top: 50%; left: 50%;
  width: 25%; height: 25%;
  transform: translate(-50%, -50%)">
    Center Me
  </div>
</div>
```

## Other `transform` and `translate` Tricks

These concepts don't have to be limited to just centering perfectly in the center of an element.
For instance, we can use `transform` and `translate` to move the center of our element ANYWHERE we want.

For instance, let's put our blue box on the center line of the top red/black border:

<div style="position: relative; height: 300px;">
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>

  <div style="background: blue; text-align: center;
  position: absolute; top: 25%; left: 50%;
  width: 25%; height: 25%;
  transform: translate(-50%, -50%)">Center Me</div>
</div>

```html
<div style="position: relative; height: 300px;">
  <div style="background: blue; text-align: center;
  position: absolute; top: 25%; left: 50%;
  width: 25%; height: 25%;
  transform: translate(-50%, -50%)">
    Center Me
  </div>
</div>
```

Or let's put it in the same place, but change the blue box to be part of the first red box.
To do this we can pin to the right hand side of the red box and vertically center.
Then the only change we need is to translate across the edge by 50% of our element's width.


<div style="position: relative; height: 300px;">
  <div style="position: relative; background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">
    1/4
    <div style="background: blue; color: white; text-align: center;
    position: absolute; top: 50%; right: 0;
    width: 50%; height: 50%;
    transform: translate(50%, -50%)">Center Me</div>
  </div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
</div>

```html
<div style="position: relative; height: 300px;">
  <div style="position: relative; background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">
    1/4
    <div style="background: blue; color:white; text-align: center;
    position: absolute; top: 50%; right: 0;
    width: 25%; height: 25%;
    transform: translate(50%, -50%)">Center Me</div>
  </div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: black; text-align: center; color: white; width:50%; height: 50%; float: left;">1/4</div>
  <div style="background: red; text-align: center; color: black; width:50%; height: 50%; float: left;">1/4</div>
</div>
```
