# Monday June 27


## Interruptions & Events

* 2-5PM 1 on 1s

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
    console.log(`a works with ${foo.toString()}`);
  }
}

var noexist;

if (x) {
  console.log(`x is truthy?`); //
}

if (hi) {
  console.log(`hi is truthy?`); //
}

if (noexist) { //
  console.log(`noexist is truthy?`);
}

if (y) {
  console.log(`y is truthy?`); //
}

if (z) {
  console.log(`z is truthy?`); //
}

if (y(`10`)) { //
  console.log(`y('10') is truthy?`);
}

if (a()) { //
  console.log(`a() is truthy?`);
}

if (a(null)) { //
  console.log(`a(null) is truthy?`);
}

if (a(10)) { //
  console.log(`a(10) is truthy?`);
}
```

| Truthy                 | Falsey         |
| :-------------         | :------------- |

### Value vs Reference

```js
// Variable Creation
var x;
// Variable Assignment
x = 10;
var y = x;
y = 12;

console.log(x); //
console.log(y); //

var z = {firstName: 'Bob'};
console.log(z.firstName); //

var a = z;
a.firstName = 'Tim';
a = {firstName: 'Jan'};

console.log(z.firstName); //
console.log(a.firstName); //

var b = [15, 25, 30];
var c = b;
c[1] = 100;

console.log(b); //
console.log(c); //

a = b;

console.log(x); //
console.log(y); //
console.log(z); //
console.log(a); //
console.log(b); //
console.log(c); //
```

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Wins

*

### Common Struggles

*

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

https://github.com/TIY-TN-FEE-2016-spring/lesson-03-01

## Homework
