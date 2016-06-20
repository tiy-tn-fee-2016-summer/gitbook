# Monday June 20

## Daily JS

Arrays and Objects (all ES6 like)

```js
var x = 2;
var y = 3;
var z = 'hello';
var a = 'world';
var b = '2';
var c = `${a} foo ${b}`;
var d = `foo`;
var e = `${x} + ${y} = ${x + y}`;
var f = x + ' + ' + y + ' = ' + (x + y); // Same as var e

console.log(x + y); // 5
console.log(z + a); // 'helloworld'
console.log(z + ' ' + a); // 'hello world'
console.log(`${z} ${a}`); // 'hello world'
console.log(c); // 'world foo 2'
console.log(d); // 'foo'
console.log(e); // '2 + 3 = 5'
console.log(x + z); // '2hello'
console.log(x + b); // '22'
console.log(x + Math.parseInt(b)); // 4
```

## Lab

* *2PM* Daily JS Catch Up

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Struggles

* Positioning (`absolute`, `relative`)
* Centering things up

### Common Wins

* Taking breaks HELPS!!!
* Breaking layouts into smaller pieces helps
* Git is starting to make sense
* Flexbox seems cool

## Topics

* Time and Stress Management
  - Do Not Disturb Mode
  - Seat Switching
* Background of Build Tools and Preprocessors
  * Build Tools
    - What are they?
    - Why do we use them?
    - What are we using?
      * Why that one?
  * Preprocessors
    - What are they?
    - Why do we use them?
    - What are we using?
      * Why that one?
* Scaffolding with Yeoman and SASS Broccoli
  - `npm install -g yo ember-cli generator-sass-broccoli`
  - `yo sass-broccoli`
* SASS Lint
  - `apm install linter-sass-lint`
* SASS Variables
* SASS Nesting
  - [BEM Naming Conventions](./bem.html)
* SASS Imports
  - [Organizing Code](./organizing.html)

## Inspiration

### Twitter Dashboard

![Twitter Dashboard](./twitter.png)

## Exercise & Lesson Code

https://github.com/TIY-TN-FEE-2016-june/lesson-02-01

## Lab

## Homework
