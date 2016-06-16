# Layout Tricks

When working with layouts, there are some tricks that we can use to notch things into place.
These are just recommendations that help make things a bit easier:

## Transparent Text

When working with layouts, text can be a bit distracting.
Remember layout is easier when we think about things as a blocks instead of the content that the blocks contain.
So, when starting out with broad strokes, I will often turn ALL the text on the page transparent, so that I then can focus on getting the box model correct.

```css
* {
  color: transparent;
}
```

## You Probably Mean `position: absolute`

When working with layouts and position, my rule is that if you find yourself using `position: relative` and moving things much more than a few px (1-3), you probably meant to use `position: absolute` instead.
Remember `position: relative` moves from the normal static position, if you need to break out of the normal layout, you should use `position: absolute`.

I would say that 95% of the time I use `position: relative`, it is just to have something that I can use to compare child `position: absolute` elements.

## Seeing What's Effecting `position: absolute`

When working on this book material, I thought "it's REALLY hard to know at a glance, what is being used to compare my `position: absolute` element".
To help with this, I created a Chrome Extension that let's you visualize this.

By installing the ["Find Absolute Positioning" extension](https://chrome.google.com/webstore/detail/find-absolute-positioning/jokhggepeefenihapjabmdaehdfnopkg), you can click on the icon and then as you mouse over elements that are `position: absolute`: it will add striped backgrounds to the first element that is effecting the position of your element.

## Ugly Backgrounds

Seeing the box model for elements can be hard.
So when I go to make layouts, I will often make a background a crazy background color.
This helps me see the edges and where the element is on screen.

## Play with Developer Tools

To get your layout perfectly in sync, try to inspect element: then go into the styles to tweak values (maybe even add new ones).
This gives you realtime feedback so you can find your perfect fit.
