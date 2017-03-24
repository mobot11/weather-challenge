/**
 * A suite of helper functions to aid in data manipulation.
 */

/**
 * Get the CSS class we want to attribute to an
 * icon value
 * @param  {string} icon       icon value from API Call
 * @param  {Object} iconObject A map of icon key - value pairs.
 * @return {string}            correct icon CSS class.
 */
export const getIcon = (icon, iconObject) => {
    let iconCss = iconObject.default;

    if (iconObject.hasOwnProperty(icon)) {
        iconCss = iconObject[icon];
    }

    return iconCss;
};

/**
 * Function to get percentage form num.
 * @param  {num} num value to get percent of.
 * @return {num}     value * 100
 */
export const getPercentage = num => {
    return Math.round(num * 100);
};

/**
 * Get an array of temp values from an
 * array of objects.
 * @param  {array} array array of daily
 * weather objects
 * @param  {string} val   Do we want high
 * or low temps?
 * @return {array}       array of temperature values.
 */
export const getTemperatureArray = (array, val) => {
    let fiveDay = array.slice(1, 6);

    if (val === 'low') {
        return fiveDay.map(weatherObj => {
            return weatherObj['temperatureMin'];
        });
    } else {
        return fiveDay.map(weatherObj => {
            return weatherObj['temperatureMax'];
        });
    }
};

/**
 * Getn an array of humidity values from
 * an array of objects
 * @param  {[type]} array array of daily weather objects
 * @return {[type]} array array of humidity data.
 */
export const getHumidityArray = array => {
    let fiveDay = array.slice(1, 6);
    return fiveDay.map(weatherObj => {
        return getPercentage(weatherObj.humidity);
    });
};
