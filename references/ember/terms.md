# Ember Vocab, Terms, and More!

## Ember Application

Wrapper around all of our logic.
Gets things started out.
Says where on the page to put the Ember app (usually take over the entire `body` element).

> Usually you won't need to modify this

## Router - `app/router.js`

This is what lets Ember know what URLs the application responds to and what routes to load based on the current URL.
It also manages transitioning between routes and waiting for data to load.

We manage and set this up by declaring routes within the `Router.map` callback in `app/router.js`.

Also allows configuration for `Router.location` which defines how to read the URL.
Usually this is for hash or no hash to support things like Github Pages.

## Route

Defines how to transition to a particular page or part of the application.

Most of the work for routes is accomplished with route method hooks:

* `model`
  - Loads data (usually from a fetch request or Ember Data), waits for it to complete (or fail) and loads that into the corresponding template as the `model` variable.
    * If the model function returns a failed promise, Ember handles the error by going to an error route
* `beforeModel`
  - Allows you to do work and checks before loading data with the `model` hook
* `afterModel`
  - After loading data with `model`, gives a final place to check that we shouldn't redirect before loading the template

Routes can be nested to allow multiple routes to be grouped together and to share a common data source.
For instance take the following route structure:

```
post - /posts
|--post.index
|--post.edit - /:id/edit
|--post.detail - /:id/more
|--post.new
````

When starting the app, first the `post` route and `model` hook are started.
In our example, this method loads `this.store.findAll('post')` to get all post records from the API.
Now our `post` template could look like this:

```hbs
{% raw %}
<div class="sidebar">
  <ul class="post-list">
    {{#each model as |post|}}
      <li class="post-list__item">
        {{#link-to "post.detail" post}}
          {{post.name}}
        {{/link-to}}
      </li>
    {{else}}
      <li class="post-list__item--empty">
        Please add a post!
      </li>
    {{/each}}
  </ul>
</div>
<div class="main">
  {{outlet}}
</div>
{% endraw %}
```

Now if we go to `/posts` this will load the `post.index` route which will be surrounded by the above template.
Any HBS from the `post.index` template will be put in the `{% raw %}{{outlet}}{% endraw %}` area.
Because of nesting, the sidebar will show up for ALL of the `post.___` routes.

If a child route does not define its own model and does not have any dynamic segments, it will inherit the parent `model` data.
This means that we do not have to rewrite `this.store.findAll('post')` in our `post.index` route.
But, we will have to likely fetch data in our `post.detail` and `post.edit` pages or else we'll just get an object with an `id` parameter.

## Templates

Ember uses HTMLBars which is like Handlebars that actually knows about the DOM and how HTML works.
At it's core HTMLBars is just HTML that we can start adding bits of logic and templating to.

Variables can be used by surrounding it in `{% raw %}{{}}{% endraw %}`.
So, if we wanted to get the `firstName` property from the `user` variable we would write `{% raw %}{{ user.firstName }}{% endraw %}` (the spaces are just for readability).

> **NOTE** The curly braces in HTMLBars are not plain Javascript! So you cannot run functions regularly! So `{% raw %}{{ (new Date()).getHours() }}{% endraw %}`.
Instead to use Javascript, we will have to use helpers or components to help format data into strings

Templating Helpers
  - `each` - `{% raw %}{{#each arr as |item|}} ... {{/each}}{% endraw %}`
  - `if`
    - Inline Mode (Helpful for adding/removing classes) `{% raw %}{{if check "true-class" "false-class"}}{% endraw %}`
    - Block Mode (Most common) `{% raw %}{{#if check}} ... {{else}} ... {{/if}}{% endraw %}` (the else is optional)
  - `unless` - Works the same as `if` but happens when the `check` is falsey

Special Helpers
  - `outlet` - This is where nested templates will be rendered
  - `action` - Used to listen for browser and user events
    * Put within the opening tag of an element or as an argument to component
      - `<button {% raw %}{{action "save"}}{% endraw %}>Save</button>`
      - `{% raw %}{{input onchange=(action "alertChange")}}{% endraw %}`
    * Optional `on` attribute can specify what type of event to listen to (defaults to 'click')
      - `<form {% raw %}{{action "saveUser" on="submit"}}{% endraw %}> ... </form>`
    * Arguments can be passed in to actions after the action name
      - `<form {% raw %}{{action "saveUser" user firstName lastName on="submit"}}{% endraw %}> ... </form>`
      - This would run the `saveUser` method like this: `saveUser(user, firstName, lastName)`

## Simple Form

Ember Component that helps to capture submit events on forms and groups all changes from multiple inputs as a single object.

Basic Example:

Let's create an edit form for `post.edit` assuming that the current post model is loaded in the template as `model`:

```hbs
{% raw %}{{#simple-form startingValues=model onsubmit=(action "savePost" model) as |formValues|}}
  {{input value=formValues.title}}

  <button>Save</button>
{{/simple-form}}{% endraw %}
```

- `startingValues` - What should the form be filled in with to start?
- `onsubmit` - What action should be run when the form is submitted.
  * Here we pass in the model that we want to save
- Block Parameters - The `simple-form` component `yield`s an object of values that will be sent to our action after the `model` that we passed in

Handling the `onsubmit` action:

In our controller we can handle the onsubmit action.
Since we added an argument of our model, we will get that as our first argument in our action handler.
Then, we will get the object of changes within our form.
Finally, we will get a function to reset the form (although this is often not needed since we'll usually redirect after saving).

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  checkValidInput(input) {
    return input.title === '' || input.name === '';
  },

  actions: {
    savePost(post, form, reset) {
      if (this.checkValidInput(form)) {
        alert('Try that again');
        reset();
      } else {
        // Fill in the post model with all the values from the `form` object
        post.setProperties(form);
        // Save the post model to the server
        post.save().then(() => {
          this.transitionToRoute('post.index');
        });
      }
    }
  }
});
```

## Controller

How to manage data and AFTER the route has loaded the current page.
Usually, this is where we handle user actions in the `actions` object.

> **NOTE** Any property on the controller will be directly available in the template.
This is why `this.set` will immediately update what the user sees in the browser.

* Ember Data (DS)

An easy (or easier) way to manage large sets of related data stored somewhere (usually on a server).

  - Store
    * Local inventory
    * Ask the store for different pieces of data and it figures out where to find them from
    * Available as `this.store` in Controllers and Routes
    * Important Functions:
      - `createRecord(modelName, startingProperties)` - Create new a local copy of the specified model with `startingProperties` (does not save yet)
        * Returns the newly created model
        * `modelName` is required and should match the module name within `app/models`
        * `startingProperties` is optional, but saves ALOT of time :)
        * Ex. `this.store.createRecord('post', {title: 'How to write JS apps'})`
      - `findAll(modelName)` - Find all the records for a particular model from the server
      - `findRecord(modelName, id)` - Find a record for a particular model based on its `id` from the server

  - Model (Definition) - `DS.Model.extend` - Located in `app/models`
    * Describes the attributes and Relationships that should be synced with the server

  - Model Generator Command

    * **NOTE** Rember the `-p` flag so this file ends up in the `app/models` directory and not in a random pod

    * Let's create a `post` model that belongs to a `user` and has a `title` that is a string:
      - `ember g model post user:belongsTo:user title:string -p`

```js
// app/models/post.js
import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  title: DS.attr('string')
});
```

    * Let's create a `user` model that has many posts and has first and last names:
      - `ember g model user post:hasMany:post firstName:string lastName:string -p`

```js
// app/models/user.js
import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.hasMany('post'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
```

  - Model Relationships
    * Says how different models are related to each other
      - Ex. An author has written a lot of books so if we stored that we would say that:
        * `book` belongsTo `author`
        * `author` hasMany `book`
      - **NOTE** Ember does not have any `hasOne` relationship
        * Ex. A hooman has one doge
          - `doge` belongsTo `hooman`
          - `hooman` belongsTo `doge`

  - Model (Instance) - Returned by `findAll`, `createRecord`, `findRecord`
    * Object to represent and manage a particular record in the API
    * Important Functions:
      - `setProperties(valuesObject)` - Set all the values on the current model with values from the `valuesObject`
        * `post.setProperties({body: 'This is an awesome post', numOfComments: 5})`
      - `save()` - Figures out how to sync this current record with the API
        * For instance, for records that are new (usually made by `createRecord`) make a `POST` request
        * For records that are being updated make a `PUT` or `PATCH` request
      - `destroyRecord()` - Delete a record locally and make a `DELETE` request to the server

  - Adapter
    * How to actually connect to the data source and what type of requests to make
    * You usually won't write your own
    * Some things that you WILL usually customize though
      - `host` - What is the domain name of the API you are connecting to (`http://myapi.com`)
      - `namespace` - Is there anything that comes between the `host` and the model names (usually `api`)
  - Serializer
    * Translator in and out so that API gets the format it wants, and the store gets the format it wants
    * YOU WILL NOT WRITE THESE YOURSELF!!!

* Component
  - `yield`
  - `link-to`
  - Method Hooks
    * `didReceiveAttrs`

* Helpers

---

## Mirage

Addon that acts like a fake API useful for testing and when you don't have a working API up and running.
Also useful when you want to try to see what your app looks like with strange data or error states.

  - Scenario
    * What fake data should be created when working in development mode
    * **NOTE** Scenarios are NOT loaded in tests
    * `server.create(modelName, properties)` - Adds a single record to the "database"
    * `server.createList(modelName, numberOfCopies, properties)`- Adds a multiple records to the "database"
  - Factory
    * How to fill in data when `create` or `createList` is run, but a property wasn't specified
    * This usually where you will be using `faker`
    * Default values to help create fake records in the "database"
  - Model
    * Defines that this resource exists in the Mirage "database"
    * **NOTE** This is different than Ember Data models!!!
    * Only needed to define relationships between different resources in Mirage
    * NO REALLY THIS ISN'T CONNECTED TO `app/models`... DON'T MIX THEM!
  - Serializer
    * Translator between incoming requests to the "server" and the info sent back out
    * You won't touch it
  - `config.js`
    * What URLs should the "server" respond to?
    * What host name and namespace is the server located on?
    * Should requests be delayed by a certain amount of time to simulate network traffic?

* Tests
  - Acceptance Test
  - Integration Test
  - Unit Test
  - Test Helpers
    * `visit`
    * `click`
    * `fillIn`
    * `andThen`
    * `find`
    * `findWithAssert`
* CLI
  - Commands
  - `.ember-cli`
    * `usePods`
  - Folder Structure
    * `app`
    * `public`
    * Pods vs Traditional
