<h1 align="center">Timer</h1>

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Example](#example)
- [License](#license)

## About
Timer is a library for creating and updating content based on time.

Like watch, counters, ads e.t.c.

## Installation

1) <a target="_blank" href="https://raw.githubusercontent.com/Natteke/SmokinSexySoftware/master/packages/Timer/dist/Timer.js">Download Timer</a>

2) Connect `Timer` before your scripts.

```html
<script src="/assets/js/lib/Timer.js"></script>
```
3) See how to [use](#usage) the Timer.
 
##### Package managers 😎

If you are using package managers such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/), import this lib as usual.

```sh
# Yarn
yarn add sss-timer

# NPM
npm i sss-timer --save
```
Do `import Timer from 'sss-timer';`

## Usage
### Create callback

```Javascript
    // Timer will call your function with the following params
    // date - time object
    // timer - timer instance
    
    function callback (date, timer) {
      console.dir(date);
      console.dir(timer);
    }
```

### Init your timer

```Javascript
    const counter = new Timer(callback);
```

Or init and pass params

```Javascript
    const counter = new Timer(callback, {
        time: 5000
    });
```

## Options

| Option  | Type  | Description |
| :------------ |:---------------|:--------------|
| time      | number| Initial Timer time state |
| tick     | number        |   How much Timer should increment in each tick and call callback |
| cutOff | "days"/"hours"/"min"/"sec"/"ms"        | Prevents the transition to the next time division. 1hour 10min -> 70min |

## Example

```Javascript
    const callback = function (date, timer) {
          document.body.innerHTML = 'Timer state is: '
          + date.days
          + ' : '
          + date.hours  
          + ' : '
          + date.min
          + ' : '
          + date.sec
    };
    
    const counter = new Timer(callback, {
        time: 90485000,
        // to count down just pass negative tick
        tick: -1000,
        addLeadingZeros: true,
    });
```

>Note: If you count down, timer will stop automatically when it reach 0. 

## License 
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.