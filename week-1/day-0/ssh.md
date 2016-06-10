# SSH

SSH stands for "Secure Shell".
This is a secure protocol for working remotely between Unix machines via the terminal (or via programs that access the terminal).

To set up secure connections, you will need to create an SSH key.
SSH keys are like a secret handshakes for computers that want to connect remotely.
While we won't be using SSH to control remote servers, we will need SSH keys so that we can grab and send code back and forth to Github.

## Creating a new SSH key

Let's first create our SSH Key

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Then follow the prompt and create a passphrase that is different than your system password and different from your online passwords (especially make sure that this is different from your Github password).
This passphrase will only be prompted when connecting from an external machine into your computer.

To make sure that our computer knows your local passphrase we will need to run one more command:

```
ssh-add ~/.ssh/id_rsa
```

## Adding your SSH key to Github

Let's first copy our **PUBLIC** SSH key.

```
pbcopy < ~/.ssh/id_rsa.pub
```

Now we can add this in our Github settings.
