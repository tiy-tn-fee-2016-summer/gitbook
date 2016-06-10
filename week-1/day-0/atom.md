# Atom

Your editor is going to be your best friend so you need to make sure that is is ready for everything that we'll be throwing at it throughout this course.
First, cover some of the basic shortcuts that will cut down some of your time in Atom and other apps.

## General Keyboard Shortcuts

The basic keyboard shortcuts that you are used to will still work, review and try out some of the shortcuts below.

- `CMD+C`
- `CMD+X`
- `CMD+S`
- `CMD+Z`
- `CMD+SHIFT+Z`
- `CMD+Shift+S`
- `CMD+F`
- `CMD+W`
- `CMD+Q`
- `CMD+TAB`
- `CMD+Tilde`

## Navigating Text

When working with text and our text editor, it is extremely slow to move away from the keyboard for anything except long scrolling or navigating around web pages.
So, work on how you can use our arrow keys plus a few modifier keys to move around documents in your editor.

- `CMD`
- `Alt`
- `Shift`
- `FN`
- `Delete`

> **Note** The functionality of these modifier keys might vary from application to application depending on how "words" and "lines" are defined.

## Atom Shortcuts

Now that you know the standard system shortcuts, get used to some of the shortcuts that Atom offers.

- `CMD+D`
- `CMD+SHIFT+D`
- `CMD+G`
- `CMD+CTRL+G`
- `CMD+K CMD+B`
- `CMD+J`
- `CMD+CTRL+UP`
- `CMD+CTRL+DOWN`
- `CMD+SHIFT+T`

## Atom Commands

Now that you have some of the text selection and navigation down, you can look at working on making Atom really start bending to to your needs with two special commands.

- `CMD+P` - File Browser
- `CMD+SHIFT+P` - Command Palatte

## Installing Atom Packages

At its core, Atom is a VERY powerful editor.
But, it is also incredibly customizable via packages.

You can quickly view your installed packages by pressing `CMD+,` to get to the settings page.
Then navigate to the "Packages" tab.
This shows you all of the installed packages and allows you to further configure them to meet your needs.
Notice that there is a "Core Packages" section that shows you all of the basic functions that ship with Atom.

Now to install new Packages and Themes click on the "Install" Tab.
Here you can search for different packages and themes to modify your Atom editor.
You can also search for themes and packages at https://atom.io/packages.

For now only install a single package called `sync-settings`.
This package will allow you to backup your Atom preferences including your installed packages!

## Restoring Base Settings

To get you started with a basic set of plugins to make your editor work like mine (including some nice shortcuts), we will use the `sync-settings` package along with a little time on Github and Github Gists.

The first thing you need to do is to setup an API access token for `sync-settings`.
This will give your editor access to update a small file called a gist which will store your editor settings on Github.
To create a new access token, go to https://github.com/settings/tokens/new.
This will ask you for your password because you are about to grant Atom access to do work on your behalf on Github.

Once you are on the form to create a new Access Token, uncheck everything except `gists`.
This means that if for some reason someone gets the access token you create, they will only be able to change your gists.
It's important to only give access to the things that applications need for extra security.
After filling this out, your form should look like this:

![Sync Settings Access Token Settings](/img/gist_access_token.png)

Once you submit this form you should see your new access token and a clipboard icon.
Copy this to your clipboard by clicking on the clipboard icon.

> **Note** If you navigate away from this page, you will have to create a new access token since it will only show the access token code once for security.

Now go to the Atom settings `CMD+,`.
Then under packages, click on the "Settings" button for `sync-settings`.
Scroll down to the input box for "Personal Access Token" and paste in the code from your clipboard.

Now sync-settings has access to your gists and can edit gists on your behalf.
But, it does not know where to store your settings.

Usually, you would have to create a new gist and then backup your existing settings.
But, since `sync-settings` just reads and writes to gists, it can tricked it into using my base settings to get you a head start.

To do this go to https://gist.github.com/rtablada/f553df022c14c7f7878c and click on the "Fork" button on the right hand side.
This will make a copy of my settings on your Github account.
Now you can copy the last part of the URL (after your username) and past that in the input for `sync-settings` where it asks for a "Gist ID".

Now to start pulling in these settings just pull up your Command Palette (`CMD+SHIFT+P`) and then type "restore" to find the option "Sync Settings: Restore" and hit enter.
Now you may see some flashes and breaks on your screen.
What is happening is that `sync-settings` first pulls in configuration files before starting to install every package individually: since some of the configured themes and plugins haven't been installed, you may see some issues until the installation finishes.

> **Note** This process can take a while so continue on to the next step.

After a few minutes (possibly longer on shared internet connections), you can go to "View" in your menu bar and click on "Reload" to reload any settings changes or new packages that have been installed.

## Updating Atom Packages

In the bottom right hand corner of your editor, you may notice a blue box icons with a number of updates.
If you click on this, Atom will bring you to your settings pane and just like in the App Store you can click on "Update All" to get the latest version of plugins that may be out of date or that have been edited with new features or bugfixes.
