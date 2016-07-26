# Adonis JS Route Basics

For web applications, we need a way to respond to the URL.
In Ember we registered and created routes to handle different URLs.
In Adonis, things are pretty similar.

However, on the server we also need to respond differently to different HTTP methods (remember when we used `POST` requests to create new puppies?).
To get started, let's go to our `app/Http/routes.js` look at a responding to a simple `GET` request to `/hello`.

To respond to a route for a `get` request, we can use the `Route.get` method.
For a simple route, this will take two arguments:

* The URL we want to respond to
* A generator function callback saying how we want to handle the request and build a response

## A "Generator" function?

Since alot of what we do on the server (talking to databases, checking user passwords, fetching from other APIs, etc) is asynchronous, we would have a lot of promises to deal with.
Imagine something like this:

```js
function(in, out) {
  User.all().then((user) => {
    return user.getAllPosts();
  }).then((posts) => {
    return posts.checkPopularityOnYoutube();
  }).then((newPosts) => {
    out.send(newPosts);
  });
}
```

It becomes hard to track where one set of data comes from (and trust me, this is clean for most Node.js code...) and what you are actually doing.
Compare this to what generator functions allow us to do:

```js
function * (in, out) {
  const user = yield User.all();
  const posts = yield user.getAllPosts();
  const newPosts = yield posts.checkPopularityOnYoutube();

  out.send(newPosts);
}
```

But, this still leaves us asking what are generators and how do they allow us to write code like this???

Generator functions are sort of like functions that have a pause button that allows us to pause and restart functions from where we left off (instead of starting over).
We hit this pause button by using the `yield` keyword.
Then, Adonis gets the paused function when we called `User.all`, waits for the promise and un-pauses our generator and sets `user` to the result of our database request.

## Back to Our First Route!

Now that we have a starting idea of what generators are, we can build our first route.
As a reminder we wanted to respond to the URL `/hello`.
If we go to `http://localhost:3333/hello` we can see a 404 error page, let's change that!

So at the bottom of `app/Http/routes.js`, we need to add the following js:

```js
Route.get('/hello', function * (req, res) {

});
```

Now our app will respond to `hello`, but eventually our browser will timeout.
What's going on!?
Well, even though we told our app that we want to respond to `GET` requests to `/hello`, we didn't actually send back a response.

Let's send back some HTML to our user.
See those two `req` and `res` arguments, those are objects of the incoming request and the outgoing response.
So we need to modify the response to send info back to our browser.
Let's update the route:

```js
Route.get('/hello', function * (req, res) {
  yield res.sendView('hello');
});
```

We are telling Adonis that we want to send the `hello` template to the user for this route.
Now, if we go to `http://localhost:3333/hello`, we'll see an error saying that there is no template called `hello`.

We can fix this by creating a file `resources/views/hello.njk`.
Here, we can put some HTML in this file:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

And if we go to our browser and refresh, we can see this HTML.

Now, we've created our first route and template, but this isn't too interesting, so let's add templates to take it to the next level!
