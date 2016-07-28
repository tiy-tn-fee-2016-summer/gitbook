# Lucid Model Basics

Now that we have our database setup and ready to go, we can start managing our data using Lucid models.

## Generating Lucid models

To get started, we can begin by generating a model to manage "Posts".
Note that the table name for the model is the pluralized form of the Model.
So, if we create a `Post` model, we'll need a `posts` table (which we have already created with our migration).
To make the required file for our model, we can use the `ace` CLI:

```bash
./ace make:model Post
```

Now, we have a new file in `app/Model/Post.js` that looks like this:

```js
'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {

}

module.exports = Post
```

## Using Models

To bring models into our application (in the `routes.js` file or in controllers), we can use the `use` method to pull in our model.
For instance to grab the `Post` model we just created:

```js
const Post = use('App/Model/Post');
```
