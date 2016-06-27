# JS Vocab Cheatsheet

## Variable

Named places to store data for later.
`var x = 2;`

## Data Types

Different formats for storing data.

* [Numbers](#Numbers)
* [Strings](#Strings)
* [Booleans](#Booleans)
* [`null`](#null-and-all-its-friends)
* [`undefined`](#more-about-undefined)
* [Functions](#Functions)
* [Arrays](#Arrays)
* [Objects](#Objects)


## Numbers

Includes any kind of number (Integers and Decimals).

Also includes negative numbers and zero.

Also, `Infinity` and `-Infinity` for the adventuresome.

## Strings

Words (collections of individual characters).

To create strings surround stuff in quotes (single`'Stuff'`, double `"Stuff"`, or back ticks <code>\`Stuff\`</code>)

## Booleans

Can be either `true` or `false` statements.

## `null` and all it's friends

Different states of nothingness.

A slight change from just `false`.

* `null` - Empty Value
* `undefined` - Variable has not been defined
* `NaN` - Not a Number (when JS goes "WAT" when trying to do mathy things...)


## More about `undefined`

Ways to get `undefined`:

* A variable that is never set.
* Asking for object properties that have not been assigned.
* Asking for array positions that have not been assigned.
* Function that has an argument that is not passed in.
* When a function doesn't have a `return` statement.

## Functions

Set of code to be run later (usually multiple times).

Configurable via arguments.

Can return a value after doing work.

```js
var a = function() {
  // Code to run goes here
};

function b() {
  // Code to run goes here
}

var c = () => {
  // Code to run goes here
};
```

## Arrays

Ordered set of values (usually should be similar in format).
Created with `[]`.
Commas separate values: `['a', 'x']`.
Start counting positions at `0`.
Get positions with `[position]` so: `['a', 'x'][0]` will give you `'a'`.

## Objects

Collections of values, referenced by "property" names.
Created with `{}`.
Each property has a "key" and a "value" separated by a colon: `{ firstName: 'Jon' }`.
Commas separate properties: `{ firstName: 'Jon', lastName: 'Snow' }`.
Get properties with either `.propertyName` or `['propertyName']`: so `{ firstName: 'Jon', lastName: 'Snow' }.firstName` or `{ firstName: 'Jon', lastName: 'Snow' }['firstName']` returns `'Jon'`
