# Xcode and Homebrew

When developing on a Mac, there are a lot of things already installed and ready to go.
Unfortunately the versions of a lot of these tools are more focused on users rather than developers.
To add the required dependencies we will need to install Xcode from Apple which luckily is fairly simple.

# Installing Xcode

From a terminal run `xcode-select --install`.

From here we will need to accept the different software agreements for Xcode:

```
sudo xcodebuild -license
```

# Installing Homebrew

Keeping up with the latest updates for all of the software that we use on a daily basis as developers can be a HUGE pain.
Luckily, there is a tool for Mac called Homebrew that will do all of tracking for us.
Think of it like App Store for your terminal developer tools.

To install Homebrew run:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now that we have Homebrew installed, we can update the list of available apps that Homebrew can install:

```
brew update
```

# Installing Apps Using Homebrew

Now that we have Homebrew installed and the `brew` command is working in our terminal we can install our first brew package:

```
brew install wget
```

`wget` is a small terminal application that allows you to download files from the web directly into your current working directory.

To try this out, let's grab a file:

```
wget https://raw.githubusercontent.com/TIY-TN-FEE-2016-june/gitbook/master/_examples/hello-world.sh
```

Now we should have a new file in our current directory:

```
# Look at the files in our directory
ls

# Quick view the new file
less hello-world.sh
```
