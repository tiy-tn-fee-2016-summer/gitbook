# Hoisting

Hoisting describes when memory is set aside for variables within a given [scope](scope.html).

The basic concept of hoisting is that any variable that is declared is available at all times within it's given scope.
This means that even though a variable does not have a set value, it can be referenced and even used as log as there is a variable declared in the current scope.

See the difference between the two uses of `newVar` in the following functions:

```js
var noHoisting = function() {
  console.log(newVar); // Reference Error: newVar is not defined
}

var hoisting = function() {
  console.log(newVar); // undefined

  var newVar = `Make a new var`;
}
```

## Variable Declaration vs Assignment

Variables are declared by using the `var` keyword.
This sets aside a piece of memory for storing the variable value.
All declarations are hoisted to the top of their scope and the variable will not make a reference error throughout that scope.

On the other hand, variables are assigned values by using the `=` operator.
Until variables are given an initial value, they will be `undefined`.
While variable declarations are hoisted, assignment is performed in order.
This means that a variable may unexpectedly be `undefined` since it had not been assigned yet.

## Function Declarations

Variable assignments are different than function declarations.
Like variables, declared functions are hoisted to the top of their scope and can be used before they are declared.

Compare using function declarations compared to creating a variable and assigning it to a function expression:

```js
iWorkUpHere();
iDontHoist();

function iWorkUpHere() {
  console.log(`works everywhere`);
}

var iDontHoist = function() {
  console.log(`doesn't work until later`);
};

iDontHoist(); // Would work here if no error from earlier
```

## Avoiding Confusion and Code Quality

Since it can be confusing as to when a variable is set versus when hoisting occurs, it is a best practice to create the variable declaration at the top of your current scope.
Even do this if it means separating declaration from initialization.
See how this rewrite makes it cleaner to see when variables are available:

```js
var confusing = function() {
  console.log(newVar); // undefined

  var newVar = `Make a new var`;
}

var clearer = function() {
  var newVar;
  console.log(newVar); // undefined

  newVar = `Make a new var`;
}
```
