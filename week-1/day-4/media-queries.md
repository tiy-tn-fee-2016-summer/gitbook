# Media Queries

When working with responsive web layouts at different sizes, we need a way to only style elements at certain screen sizes or displays.
Media Queries in CSS allow us this flexibility and power.

## Creating Media Queries

To create a media query in CSS we have to use the `@media` keyword and then describing the constraints that we want to use to limit when the set of styles should apply.

For instance if we want to style the body have a red background on phones with <480px wide screens:

```css
@media screen and (max-width: 480px) {
  body {
    background: red;
  }
}
```
