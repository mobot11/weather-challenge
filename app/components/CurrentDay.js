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
    const iconCSS = getIcon(icon, icons);

    return (
        <div className={`current-temp ${icon}`}>
            <h3>Current Weather</h3>
            <div className="current-temp-body">
                <div className="icon current-icon">
                    <i className={`wi ${iconCSS}`} />
                </div>
                <div className="current-temp-data">
                    <div>Weather: {summary}</div>
                    <div>Current Temp: {temp}°</div>
                    <div>Feels like: {`${apparentTemp}`}°</div>
                    <div>Humidity: {humidity}%</div>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
