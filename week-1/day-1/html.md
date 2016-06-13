# HTML Basics

## The Stuff that HTML is Made of

HTML is broken into small pieces called elements.
Elements are specific pieces of content that allow you to interact with your user (usually, but not always this means displaying something in their browser).

At their core, there are four pieces that can be included in an HTML element:

1. Tag Declaration
2. Closing Tag
3. Content
3. Attributes

### Tag Declaration

At a minimum, each element must include a tag declaration.
This is made up of an opening angle bracket, a tag name, and a closing angle bracket.
Some HTML elements only require an opening tag.

```html
<div>
```

In HTML the tag name is important: it defines how a user will interact with the data you are providing to them.
For instance a `p` tag shows paragraph text while an `input` accepts user input as a text box.

### Closing Tags

For most HTML elements, you will want to add content within an element (the next section in these notes).
To do this, we need a way to tell when a tag ends

> A wild closing tag appears!

Closing tags look fairly similar to opening tags, but differ in one major way:
between the opening angle bracket and the tag name, closing tags have a forward slash (`/`).

```html
</div>
```

### Content

Sandwiched between the opening and closing tags of an HTML element is that element's content.
This can take one of two forms:

* Plain text
* More HTML - [It's turtles all the way down](https://xkcd.com/889)

Including HTML within an element is called nesting and allows us to group similar and related content together.
This nesting can also be helpful when we look at styling the page and working with CSS.

### Attributes

The last piece that makes up an HTML element is a set of attributes that can be added ALONGSIDE the main content.
Think of these attributes as modifiers: they don't tell the story (that's what the content is for), instead attributes allow you to change the default behavior of a tag or give extra information to be used for CSS and Javascript.

Attributes are listed within the closing tag and take the format of `{{attribute-name}}="{{attribute-value}}"`.
So to declare an input with a `type` attribute equal to `checkbox` would look like this:

    <input type="checkbox">

## `class` and `id` Attributes Like No Other

This is actually a bit of a fib.
When writing your HTML, `class` and `id` attributes look the exact same as any other attribute.

    <input type="checkbox" class="search" id="nav-search-1">

While writing these two attributes might be the same, they do have a few special characteristics and require a bit more care.
This is due to the fact that the `class` and `id` attributes give us a lot of power to quickly find and work with specific HTML elements from CSS and Javascript.

### Classes

Classes are a bit like descriptors or model numbers.
A single element can have multiple classes separated by spaces.
They describe what a single element is like.
In class we looked at what the classes might look like if we were trying to describe my laptop:

   <computer class="apple macbook year-2014 screen-13">

While this computer COULD be the only 2014 13 inch macbook in the room, that isn't a requirement: there can be a lot more like it with these same (and possibly more) classes.

> **Note** The `computer` tag does not exist in basic HTML 5 but this is just a small look into custom HTML components which we will be covering later in this course!

### Ids

Unlike classes, the `id` attribute is tied to a single element.
Think of this like a model number.
Each id on the page must be unique or your HTML will not be valid.
This allows a very specific selector to be used and will always turn up with only one result.

In the input example above, we can have multiple `search` inputs, but only one can be the first search field in our navbar.
