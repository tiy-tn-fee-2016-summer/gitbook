# Adonis Migrations

When working on applications that deal with databases, we often need a way to manage and track changes to the database structure over time.
In Adonis (like most server frameworks), this tracking is done using migrations.
Let's take a look!

## Generating a Migration

To get started, let's generate our first migration so that we can create the `posts` table from the last lesson.
Using the `ace` command makes this quite simple:

```bash
./ace make:migration create_posts_table
```

This will create a new file in the `database/migrations` folder called something like `1469537097319_create_posts_table.js`.
The number in front of the migration name is a unique timestamp based on when the migration was created.
This helps the framework identify changes to the database over time.

In the file we can see the following code:

```js
'use strict'

const Schema = use('Schema')

class CreatePostsTableSchema extends Schema {

  up () {
    this.table('create_posts_table', (table) => {
      // alter create_posts_table table
    })
  }

  down () {
    this.table('create_posts_table', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreatePostsTableSchema
```

Now, we can modify this so that we can create the database instead of modifying an existing one.

```js
'use strict'

const Schema = use('Schema')

class CreatePostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      // alter create_posts_table table
    });
  }

  down () {
    this.drop('posts');
  }

}

module.exports = CreatePostsTableSchema
```

Now, let's talk a bit about `up` vs `down`.
Remember that migrations are a way to track Database structure changes over time?
Well, they do this by allowing us as developers to go back or "rollback" migrations that we have run.
So, the `up` function is the changes we are wanting to make or add to the database structure, and the `down` function is an instruction set of how to undo these changes.

## Adding Columns

Right now, if we ran our migration the app would create a new `posts` table, but it would not have any columns to store data in.
So, let's update this:

```js
up() {
  this.create('posts', (table) => {
    table.increments('id');
    table.string('title');
    table.text('post');
    table.date('published_at');
    table.timestamps();
  });
}
```
