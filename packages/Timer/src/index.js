/*! SmokinSexySoftware: sss-timer
* https://github.com/Natteke
* Copyright (c) 2019-present Andrey Ponomarenko; */

import {
    duration,
    getEmptyDate,
    stringify,
    convert,
    format,
} from './components';

class Timer {
    constructor(callback, params = {}) {
        if (typeof callback !== 'function') throw new Error('Timer: 1 argument function is required');
        this.onTick = callback;
        this.onStop = params.onStop || (() => {});
        this.time = params.time || 0;
        this.initialTime = params.time || 0;
        this.tick = params.tick || 1000;
        this.breakOn = params.breakOn || duration.DAY;
    }

    static duration = duration;

    static stringify = stringify;

    static convert = convert;

    static format = format;

    interval = null;

    date = getEmptyDate();

    start = () => {
        const tick = Math.abs(this.tick);

        // initial call
        this.date = Timer.convert(this.time, this.breakOn);
        this.onTick(this.date, this);

        // start iteration
        this.interval = setInterval(this.render, tick);
    };

    render = () => {
        // iterate time
        this.time += this.tick;

        // get date object
        this.date = Timer.convert(this.time, this.breakOn);

        // call callback
        this.onTick(this.date, this);

        // stop if there is nothing to count
        if (this.time <= 0) this.stop();
    };

    stop = () => {
        clearInterval(this.interval);
        this.onStop(this.date, this);
    };

    reset = () => {
        this.time = this.initialTime;
    };
}

export default Timer;
