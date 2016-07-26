# HTML with Adonis Using Nunjucks

So far, we've created plain HTML files as our templates in Adonis.
Now, let's look at the Nunjucks templating language to deal with Javascript data.

Nunjucks in Adonis is similar to Handlebars in Ember.
But, to start we'll need to send data into our template.
So, let's update our route to pass in some data for the Bluth family.


```js
Route.get('/hello', function * (req, res) {
  const family = [
    { firstName: 'Buster', lastName: 'Bluth' },
    { firstName: 'George', lastName: 'Bluth' },
    { firstName: 'Michael', lastName: 'Bluth' },
    { firstName: 'George Michael', lastName: 'Bluth' },
    { firstName: 'Lindsay', lastName: 'Funke' },
    { firstName: 'Tobias', lastName: 'Funke' },
  ]
  yield res.sendView('hello', { development: 'Sudden Valley', family });
});
```

Here, we pass in an object as the second argument to the `res.sendView` method.
This is the data we are sending to our template!

Now we can start using the `development` variable in our template and modify our `h1` in the template:

```njk
<h1>Welcome to {{ development }}</h1>
```

This looks a lot like handlebars, and just like handlebars, we can use double curly braces to print out JS variables passed in to the `res.sendView` method.

## Loops

Printing out single variables isn't fun, especially when we often have to deal with large arrays of objects.
So, let's look at loops in Nunjucks.

We can loop through data using a `for in` loop:

```njk
<ul>
  {% for person in family %}
    <li>{{person.firstName}} {{person.lastName}}</li>
  {% endfor %}
</ul>
```

Notice that in Nunjucks the loop structure is in `{% %}` blocks instead of double curly braces, and that the `for` loop ends with `endfor` instead of `/for` like in handlebars.

## Blocks and Sections

In our application, we won't want to duplicate headers, footers, styles, script tags, etc.
In Ember, we have nested templates and the `outlet` in our Handlebars templates.
Now, we can use the Nunjucks layouts and block features to reduce duplication.

To start, let's create a new file `resources/views/_layout.njk`:

```njk
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>AdonisJs - Node.Js MVC Framework</title>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900' rel='stylesheet' type='text/css'>
    <link rel="icon" href="/assets/favicon.png" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="assets/app.css">
  </head>
  <body>
    <div class="app">
      <nav class="top-nav">
        <h1>The Bluth Company</h1>
      </nav>

      {% block content %}
      {% endblock %}
    </div>
  </body>
</html>
```

Here we have all of our shared HTML surrounding our app.
And we have this new `block` syntax, this is where the changing parts of our page will go.

Now in our `hello` template, let's update it to use our new layout:

```njk
{% extends "_layout" %}

{% block content %}
  <h1>Welcome to {{ development }}</h1>

  <ul>
    {% for person in family %}
      <li>{{person.firstName}} {{person.lastName}}</li>
    {% endfor %}
  </ul>
{% endblock %}
```

The `extends` Nunjuck syntax tells the template system that we want to use the `_layout` template and fill in any `block`s from our `_layout` with our local `block`.

> **NOTE** The name of the block in the extended layout must match the block in our view or things will not show up.

Now that we have routes and views, we can start to create forms and receive user input!
