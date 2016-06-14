# The `inherit` value of CSS

In many styles, there will be time where it is uncertain what things could change over time, yet something must be done to stop the browser defaults.
This is where the `inherit` value in CSS can help.

Consider the lowly `a` tag.
It starts life in the browser as a <code style="background: white; color: #0000EE !important">#0000EE</code> in color.
But, what if the design has a mix of `a` tags within the navbar?
Certainly, we wouldn't want to leave the default color there and our designer has sent us a mockup that shows the text in the navbar to be <code style="background: white; color: #626e67 !important">#626e67</code>.

We could set our `.top-nav a` color to <code style="background: white; color: #626e67 !important">#626e67</code>.
But, our design also has some non-link text elements in the navbar that need to be <code style="background: white; color: #626e67 !important">#626e67</code>.
So, if we styled each to have the same color, we would be duplicating and doubling our work.
Instead, we could use the `inherit` value in CSS to tell our `a` tags to use the value of their parent element.

So our styles could look like this:

```css
.top-nav {
  color: #626e67;
  /* Other Styles for .top-nav*/
}

.top-nav__link {
  color: inherit;
}
```

Now if we need to change the text color for our entire top nav, we can change one `color` value and then the `.top-nav__link`s will follow along.

Some other rules that are handy to use `inherit` with:

* `font-size`
* `line-height`
* `border` (for buttons and inputs)
