# Git Basics

## Branches


## `git` Commands

* `git init` - Starts a new git project in the current directory
* `git add <some file name(s) here>` - Stages line changes from a file or set of files at the time the command is run
* `git commit -m "Your message here"` - Commits currently stages changes (does not do anything in terms of Github or remote repositories)
* `git push <remote name> <local branch name>` - Sends the local commits from `<branch name>` to the specified `<remote name>`
* `git push` - Sends changes for the current branch to the default remote and branch

## `hub` Commands

* `hub create` - Creates an empty repository on Github and names based on the current directory name
  - Sets up the new github repository as the `origin` remote
* `hub pull-request -m "Your message here"` - Tries to make a new Pull Request on Github from the current local branch to the default branch on Github
  - Ways this can fail
    * Current local branch is the default branch on Github
    * Current branch doesn't exist on Github
    * Current branch is different than the default and is pushed to Github but there are no commits that are different
