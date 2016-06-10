# Installing Everything Else

Now searching for and installing a bunch of software to get a new machine ready can be a pain.
Think: "what do I need, what's that app that I completely forgot the name but I can't live without".

Luckily, I've created a starter script for us to get all of our machines in pretty much the same spot as far as installed versions of the different software we will be using through this course.

## Getting the "Super Duper Totally Awesome Install Script of Incredibleness"

Now that we have `wget`, we can grab our installer script:

```wget https://raw.githubusercontent.com/TIY-TN-FEE-2016-june/gitbook/master/_scripts/super-installer.sh```

Now let's go ahead and modify the permissions on this file to make it runnable from the command-line:

```
chmod 755 super-installer.sh
```

Finally let's run our new script:

```
./super-installer.sh
```
