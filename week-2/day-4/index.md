# Thursday June 23

## Daily JS

### Objects and an intro to `this`

```js
var x = function(one) {
  return one + 10;
};

var y = function() {
  return this.firstName;
};

var z = {
  firstName: 'John',
  lastName: 'Doe',

  somethingCool: x,

  getFirstName: y,

  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },

  setName(first, last) { // setName: function(first, last) {
    this.firstName = first;
    this.lastName = last;
  },
};

console.log(x(12)); // 22
console.log(y()); // undefined
console.log(z.firstName);  // 'John'
console.log(z.somethingCool(8)); // 18
console.log(z.getFirstName()); // 'John'
console.log(z.fullName()); // 'John Doe'
z.setName('Han', 'Solo');
console.log(z.fullName()); // 'Han Solo'
z.firstName = "Luke";
z.lastName = "Skywalker";
console.log(z.fullName("Foo", "Bar")); // 'Luke Skywalker'
z.lastName = "Organa";
console.log(z.fullName()); // 'Luke Organa'
z.setName("Jar Jar");
console.log(z.fullName()); // 'Jar Jar undefined'
```

## Interruptions and Events

* 2PM - ¿ One on ones

## Standups

* What is going well?
* What is not going well (what are you struggling with)?
* What's something you'd like to share not about code?
* What's something you've learned

### Common Wins

* Asking for help... HELPS!

### Common Struggles

* Overcomplicating things === bad
* Media Queries
* Flexbox

## Topics

* Scrollable Areas
* Modifying Build Tools
  - [Foundation](http://foundation.zurb.com/sites/docs/v/5.5.3/using-sass.html)
  - `npm install foundation-sites --save`
* SASS Extends
* SASS Mixins
  - Yoga SASS

## Inspiration

![Desktop](big-info.jpg)
![Mobil](mobile-info.jpg)

## Exercise & Lesson Code

https://github.com/TIY-TN-FEE-2016-summer/lesson-02-04

## Lab

## Homework
