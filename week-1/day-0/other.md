# OSX and Other Configuration

There are still a few other tools that we will need to configure so that everyone is on the same page.
This will help make sure that our system shortcuts are set up so that we can all help each other out.

## Scrolling

By default, Apple ships OSX setup to use "Natural Scrolling".
This can feel good on the trackpad, but is a real weird experience on external mice and when jumping between Mac and PC.
We'll vote on the best fit for the full class and what people are use to and then have one setting across everyone's machine to aid in working together in groups.

## Flux

When you are working early in the morning or late at night, eye strain can be a serious issue.
Flux reduces this by colorizing your display to give off less "blue light" at night.
This will help with eye strain and falling asleep after working late.

To set up flux, open the "Flux" app using spotlight.
Then type in your home zip code so that Flux can know when to start adjusting your screen colors.

If you are working on design or color accuracy, you will want to turn off Flux or else you could be in for some really weird results.
But, if you need to be color accurate, you probably shouldn't be working late at night anyway (RIGHT?).

## Alfred

The last productivity tool that we will set up is called Alfred.
Alfred is a better application launcher than the built in Spotlight search and tends to be better at indexing just what you want instead of your entire computer.

We already installed Alfred in our Super Installer, but now we need to open it and set things up:

- Open Alfred using Spotlight
- Open system preferences and go to "Keyboard and Mouse"
    - Under "Shortcuts" and "Spotlight" change the value of "Show spotlight search" to "ALT+SPACE"
- Return to Alfred and set the "Alfred Hotkey" to "CMD+SPACE"
- Next under "Apperance" I reccomend setting the theme to "OSX Yosemite Dark"

## Goodbye Capslock

Are your hands getting tired from all of the different keyboard shortcuts?
Carpal Tunnel and other stress injuries are really common from typing, and turning your hand all sorts of weird ways isn't helping.

There are a ton of different keyboard layouts set up to create better ergonomics.
We aren't going to do anything quite so drastic.

Instead we are going to remap `CAPSLOCK` (You know the key you only use when you are angry on the internet) to `CMD`.
This not only will decrease the amount of ALL CAPS online, but it will increase producivity and decrease hand strain.

Steps:

- Launch "Keyboard" using Alfred
- Click on "Modifier Keys"
- For the drop down of "Caps Lock", change this to "Command"

## More Screen

In class we will be using our laptops for most of our work, so our screen realestate is pretty limited.
To increase speed and limit collisions, we will make some modifications to the dock settings.
Primarily: to save room, we will hide the dock from our screen to give us back those pixels.

> Don't worry between `CMD+TAB` and Alfred you won't miss the Dock.

- Launch "Dock" using alfred
- Decrease the dock size
- Set minification to about 1/3
- Set "Automatically hide and show Dock"
- Set "position on screen" to "Left"
