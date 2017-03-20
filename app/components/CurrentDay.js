import React from 'react';
import icons from '../config/icons';

// A stateless component to display a list of urls
const CurrentDay = ({ currentTemp }) => {
    const summary = currentTemp.summary;
    const icon = currentTemp.icon;
    const temp = currentTemp.temperature;
    const apparentTemp = currentTemp.apparentTemperature;
    let humidity = currentTemp.humidity;
    humidity = humidity * 100;

    let iconCSS = icons.default;
    if (icons.hasOwnProperty(icon)) {
        iconCSS = icons[icon];
    }

    return (
        <div className="current-temp">
            <h3>Current Weather</h3>
            <div className='icon current-icon'><i className={`wi ${iconCSS}`} /></div>
            <div>Weather: {summary}</div>
            <div>Current Temp: {temp}&deg;</div>
            <div>Feels like: {`${apparentTemp}`}&deg;</div>
            <div>Humidity: {humidity}</div>

        </div>
    );
};

export default CurrentDay;
