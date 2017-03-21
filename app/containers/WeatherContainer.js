import React, { Component } from 'react';
import axios from 'axios';
import SingleDay from '../components/SingleDay';
import CurrentDay from '../components/CurrentDay';
import Chart from '../components/Chart';
import Footer from '../components/Footer';
import {
    getTemperatureArray,
    getHumidityArray,
} from '../utils/helperFunctions';

/**
 *A container component to render the body of our weather application
 */
export default class WeatherContainer extends Component {
    /**
     * Create our base state
     * @param {mixed} props props passed down through the component.
     */
    constructor(props) {
        super(props);

        this.state = {};
    }
    /**
     * Call a function that sets state after
     * we know the component has mounted.
     */
    componentDidMount() {
        this.getWeather();
    }
    /**
     * An API call to Dark Sky that will set state in the application.
     */
    getWeather() {
        // const apiKey = config.apiKey;
        const reqUrl = `/yolo`;
        axios
            .get(reqUrl)
            .then(response => {
                this.setState({
                    weeklyWeather: response.data.daily,
                    currentWeather: response.data.currently,
                });
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    currentTemp() {
        const currentWeather = this.state.currentWeather;
        if (!currentWeather) return;

        return (
            <div className="current-temp-container">
                <CurrentDay currentTemp={currentWeather} />
            </div>
        );
    }

    dailyTemps() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        return (
            <div>
                <SingleDay dailyTemps={weeklyWeather} />
            </div>
        );
    }

    highTempChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getTemperatureArray(weeklyWeather.data);

        return (
            <Chart
                data={data}
                units="°F"
                value="High Temperature"
                color="orange"
            />
        );
    }

    lowTempChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getTemperatureArray(weeklyWeather.data, 'low');

        return (
            <Chart
                data={data}
                units="°F"
                value="Low Temperature"
                color="blue"
            />
        );
    }

    humidityChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getHumidityArray(weeklyWeather.data);

        return (
            <Chart
                data={data}
                units="%"
                value="Humidity"
                color="violet"
            />
        );
    }

    getFooter() {
        const weeklyWeather = this.state.weeklyWeather;
        if (!weeklyWeather) return;

        return <Footer />;
    }
    /**
     * Render weather UI
     * @return {JSX} the body of the weather application
     */
    render() {
        return (
            <div>
                {this.currentTemp()}
                {this.dailyTemps()}
                <div className="chart-container">
                    {this.highTempChart()}
                    {this.lowTempChart()}
                    {this.humidityChart()}
                </div>
                {this.getFooter()}
            </div>
        );
    }
}
