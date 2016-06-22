# Wednesday June 22

## Daily JS * 2

### Function Arguments

When looking at variables or arguments inside of functions, if they are created in the function itself just rename it `functionName_variableName` so that it is clear that these variables are DIFFERENT than variables that exist outside of that function.



```js

/* Fat arrow same as
var a = function(x = 9, y = 10) {
  return x * y;
};
 */
var x = 2;

var y = function(foo) {
  return foo;
};

function z(z_foo) {
  return z_foo + x;
}

var a = (x = 9, y = 10, z = 2) => {
  return x * y;
};

var b = (cb, value) => {
  return cb(value);
};

console.log(y(12)); //
console.log(y('hello')); //
console.log(foo); //
console.log(y(x)); //
console.log(z('Five')); //
console.log(a(15, 2)); //
console.log(x); //
console.log(a()); //
console.log(a(41)); //
console.log(b(y, x)); //
```

## Interruptions

* None

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Wins

* More comfortable with concepts from last week
* Gaining Speed
* ASK FOR HELP! It works!
* Switch back and forth between things you know

### Common Struggles

* Catching up
* Hover states
* Naming things
* Time Management

## Topics

* Focus and Time Management
  - [Tab Wrangler](https://chrome.google.com/webstore/detail/tab-wrangler/egnjhciaieeiiohknchakcodbpgjnchh?hl=en)
  - [Paradox of Choice](https://www.ted.com/talks/barry_schwartz_on_the_paradox_of_choice?language=en)
  - [Music Playlists](../../resources/playlists.html)
* [Tips for Starting](../../resources/getting-started.html)
* When to Commit?
* [Selector Specificity](specificity.html)
* [BEM](bem.html)
* Refactoring - Scott Pilgrim ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛs
* [Layout Planning & Components](components.html)
* [Semantic Markup](semantic-markup.html)

## Inspiration

### [Initial Site](http://pricing-example.surge.sh)

### Mockups

* Desktop

![Desktop](https://github.com/theironyard-frontend-nashville/assignments/blob/cohort2/week02/wed/breakpoint4.png?raw=true)

* Phone

![Phone](https://github.com/theironyard-frontend-nashville/assignments/blob/cohort2/week02/wed/breakpoint1.png?raw=true)


## Exercise & Lesson Code

https://github.com/TIY-TN-FEE-2016-spring/02-03-pricing-table

## Lab

## Homework

https://github.com/TIY-TN-FEE-2016-spring/assignments/tree/master/07-pricing-page
