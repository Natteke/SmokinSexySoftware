// days should be 1st and ms last to make parsing statements works well
export const breakpoints = {
    days: 86400000,
    hours: 3600000,
    min: 60000,
    sec: 1000,
    ms: 1,
};

export const getEmptyDate = () => (
    {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        ms: 0,
    }
);

export const addZeros = (date) => {
    const newDate = date;
    Object.keys(newDate)
        .forEach((e) => {
            newDate[e] = newDate[e] < 10 ? `0${newDate[e]}` : `${newDate[e]}`;
        });
    return newDate;
};

export const keys = Object.keys(breakpoints);
