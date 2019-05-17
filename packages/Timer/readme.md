<h1 align="center">Timer</h1>

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Methods](#methods)
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
    const timer = new Timer(callback);

    // start your timer 
    timer.start();
```

Or init and pass params

```Javascript
    const timer = new Timer(callback, {
        time: 5000
    });
    
    // start your timer 
    timer.start();
```



## Options

| Option  | Type  | Description |
| :------------ |:---------------|:--------------|
| time      | number| Initial Timer time state |
| tick     | number        |   How much Timer should increment in each tick and call callback |
| onStop | function        | Calls after timer stops |
| breakOn | "days"/"hours"/"min"/"sec"/"ms"        | Prevents the transition to the next time division. 1hour 10min -> 70min |

## Methods

#### Timer.convert

Converts milliseconds in the object

###### Note: This is [STATIC](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) method.

```Javascript
const timer = Timer.convert(2000500000, 'hours');
// timer -> {days: 23, hours: 3, min: 41, sec: 40, ms: 0 }
````

#### Timer.stringify

Method will convert numbers to string, and will add zero, if the number less than 10.

Useful for making clocks-like counters e.t.c

###### Note: This is [STATIC](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) method.

```Javascript
const timer = Timer.convert(2000500000);
const date = Timer.stringify(timer);
// timer -> {days: "23", hours: "03", min: "41", sec: "40", ms: "00" }
````

#### timer.start()

Starts the timer

```Javascript
    const timer = new Timer(callback);
    timer.start()
```

#### timer.stop()

Stops the timer

```Javascript
    const timer = new Timer(callback);
    timer.stop()
```

#### timer.reset()

Stops the timer

```Javascript
    const timer = new Timer(callback);
    timer.reset()
```
## Example

```Javascript
    const callback = function (date, timer) {
            console.dir(date);
            console.dir(timer);
            const stringifyDate = Timer.stringify(date);
            document.body.innerHTML = 'Time is: '
                + stringifyDate.days
                + ' : '
                + stringifyDate.hours
                + ' : '
                + stringifyDate.min
                + ' : '
                + stringifyDate.sec;
    
            // timer.time is a working timer variable
            // consider it as read-only,
            // but I can't forbid you to experiment with its direct manipulation
            if(timer.time < 10000) {
                timer.reset();
            }
    
            setTimeout(() => {
                // to stop timer
                timer.stop();
    
                // to reset timer
                timer.reset();
            }, 20000)
        };
    
        const timer = new Timer(callback, {
            // initial time value
            time: 90485000,
            // to count down just pass negative tick int
            tick: -1000,
        });
    
        // to start timer
        timer.start();
```

>Note: If you count down, timer will stop automatically when it reach 0. 

## License 
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.
