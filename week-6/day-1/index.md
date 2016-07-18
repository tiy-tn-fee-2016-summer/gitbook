# Monday July 18

## Interruptions

**NONE**

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Wins

* JS is getting better
* Some stress management

### Common Struggles

* `object-fit`
* Stress Management
* Progress on puppies

## Topics

* Scope - Can I use a variable now?
  - `var` and function declarations (named functions)
    * scopes to current the current function
      + Available to all children function
      + Not available to any thing outside of the current function
    * hoists declaration (not assignment) to the top of the current function
  - `let`
    * scopes to the current function or "block" (`if`, `else`, `for`, `while`)
      + Any time you see squirley braces, `let` can't get out of that!
    * `let` does not hoist
  - `const`
    * must be assigned when declared
    * cannot be changed within the current scope
    * scopes to the current function or "block" (`if`, `else`, `for`, `while`)
      + Any time you see squirley braces, `const` can't get out of that!
    * `const` does not hoist


* Hoisting - `let` vs `var` vs `const` and what are function declarations

```js
function hoisting() {
  console.log('hello world');

  var x = 'Foo';
}

function whatComputerIsDoing() {
  var x;
  console.log('hello world');

  x = 'Foo';
}
```

* What's `this`
* What are all these `=>` doing
  - Implicit `return`
  - `this` doesn't switch

## FAQ

* [ ] Time Management
* [ ] Form Submit Events
* [ ] Reload after adding
* [ ] Object Fit
* [ ] HTTP Methods
* [ ] Toggling Classes for animation
* [ ] Animating Class Toggling
* [ ] Adding Items to the App
  - [ ] Showing updates after adding items
* [ ] Saving and updating values to the server
* [ ] Map and `forEach`

## Lab Time

- GIT for HW 08

## Code

https://github.com/tiy-tn-fee-2016-summer/lesson-week-06/tree/day-01

## Homework
