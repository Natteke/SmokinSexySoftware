<h1 align="center">Leash</h1>

- [About](#about)
- Usage
  - [`Init`](#Init)
  - [`Lock`](#Lock)
  - [`Release`](#Release)
  - [`isScrollable`](#isScrollable)
  - [`isScrollBar`](#isScrollBar)
  - [`isScrollAvailable`](#isScrollAvailable)
- [License](#License)

## About
Leash is complex solution to disable scroll in any container you want.

Unlike many other ways to block the scroll you will not see any elements jumps, lags and and so on. Existed scroll will be replaced with the fake one.

   

##Installation

<a target="_blank" href="https://raw.githubusercontent.com/Natteke/SmokinSexySoftware/master/packages/Elemental/dist/Leash.js">Download Leash</a>

Then, connect `Leash` before your scripts.

```html
<script src="/assets/js/lib/Leash.js"></script>
```
 
##### Package managers 😎

```sh
# Yarn
yarn add sss-leash

# NPM
npm i sss-leash --save
```
Do `import Leash from 'sss-leash';`

## Init
### Create new Leash

```Javascript
    const body = document.body;
    const ScrollLeash = new Leash(body);
```
## Methods

### Lock

Lock scroll X or Y

```Javascript
ScrollLeash.lockX();
ScrollLeash.lockY();
```
> add `[data-scroll-fixed]` attribute to any fixed element on the page

### Release

Release scroll X or Y

```Javascript
ScrollLeash.releaseX();
ScrollLeash.releaseY();
```

### isScrollable

Check if container can be scrolled either

```Javascript
    const isScrollable = Leash.isScrollable(document.body);
    // true
```

### isScrollBar

Check scrollBar existence;

```Javascript
    const isScrollBar = Leash.isScrollBar(document.body);
    // true
```

### isScrollAvailable

Check if scroll position can be changed;

```Javascript
    const isScrollAvailable = Leash.isScrollAvailable(document.body);
    // true
```
 
## License 
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.