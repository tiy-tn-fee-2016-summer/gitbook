# CSS Selectors

## CSS Selectors

In CSS, you are able to make certain properties apply to only a few elements by grouping things by selectors.

At the most basic level, selectors can be one of three things:

* Element Tag Names: ex `h1`, `nav`, `p`, `li`
* Class Name - preceded by a `.`: ex `.dropdown`
* Id Name - preceded by a `#`: ex `#logo`

### Mixing Element Tags and Classes

What if you want to be more specific for you selector than just `h1` or `.dropdown` alone?
These two selectors would style all `h1` elements or all elements with a class of `dropdown` respectively.
But, let's say you only want to style only `h1` elements with the class of `dropdown`: you can do this by chaining class or id selectors.
So to select `h1` elements with a class of `dropdown` the selector would be `h1.dropdown`.

You can continue chaining to be even more specific, but ALL listed requirements must pass for an element to be styled.
For instance you could style only elements that have a class of `dropdown` and `heading` and `logo` by creating the selector `.dropdown.heading.logo`.

### Nested Elements

Usually element tags and classes alone will not be enough to style things just the way you want without adding a bunch of unneeded classes to your HTML.
In some instances you may want to make sure that an element's parent meets a set of requirements first before selecting the element.

For instance let's say that we want to style the items of a list with a class of `.students`.
We can start by thinking about the selector to style the parent element: `ul.students`.
Then to style only child elements from this list we can continue our selector by adding a space after our `ul.students` and then describing the child elements that we want to style: `ul.students li`.

#### Direct Child Selector

The above example would select ANY `li` element that appears inside of unordered lists with the class of `students`.
Now look at this HTML:

    <ul class="students">
        <li>Lisa</li>
        <li>Bob</li>
        <li>
            More
            <ul class="read-more">
                <li>Peter</li>
                <li>Bruce</li>
                <li>Harvey</li>
            </ul>
        </li>
    </ul>

If we used the selector `ul.students li` this would not only style the items for Lisa and Bob, but it would also style the list items in the "More" section.

To limit a selector to only style first level children, use the `>` symbol between a parent and child in your selector string: `ul.students > li` would only select Lisa and Bob.

### A Note About Ids

Ids are a bit of a tricky subject when it comes to CSS.
At the end of the day, what we want is reusable code that stops us from having to repeat ourselves.
But, because of their nature, `id`s always must be unique and therefore will limit us from being able to reuse styles in the future.

Instead it is a best practice to use classes to describe your elements and add hooks for styling (even if those elements happen to be completely unique right now).
