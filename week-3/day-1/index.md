# Monday June 27


## Interruptions & Events

* 1PM Student Interview
* Work on JS Crash Course

## Daily JS

### Logic and "Truthiness"

```js
var hi = false;

var x = 20;

var y = function(wat) {
  console.log(wat);

  return wat === 10;
};

var z = 'false';

var a = (foo) => {
  if (foo) {
    // console.log('a works with ' + foo.toString());
    console.log(`a works with ${foo.toString()}`);
  }
}

var noexist;

if (x) {
  console.log(`x is truthy?`); // 'x is truthy'
}

// The console.log does not run because hi is false
if (hi) {
  console.log(`hi is truthy?`);
}

// The console.log does not run because hi is undefined
if (noexist) {
  console.log(`noexist is truthy?`);
}

if (y) {
  console.log(`y is truthy?`); // 'y is truthy'
}

if (z) {
  console.log(`z is truthy?`); // 'z is truthy'
}

if (y(`10`)) { // "10" is printed while running y, but it returns false
  console.log(`y('10') is truthy?`);
} else {
  console.log('y returned something falsey!'); // This is run because y('10') was falsey
}

// a always returns undefined so the contents of if never runs here
if (a()) {
  console.log(`a() is truthy?`);
}

// a always returns undefined so the contents of if never runs here
if (a(null)) {
  console.log(`a(null) is truthy?`);
}

if (a(10)) { // "a works with 10" is printed from within a, but a still returns undefined
  console.log(`a(10) is truthy?`);
}
```

| Truthy                 | Falsey         |
| :-------------         | :------------- |
| true                   | false          |
| Numbers not 0          | undefined      |
| Non-Empty Strings      | null           |
| Objects                | 0              |
| Arrays (check .length) | Empty Strings  |
| Functions              | NaN            |

https://dorey.github.io/JavaScript-Equality-Table/

### Value vs Reference

```js
// Variable Creation
var x;
// Variable Assignment
x = 10;
var y = x;
y = 12;

console.log(x); // 10
console.log(y); // 12

var z = {firstName: 'Bob'};
console.log(z.firstName); // 'Bob'

var a = z;
a.firstName = 'Tim';
console.log(a.firstName); // 'Tim'
a = {firstName: 'Jan'};

console.log(a.firstName); // 'Jan'
console.log(z.firstName); // 'Tim'

var b = [15, 25, 30];
var c = b;
c[1] = 100;

console.log(b); // [15, 100, 30]
console.log(c); // [15, 100, 30]

a = b;

console.log(x); // 10
console.log(y); // 12
console.log(z); // {firstName: 'Tim'}
console.log(a); // [15, 100, 30]
console.log(b); // [15, 100, 30]
console.log(c); // [15, 100, 30]
```

> **PRO TIP** - If you see dot notation or bracket notation on the left hand side of an assignment, you are changing that actual object! If there is no dot or bracket notation, you will not have side-effects.

```js
function change(a, b) {
  a.lastName = 'Stark';
  b = 'Dragon';
}

var character = { firstName: 'Jon', lastName: 'Snow' };
var pet = 'Wolf';

change(character, pet);
console.log(character); // { firstName: 'Jon', lastName: 'Stark' };
console.log(pet); // 'Wolf'
```

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Wins

* Working under pressure and time limits
* Becoming confident with HTML + CSS
* Layout is becoming easier

### Common Struggles

* Hover states and layering (Workshop coming up)
* Media queries and better responsive design
* Images in code structure
* Time management

## Topics

- Javascript Syntax Vocab
  * Variables
  * Maths
  * Strings
  * Arrays
  * Objects
  * Functions
  * `if` & `else`
  * `while` loop
  * `for` loop
- Node

## Code

https://github.com/TIY-TN-FEE-2016-summer/lesson-03-01

## Homework
