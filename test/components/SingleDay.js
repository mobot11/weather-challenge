import React from 'react';


/**
 * Renders a container that holds all of the weather data about
 * a single day in the dataset.
 * @param  {Object} dailyTemps Object containing all of the data we need
 * to output five days of weather information.
 * @return {JSX} our five days of weather data to display in a JSX component.
 */
const SingleDay = ({dailyTemps}) => {
    // This info lies on the outer daily object and must be grabbed now.
    const weeklySummary = dailyTemps.summary;

    const tempArray = dailyTemps.data;
    // We only want five days of data, not eight.
    const fiveDayTemps = tempArray;

    // For each peice of data in our dataset, create a container
    // with the following information
    let tempList = fiveDayTemps.map((singleDay, key) => {
        const high = singleDay.temperatureMax;
        const low = singleDay.temperatureMin;
        const summary = singleDay.summary;
        let icon = singleDay.icon;
        let humidity = singleDay.humidity;

        humidity = humidity;
        const iconCSS = icon;

        // Return a container for each day.
        return (
            <div className="daily-temp-single" key={key}>
                <div className={`daily-temp ${icon}`}>
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
    // Return our component with every day represented.
    return (
        <div>
            <div className="weekly-summary-container">
                <div className="weekly-summary">
                    <h4>Five Day Forecast</h4>
                    <div>{weeklySummary}</div>
                </div>
            </div>
            <div className="daily-temp-flex">
                <div className="daily-temp-container">
                    {tempList}
                </div>
            </div>
        </div>
    );
};

module.exports = SingleDay;
