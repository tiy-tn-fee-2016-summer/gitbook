# Scope

Scope describes what variables are available in the current run time in Javascript.

When working with variables that are declared using the `var` keyword, variables are scoped within the function where they are declared.
For instance, let's look at this example code:

```js
var globalScope = `I'm available everywhere`;

var newScope = function() {
  var childScope = `I'm only available in this function`;
}
```

The `globalScope` variable is available both inside and outside of the `newScope` function since it was created in a higher scope.
Compare this to the `childScope` variable which can only be accessed within the `newScope` function.

This same scoping applies to function arguments:

```js
var globalScope = `I'm available everywhere`;

var newScope = function(childArgument) {
  var childScope = `I'm only available in this function`;
}
```

Here the `childArgument` variable is only available in the `newScope` function.

## Overriding Scope

When working with Scope in JS it is fairly common to see the same variable names used in multiple functions and even multiple levels of scope.
If this is the case, we have to be aware that the variable declared in the nearest scope is the variable that will be available.

If we don't redeclare a variable name then the current local scope will inherit all variables from the parent scope.

```js
var globalScope = `I'm available everywhere`;
var overrideMe = `I will be overriden`;

var newScope = function(childArgument) {
  var overrideMe = `Different`;
  var childScope = `I'm only available in this function`;
  var sharedVarName = `I'll be different in each scope`;

  // Available vars:
  // globalScope: "I'm available everywhere"
  // overrideMe: "Different"
  // childScope: "I'm only available in this function"
  // sharedVarName: "I'll be different in each scope"
  // childArgument: defined by call to function
}

var anotherScope = function(childScope) {
  var sharedVarName = `I'm different down here`;

  // Available vars:
  // globalScope: "I'm available everywhere"
  // sharedVarName: "I'm different down here"
  // childScope: defined by call to function
}

// Available vars:
// globalScope: "I'm available everywhere"
// overrideMe: "I will be overriden"
```

Note that even though both `anotherScope` and `newScope` have variables called `sharedVarName` and `childScope`, these are different spots in memory for each function (and even different spots in memory for each time these functions are called).

## Global Scope and `window`

When a variable is declared outside of any function, it is said to be in the "Global Scope", this means that the variable is available to any script.
It also means that over time, this variable could change unexpectedly or even be hijacked by suspicious activity.
This is considered "polluting the global scope" since it makes variables available to everything (including the developer console).

On the other hand, if a variable is assigned using the `=` operator, and no `var` assignment is found, then a new property on the `window` object will be created.
This is particularly dangerous since it is easy to overwrite existing functionality and have unexpected side effects.

To avoid both of these issues, here are some tips:

* Always use the `var` keyword (or some similar declaration keyword) for the first time a variable is used in the desired scope unless you know you want to inherit from a parent scope.
* Wrap application in a self invoking anonymous function.

## Self Invoking Anonymous Functions

In Javascript as a way to limit polluting the global scope, we can create a self invoking anonymous function.
This serves the purpose of creating a new scope for any variables you may have in your application code.

```js
(function() {
  // Your app code goes here
  var notGlobal = `I won't pollute the global scope!`;
}());
```
