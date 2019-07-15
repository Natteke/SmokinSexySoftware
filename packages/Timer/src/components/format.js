/**
 * Format string replaces keys with value from passed object
 * @memberof sss-timer
 * @name format
 * @method
 * @param {Object} data - object with values [keys should be the same as in String]
 *
 * @param {string} format - String to be formatted
 *
 * @returns {String} new String with injected {{KEY}} in it
 */
export default (format, data) => {
    if (!format) throw Error('Timer.format string to format require');
    if (!data) throw Error('Timer.format object with time required');
    const keys = Object.keys(data);

    // replaces keys with value from passed object
    return keys.reduce((memo, curr) => (
        memo.replace(new RegExp(`{{${curr}}}`, 'g'), data[curr])
    ), format);
};
