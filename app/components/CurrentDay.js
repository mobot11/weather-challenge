import React from 'react';
import icons from '../config/icons';
import { getIcon, getPercentage } from '../utils/helperFunctions';

/**
 * A component that displays information about the current day's weather.
 * @param  {Object} currentTemp The current days weather info from our API call.
 * @return {JSX}    A JSX component that renders the current day's weather info.
 */
const CurrentDay = ({ location, currentTemp }) => {
    const summary = currentTemp.summary;
    const icon = currentTemp.icon;
    const temp = currentTemp.temperature;
    const apparentTemp = currentTemp.apparentTemperature;

    let humidity = currentTemp.humidity;

    humidity = getPercentage(humidity);
    const iconCSS = getIcon(icon, icons);

    return (
        <div className={`current-temp ${icon}`}>
            <h3>Current Weather: {location}</h3>
            <div className="current-temp-body">
                <div className="icon current-icon">
                    <i className={`wi ${iconCSS}`} />
                </div>
                <div className="current-temp-data">
                    <div>Weather: {summary}</div>
                    <div>Current Temp: {temp}°F</div>
                    <div>Feels like: {`${apparentTemp}`}°F</div>
                    <div>Humidity: {humidity}%</div>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
