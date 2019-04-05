<h1 align="center">Elemental</h1>

- [About](#about)
- Usage
- [`addClass`](#addclass)
- [`removeClass`](#removeclass) 
- [`hasClass`](#hasclass)
- [`eject`](#eject)

## About
Elemental is most lightweight and Fault tolerant pure javascript DOM class-control helper with 100% functional test coverage.

If you are tired of connecting Jquery just to switch classes of elements, then this library is for you. 

##Installation

<a target="_blank" href="https://raw.githubusercontent.com/Natteke/SmokinSexySoftware/master/packages/Elemental/dist/Elemental.js">Download Elemental</a>

Then, connect `Elemental` before your scripts.

```html
<script src="/assets/js/lib/Elemental.js"></script>
```
 
##### Package managers 😎

```sh
# Yarn
yarn add sss-elemental

# NPM
npm i sss-elemental --save
```
Do `import Elemental from 'sss-elemental';`

## Usage
#### addClass

Adds string to element's class name

```Javascript
const item = document.querySelector('body');
Elemental.addClass(item, 'customClass');
```
#### removeClass

Removes string from element's class name

```Javascript
const item = document.querySelector('body');
Elemental.removeClass(item, 'customClass');
```

#### toggleClass

Adds or removes class depending on its presence.

```Javascript
const item = document.querySelector('body');
Elemental.removeClass(item, 'customClass');
```
#### hasClass

Check if element has certain class name

```Javascript
const body = document.querySelector('body');
const isActive = Elemental.hasClass(body, 'body_active');
console.log(isActive); // true
```

#### eject

Eject all Elemental methods in to Element.prototype allowing you to update class-control syntax.

```Javascript
// Do eject 
Elemental.eject();

// Be fancy
const body = document.querySelector('body');
body.addClass('body_custom');
body.removeClass('body_custom');
body.hasClass('body_custom');
body.toggleClass('body_custom');
```
> This technique called [Monkey patching](https://ru.wikipedia.org/wiki/Monkey_patch) and in large projects it is considered as not a best practice.
But either way it is an optional feature. Elemental does nothing behind the scene without your command, and use it or not it's up to you to decide.

## Browser Support
**Desktop:**  
Firefox 8+  
Chrome 15+   
Safari 4+  
Opera 12.1+   
IE 8+  

**Mobile:**  
Android Browser 4.2+  
Chrome Mobile 63+  
Firefox Mobile 28+   
Maxthon 4+
 
## License 
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.