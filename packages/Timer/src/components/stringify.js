/*
stringify numbers in time object
 */
export default (date) => {
    const newDate = date;
    Object.keys(newDate)
        .forEach((e) => {
            newDate[e] = newDate[e] < 10 ? `0${newDate[e]}` : `${newDate[e]}`;
        });
    return newDate;
};
