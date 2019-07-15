import { getEmptyDate, keys, duration } from './index';

/**
 * Convert milliseconds to the time object.
 * @memberof sss-timer
 * @name convert
 * @method
 * @param {number} ms - milliseconds to be parsed
 *
 * @param {number} division - Number from {@link Timer.duration}
 *      breakpoints for time division.
 *      Example: if(@link Timer.duration.SEC) 70 sec will stay 70, instead of 1 min 10 sec.
 *
 * @returns {Object} Object with divided time
 */
export default (ms, division = duration.DAY) => {
    const date = getEmptyDate();
    let rest = ms;
    let i;
    let prop;

    for (i = 0; i < keys.length; i++) {
        if (rest >= duration[keys[i]] && duration[keys[i]] <= division) {
            // takes current division (days/hours e.t.c)
            prop = keys[i];
            // record time un current division
            date[prop] = Math.floor(rest / duration[prop]);
            // save rest to next division iteration
            rest -= (duration[prop] * date[prop]);
        }
    }

    return date;
};
