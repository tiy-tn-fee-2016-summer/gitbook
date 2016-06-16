# Thursday March 3

## Daily JS

Maths & Equality

```js
var x = 2;
var y = 3;
var z = 4;
var a = '2';
var b = 'two';


console.log(x == x);
console.log(x == y);
console.log(x == a);
console.log(a == b);
console.log(x === y);
console.log(x === a);
console.log(x !== a);
console.log(x !== z);

// When you see console.assert fill in the _ to make the statement true
console.assert(x _ y === -1);
console.assert(x _ y === 5);
console.assert(z _ x === 2);
console.assert(x _ y === 6);
console.assert(x _ y === 2); // Remainder of division

/* Results (Printed statements from console.logs) */
//
//
//
//
//
//
//
//
```

## Topics

* **[`vh` and `vw` Units](https://css-tricks.com/the-lengths-of-css/#article-header-id-12)**
* [Flex Box](flex-box.html)
  - Flex Parent vs Flex Children `display: flex`
  - `flex-direction` (Parent)
    * Primary Axis
  - `flex-basis`, `flex-grow`, `flex-shrink` (Child)
  - `flex-wrap` (Parent)
* **[Moving Flexbox Content](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
  - `justify-content` vs `align-items` (Parent)
  - `align-content` (Parent)
  - `align-self` (Child)
* **Flexbox Patterns**
  - Sticky Footer

* [Breaking Down a Layout](layout-planning.html)
* [Layout Techniques](layout-tricks.html)

## Inspiration

### Tumblr Splash Page

[![Tumblr Splash Page](./tumblr.png)](./tumblr.png)

## Exercise & Lesson Code

https://github.com/TIY-TN-FEE-2016-spring/lesson-01-04

## Lab

### Video

[Content Driven Layouts with Flexbox](https://youtu.be/R53ehAOaVpk)

### Exercise

[Flexbox Froggy](http://flexboxfroggy.com/)

## Homework

https://github.com/TIY-TN-FEE-2016-spring/assignments/tree/master/04-surf-and-paddle
