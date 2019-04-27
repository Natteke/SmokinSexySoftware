// breakpoints should be 1st
export const breakpoints = {
    days: 86400000,
    hours: 3600000,
    min: 60000,
    sec: 1000,
    ms: 1,
};

export const keys = Object.keys(breakpoints);

export const getEmptyDate = () => (
    {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        ms: 0,
    }
);

/*
stringify numbers in time object
 */
export const stringify = (date) => {
    const newDate = date;
    Object.keys(newDate)
        .forEach((e) => {
            newDate[e] = newDate[e] < 10 ? `0${newDate[e]}` : `${newDate[e]}`;
        });
    return newDate;
};

/*
    convert milliseconds to the time object
*/
export const convert = (ms, division = 'days') => {
    const b = breakpoints;
    const date = getEmptyDate();
    let rest = ms;
    let i;
    let prop;

    for (i = 0; i < keys.length; i++) {
        if (rest >= b[keys[i]] && b[keys[i]] <= b[division]) {
            // takes current division (days/hours e.t.c)
            prop = keys[i];
            // record time un current division
            date[prop] = Math.floor(rest / b[prop]);
            // save rest to next division iteration
            rest -= (b[prop] * date[prop]);
        }
    }

    return date;
};
