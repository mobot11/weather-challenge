import React from 'react';
import icons from '../config/icons';
import { getIcon, getPercentage } from '../utils/helperFunctions.js';

// A stateless component to display a list of urls
const SingleDay = ({ dailyTemps }) => {
    const weeklySummary = dailyTemps.summary;

    const tempArray = dailyTemps.data;
    const fiveDayTemps = tempArray.slice(1, 6);

    let tempList = fiveDayTemps.map((singleDay, key) => {
        const high = singleDay.temperatureMax;
        const low = singleDay.temperatureMin;
        const summary = singleDay.summary;
        let icon = singleDay.icon;
        let humidity = singleDay.humidity;

        humidity = getPercentage(humidity);
        const iconCSS = getIcon(icon, icons);

        return (
            <div key={key}>
                <div className={`daily-temp ${icon}`} >
                    <h3>Day {++key}</h3>
                    <div className="icon daily-icon">
                        <i className={`wi ${iconCSS}`} />
                    </div>
                    <div>Weather: {summary}</div>
                    <div>High: {high}°</div>
                    <div>Low: {`${low}`}°</div>
                    <div>Humidity: {humidity}%</div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="weekly-summary-container">
                <div className="weekly-summary">
                    <h4>Five Day Forecast</h4>
                    <div>{weeklySummary}</div>
                </div>
            </div>
            <div className="daily-temp-container">
                {tempList}
            </div>
        </div>
    );
};

export default SingleDay;
