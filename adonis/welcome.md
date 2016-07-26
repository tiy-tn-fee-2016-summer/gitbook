In order to get the most bang for our buck, we'll be using a few tools:

* Node.js
* Adonis.js
* SQLite/PostgreSQL

## What is Node.js?

The short story is that Node is a way to run Javascript using same run time as we have in Chrome (this is called V8).
Node also comes packed with tools for working with the filesystem, HTTP requests, and more.
On top of this, we can use NPM to pull in extra features and cool tools into our Node projects.
Through this course, we've been already using Node.js to run our build tools, now we're going to build our own server-side code with Node!

## What is Adonis.js?

While Node has some tools for working with networking, think of them a bit like `document.querySelector` or `addEventListener`.
These tools are incredibly powerful, but take a lot of effort to build substantial and production ready applications.

Adonis is a framework that builds on top of these existing tools and makes it easy to build and maintain server-side apps and APIs.
Think of it like Ember or Angular but on the server with Node!
Adonis comes packed with file organization, command line tools, database management, configuration, email, and much more!

## What are SQLite and PostgreSQL?

With our apps, we'll need a place to store all of our user data in an organized, easy to access way.
This is where databases come in.
SQLite and PostgreSQL are two powerful and popular databases which make storing data simple.
Think of them like excel spreadsheets with superpowers (and without the weird formulas).

While SQLite and Postgres are similar, they do have some pretty significant differences.
SQLite is a single file database, meaning our database can be right next to our app code.
This means that it is easy to work on and read, but it causes issues when we want to share the database between two servers.
Postgres is more powerful and works over network traffic, but it requires a bit more setup and can be tougher to use in development.

Since both of these databases use the SQL language, we can test our app locally using SQLite, then when it comes time to put it into production, we can use Postgres.

If the word `SQL` is a bit scary, don't worry, we won't be working that much with actual `SQL` queries or database tables on our own.
Instead, Adonis will allow us to say something like give me all Blog Posts (`BlogPost.all()`) or get me the user with an email "ryan@example.com" (`User.where({email: 'ryan@exampl.com'}).first()`).
