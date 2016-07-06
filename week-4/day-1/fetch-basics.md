# Fetch Basics

Modern applications often need to show new data to the user AFTER the server has rendered page.
To do this, requests can be made from Javascript to get more data.

This is where `fetch` comes in.
The `fetch` function in the browser allows our applications to talk to servers and work with the data that the server sends back.
For now, we can work with only getting data from the server.

## JSON Strings and APIs

APIs are servers that allow other applications to receive and interact with data sources.
In many modern APIs, the data is formatted as "JSON" (Javascript Object Notation).

JSON formatting allows data to be sent in a format that is both human readable and machine readable.
This JSON string would look something like this: `{"first": "Homer"}`
Since we are working in Javascript, this should feel very familiar.
This is what makes JSON really nice for working with since it is just a stricter formatting of Javascript objects.

## How `fetch` Works

In its most basic form, `fetch` is a function that takes in a URL and returns a Promise object that resolves when API sends us a response.
The pattern for working with fetch and APIs that return JSON data looks like this:

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // Do work here
  });
```

What this is saying is start a request to the URL specified by the `url` variable.
Then, when the request comes back from the server turn the data we get back into a Javascript object from its JSON form.
Then once we have the data parsed from JSON, we can do work where the comment is and `data` will be the Javascript object of data sent back from our server.

## A Quick Word About Arrow Functions

The arrow function above doesn't have any curly braces, so what's up with that.
Javascript arrow functions allow for something called "implicit returns".
So, for short one line functions, we can leave out the curly braces in an arrow function and it automatically returns the output of that one line.

Essentially:

```js
(res) => res.json()
```

Is the same as:

```js
(res) => {
  return res.json();
}
```
