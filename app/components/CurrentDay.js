import React from 'react';
import icons from '../config/icons';
import { getIcon, getPercentage } from '../utils/helperFunctions';

// A stateless component to display a list of urls
const CurrentDay = ({ currentTemp }) => {
    const summary = currentTemp.summary;
    const icon = currentTemp.icon;
    const temp = currentTemp.temperature;
    const apparentTemp = currentTemp.apparentTemperature;

    let humidity = currentTemp.humidity;

    humidity = getPercentage(humidity);
    console.log(getIcon)
    const iconCSS = getIcon(icon, icons);

    return (
        <div className="current-temp">
            <h3>Current Weather</h3>
            <div className='icon current-icon'><i className={`wi ${iconCSS}`} /></div>
            <div>Weather: {summary}</div>
            <div>Current Temp: {temp}&deg;</div>
            <div>Feels like: {`${apparentTemp}`}&deg;</div>
            <div>Humidity: {humidity}&#37;</div>

        </div>
    );
};

export default CurrentDay;
