# Getting Started With Adonis.js

Now that we have an idea of what Adonis is, let's get our first project started!

## Installing the Adonis CLI

To get started with Adonis projects, we'll need to install the Adonis CLI.
Similar to Ember-CLI or our Yeoman generators, this tool will help create the skeleton of our project for us.
We'll install this tool globally using NPM:

```bash
npm install -g adonis-cli
```

Since the CLI is installed globally, we will only have to install it once to create as many projects as we would like.
To update the Adonis CLI, we can run the same command.

## Creating a new Adonis Project

Now that we have our CLI started, we can run create our first project.
Similar to `ember new`, Adonis CLI has a command to get a project started:

```bash
adonis new my-project
```

With this one command, Adonis CLI will create a `my-project` directory, fill it with the base files, and install all the required dependencies with NPM.

> **NOTE** Unlike Ember CLI, the Adonis CLI does not initialize git or make a starting commit.
So, it is up to us to start our `master` branch!

## Starting the Adonis Server

To start the Adonis server, we can use the `start` npm script:

```bash
npm start
```

This will start a server on `http://localhost:3333`.
But, if we change any server files, the application won't update until we restart the server.
This could take a lot of time and lead to issues if we forget to restart the server.

Along with the `start` script, our `package.json` file also has a `dev` script which will watch our application for changes and restart the server.
So, when developing, we'll want to run:

```bash
npm run dev
```

> **NOTE** Unlike Ember CLI's Serve Command, this dev command will not autorefresh the browser.

Now, you're ready to get started building servers with Adonis!
