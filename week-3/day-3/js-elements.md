# Working With Elements in Javascript

Once we have grabbed an element using `document.querySelector` or grabbing an item from a NodeList after `document.querySelectorAll`, we then can modify the element using different properties and functions on this HTMLElement object.

<p class="superman" style="position: fixed; bottom: 0; right: 0; z-index: 999; background: rgba(0, 0, 0, 0.5); color: white; margin: 0; padding: 1rem;">I'm Superman</p>

For this page, let's assume we have a `superman` element:

```js
var superman = document.querySelector('.superman');
```

<script>
var superman = document.querySelector('.superman');
</script>

> The `superman` element is at the bottom right of this screen and can be modified after each example.

## `innerHTML`

The first property on every HTMLElement object is the `innerHTML` property.
This property allows us to inspect the current contents of an element OR change the text shown.

```js
alert(superman.innerHTML);
```

<button class="alert-innerhtml">Alert `innerHTML`</button>

<script>
document.querySelector('.alert-innerhtml').addEventListener('click', function() {
  alert(superman.innerHTML);
});
</script>

If we assign the `innerHTML` property, we can change the text of the HTMLElement:

```js
superman.innerHTML = `Changed`;
```

<button class="change-innerhtml">Change `innerHTML`</button>

<script>
document.querySelector('.change-innerhtml').addEventListener('click', function() {
  superman.innerHTML = `Changed`;
});
</script>

## `style`

On all elements, there is a `style` object that allows us to see modify the inline styles for the current element.
Changing these allows let's us make incremental changes to the style of elements.

```js
superman.style.color = `red`;
```

<button class="change-color">Change `style.color`</button>

<script>
document.querySelector('.change-color').addEventListener('click', function() {
  superman.style.color = `red`;
});
</script>

```js
superman.style.background = `blue`;
```

<button class="change-background">Change `style.background`</button>

<script>
document.querySelector('.change-background').addEventListener('click', function() {
  superman.style.background = `blue`;
});
</script>

> **NOTE** the JS HTMLElement style object should be used for small changes where dynamic data may be needed.For larger changes or transitions, we may want to use classes instead so that all changes can be kept in one spot in our CSS instead of leaving brittle changes in our JS.
