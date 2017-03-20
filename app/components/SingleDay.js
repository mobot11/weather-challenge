import React from 'react';

// A stateless component to display a list of urls
const SingleDay = ({ dailyTemps }) => {
    const tempList = dailyTemps.map((singleDay, key, counter=0) => {
    	if (counter = 4) {
    		
    	}
        const high = singleDay.temperatureMax;
        const low = singleDay.temperatureMin;
        const icon = singleDay.icon;
        const humidity = singleDay.humidity;
        const summary = singleDay.summary;

        console.log(high, low, icon, humidity, summary);

        return (
            <ul>
                <li>{high}</li>
                <li>{low}</li>
                <li>{icon}</li>
                <li>{humidity}</li>
                <li>{summary}</li>
            </ul>
        );
    });

    return <div>{tempList}</div>;
};

export default SingleDay;
