export const getIcon = (icon, iconObject) => {
    let iconCss = iconObject.default;

    if (iconObject.hasOwnProperty(icon)) {
        iconCss = iconObject[icon];
    }

    return iconCss;
};

export const getPercentage = num => {
    return num * 100;
};

export const getTemperatureArray = (array, val = 'high') => {
	let fiveDay = array.slice(1, 6);
    if ((val = 'low')) {
        return fiveDay.map(weatherObj => {
            return weatherObj['temperatureMin'];
        });
    } else {
        return fiveDay.map(weatherObj => {
            return weatherObj['temperatureMax'];
        });
    }
};

export const getHumidityArray = array => {
	let fiveDay = array.slice(1, 6);
    return fiveDay.map(weatherObj => {
        return getPercentage(weatherObj.humidity);
    });
};
