# Introduction to Databases with Adonis

Now that we have a general idea of pulling in user input and storing data within the user's current session, we need a way to store information for extended periods of time and share it between users.
For this, we'll need to use a database!

To get started using Databases with Adonis, we will first need to configure our application.
For most of this cohort, we'll be using PostgreSQL databases to store our information.
However, this is not the default for Adonis, so we will have to change a few basic settings.

## Installing and Configuring `pg` for Adonis

To get started, in our new Adonis project, we'll need to install a database driver.
This tells our app how to talk to the database over the network.
While Adonis can be configured to talk to many different types of databases, none of the drivers are installed when we create a new application.
Let's fix this by installing the `pg` driver to talk to our PostgreSQL database:

```bash
npm install --save pg
```

Now, we'll need to configure our application in a few spots.
To get started, let's move over to the `config/database.js` file.
Here, we'll need to modify the `connection` property to `Env.get('DB_CONNECTION', 'pg')`.
This will tell our application to connect to PostgreSQL by default instead of SQLite.

Next, scroll down to the `pg` connection object.
Here, we can see that the `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_DATABASE` are all configured using the `Env.get` method.
This means that we can change these in our project's `.env` file.
So, let's go there and make a few changes.

First, update the `DB_DATABASE` to match the project database name.
If you do not have a project database, one can be created using `dbcreate` in the terminal.
Next, update the `DB_USER` to match your username since this is the default user when running PostgresApp.
If you do not know your username, run `whoami` in the terminal.

Now your database is configured and ready to go!

## Simple Database Queries

Now that we have our database configured we can ask for data directly from our database.
In order to use information from the database, we have to first pull in the database module from our app:

```js
const Database = use('Database');
```

> **NOTE** the following will not work in your application unless you have a table in your database called `posts`.
To create this run:

```bash
psql my_project_db
```

Then in the PostgreSQL console run:

```sql
CREATE TABLE posts
(
    published_at DATE NOT NULL,
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    post TEXT
);
CREATE UNIQUE INDEX posts_id_uindex ON posts (id);
INSERT INTO public.posts (published_at, id, title, post) VALUES ('2016-07-26', 1, 'My First Title', 'lorem ipsum');
INSERT INTO public.posts (published_at, id, title, post) VALUES ('2016-07-26', 1, 'My Next Post', 'lorem ipsum');
```

Now, let's create a route to get all posts in our app:

```js
Route.get('/posts', function * (req, res) {
  const posts = Database.table('posts').select();

  res.send(posts);
});
```

Notice that we are first grabbing the `posts` table from our database and then running a `SELECT` statement on this table.
In SQL, `SELECT` statements allow us to get rows of data.
Adonis also allows us to make more complex queries.
For instance, let's get all of the rows in the post table that have the title "My First Title":

```js
Route.get('/posts', function * (req, res) {
  const posts = Database.table('posts').where({title: 'My First Title'}).select();

  res.send(posts);
});
```

We still need our `select` statement to get the rows of data, but we've added a constraint with the `WHERE` method.

Next, we will super power our database access by using Lucid models which will give us a lot more power around data creation and updates.
