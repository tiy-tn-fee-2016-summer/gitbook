# Boilerplate Valid HTML

When working with HTML, we can have a blank file, just start adding elements, and Chrome will know how to read this in.
However, while this can be rendered, this HTML would not be valid.
Instead to start off with valid HTML, we need to pull in a bit of boilerplate HTML to get us started:

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title></title>
</head>
<body>

</body>
</html>
```

This declares the basic structure of HTML, sets the default language to English, and limits some of the characters we can use to things that the browser understands (utf-8).

When you are adding things that you want directly to interact with the user, this will be nested in the `body` element, while the `head` element is used to set up the page, set the menu bar `title`, and add information for things like Google, Twitter and Facebook to search on.
