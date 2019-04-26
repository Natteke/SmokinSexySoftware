/*! SmokinSexySoftware: sss-timer
* https://github.com/Natteke
* Copyright (c) 2019-present Andrey Ponomarenko; */
import {
    breakpoints,
    getEmptyDate,
    addZeros,
    keys,
} from './components/helpers';

class Timer {
    constructor(callback, params = {}) {
        this.onTick = callback || (() => new Error('1st argument callback required'));
        this.onStop = params.onStop || (() => {});
        this.time = params.time || 0;
        this.tick = params.tick || 1000;
        this.cutOff = params.cutOff || 'days';
    }

    static breakpoints = breakpoints;

    static addZeros = addZeros;

    initialTime = this.time;

    interval = null;

    date = getEmptyDate();

    start = () => {
        const tick = Math.abs(this.tick);
        // вызываем первый коллбек синхронно
        this.render();
        // запускаем итерацию по интервалу
        this.interval = setInterval(() => {
            this.time += this.tick;
            this.render();
            if (this.time <= 0) this.stop();
        }, tick);
    };

    render = () => {
        this.date = Timer.convert(this.time, this.cutOff);
        this.onTick(this.date, this);
    };

    static convert = (ms, division = 'days') => {
        const {
            breakpoints: b,
        } = Timer;
        const date = getEmptyDate();
        let rest = ms;
        let prop;

        for (
            let i = 0;
            rest >= b[keys[i]] && b[keys[i]] <= b[division] && i < keys.length;
            i++
        ) {
            prop = keys[i];
            date[prop] = Math.floor(rest / b[prop]);
            rest -= (b[prop] * date[prop]);
        }

        return date;
    };

    reset = () => {
        this.time = this.initialTime;
        this.render();
    };

    stop = () => {
        const { date, addZeros } = this;
        const newDate = this.addLeadingZeros ? addZeros(date) : { ...date };
        clearInterval(this.interval);
        this.onStop(newDate, this);
    };
}

export default Timer;
