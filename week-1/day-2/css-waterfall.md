# CSS is Like a Waterfall

The selector depths are like different terraces.

The order of things are where it comes in the river.

As an element goes floating down the river trying to get styled, it picks up new rules and throws old ones out.


Given the CSS:

```css
.container {
  max-width: 200px;
  margin: auto;
}

.top-nav {
  max-width: 400px;
  background: brown;
}

ul.top-nav {
  background: rebeccapurple;
  color: white;
}
```

The element `<ul class="top-nav container">...</ul>` would go through the following river/waterfall:

```

 .container    .top-nav
~~~~~~~~~~~~~~~~~~~~~~~|)
                       |(
                       |)      ul.top-nav
                       |~~~~~~~~~~~~~~~~~~~~~~~~~|)
                                                 |(
                                                 |)
                                                 |~~~~~~~~~~~~~~~~~~~~~~~
```

So along the river, the element would first visit the styles for `.container` and pick up a `max-width: 200px` and `margin: auto`.
Upon reaching `.top-nav` it appears there's not enough room on the raft for two max widths so `max-width` is now `400px`, and `background: brown` is picked up too.

Down the waterfall the adventuresome element plunges and comes to a rock named `ul.top-nav`.
Here, the background of `brown` is left to stain the river, but a beautiful `rebeccapurple` takes it's place in the raft and is joined by a lovely `white` text color.

As the brave element continued down on it's way, it knew it could bet on a `margin: auto`, `max-width: 400px`, `background: rebeccapurple`, and `color: white` to get through.
