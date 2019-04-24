# konami-code

__konami-code__ is an event-based easter egg for websites. It creates an event called `konamicode` that fires whenever the [Konami Code sequence](https://en.wikipedia.org/wiki/Konami_Code) is succesfully entered in a webpage.

## Basic usage

Include the script in your page:

```html
<script src="konami-code.min.js"></script>
```

Add an event listener:

```js
window.addEventListener('konamicode', () => alert('Hello, world!'));
```
and you're good to go!
