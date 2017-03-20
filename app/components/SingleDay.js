import React from 'react';
import icons from '../config/icons';
import { getIcon, getPercentage } from '../utils/helperFunctions.js';

// A stateless component to display a list of urls
const SingleDay = ({ dailyTemps }) => {
    const weeklySummary = dailyTemps.summary;
    const weeklyIcon = dailyTemps.icon;

    const tempArray = dailyTemps.data;
    const fiveDayTemps = tempArray.slice(1, 6);

    let tempList = fiveDayTemps.map((singleDay, key) => {
        const high = singleDay.temperatureMax;
        const low = singleDay.temperatureMin;
        const summary = singleDay.summary;
        let icon = singleDay.icon;
        let humidity = singleDay.humidity;

        humidity = getPercentage(humidity);
        console.log(getIcon);
        const iconCSS = getIcon(icon, icons);

        if (icons.hasOwnProperty(icon)) {
        }

        return (
            <div className="daily-temp">
                <h3>Day {++key}</h3>
                <div className="icon current-icon">
                    <i className={`wi ${iconCSS}`} />
                </div>
                <div>Weather: {summary}</div>
                <div>High: {high}°</div>
                <div>Low: {`${low}`}°</div>
                <div>Humidity: {humidity}%</div>
            </div>
        );
    });

    return <div className="daily-temp-container">{tempList}</div>;
};

export default SingleDay;
