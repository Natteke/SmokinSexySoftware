<h1 align="center">Leash</h1>

- [About](#about)
- [Installation](#installation)
- Usage
  - [`Init`](#init)
  - [`Lock`](#lock)
  - [`Release`](#release)
  - [`isScrollable`](#isscrollable)
  - [`isScrollBar`](#isscrollbar)
  - [`isScrollAvailable`](#isscrollavailable)
- [License](#license)

## About
Leash allows you to sit in the browser's scroll cockpit, and disable it at will.

## Installation

1) <a target="_blank" href="https://raw.githubusercontent.com/Natteke/SmokinSexySoftware/master/packages/Leash/dist/Leash.js">Download Leash</a>

2) Connect `Leash` before your scripts.

3) See how to [create](#init) the Leash. 

```html
<script src="/assets/js/lib/Leash.js"></script>
```
 
##### Package managers 😎

If you are using package managers such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/), import this lib as usual.

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
> add `[data-scroll-fixed]` attribute to any `position:fixed` element on the page

### Release

Release scroll X or Y

```Javascript
ScrollLeash.releaseX();
ScrollLeash.releaseY();
```

### isScrollable

Checks isScrollbar and isScrollAvailable

```Javascript
const isScrollable = Leash.isScrollable(document.documentElement); // true
```

### isScrollBar

Checks scrollBar existence;

```Javascript
const isScrollBar = Leash.isScrollBar(document.documentElement); // true
```

### isScrollAvailable

Checks if container can be scrolled

```Javascript
const isScrollAvailable = Leash.isScrollAvailable(document.documentElement); // true
```
 
## License 
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.
