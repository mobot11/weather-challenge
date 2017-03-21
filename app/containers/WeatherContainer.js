import React, { Component } from 'react';
import axios from 'axios';
import SingleDay from '../components/SingleDay';
import CurrentDay from '../components/CurrentDay';
import Chart from '../components/Chart';
import Input from '../components/Input';
import Footer from '../components/Footer';
import {
    getTemperatureArray,
    getHumidityArray,
} from '../utils/helperFunctions';
import config from '../config/config';

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

        this.state = {
            longitude: config.longitude,
            latitude: config.latitude,
        };
    }
    /**
     * Call a function that sets state after
     * we know the component has mounted.
     */
    componentDidMount() {
        this.getWeather('get');
    }
    /**
     * An API call to Dark Sky that will set state in the application.
     */
    getWeather(method) {
        const reqUrl = `/data`;
        if (method === 'get') {
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

        if (method === 'post') {
            const longitude = this.state.longitude;
            const latitude = this.state.latitude;
            const data = { longitude, latitude };

            const config = {
                method: 'post',
                url: reqUrl,
                data,
            };

            const request = axios(config);
            request
                .then(response => {
                    this.setState({
                        weeklyWeather: response.data.daily,
                        currentWeather: response.data.currently,
                    });
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    /**
     * Uncomment to see when state is updating for debugging.
     */
    // componentDidUpdate() {
    //     console.log(this.state);
    // }
    /**
     * A method that returns our current weather component.
     * @return {JSX} Current Day Component
     */
    currentTemp() {
        const currentWeather = this.state.currentWeather;
        if (!currentWeather) return;

        return (
            <div className="current-temp-container">
                <CurrentDay currentTemp={currentWeather} />
            </div>
        );
    }

    /**
     * Returns a JSX component with data about the five day forecast.
     * @return {JSX} A container with daily weather information
     * @todo refactor method names as they aren't very good.
     */
    dailyTemps() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        return (
            <div>
                <SingleDay dailyTemps={weeklyWeather} />
            </div>
        );
    }

    /**
     * Method that returns a spark chart of high temp data.
     * @return {JSX} Spark chart component with high temps.
     */
    highTempChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getTemperatureArray(weeklyWeather.data, 'high');

        return (
            <Chart
                data={data}
                units="°F"
                value="High Temperature"
                color="orange"
            />
        );
    }

    /**
     * Method that returns a spark chart of low temp data.
     * @return {JSX} Spark chart component with low temps.
     */
    lowTempChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getTemperatureArray(weeklyWeather.data, 'low');

        return (
            <Chart
                data={data}
                units="°F"
                value="Low Temperature"
                color="#3E80ED"
            />
        );
    }

    /**
     * Method that returns a spark chart of humidity data.
     * @return {JSX} Humidity spark chart.
     */
    humidityChart() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        let data = getHumidityArray(weeklyWeather.data);

        return <Chart data={data} units="%" value="Humidity" color="violet" />;
    }

    getInputForm() {
        const weeklyWeather = this.state.weeklyWeather;

        if (!weeklyWeather) return;

        return (
            <form
                onSubmit={this.onFormSubmit.bind(this)}
                action=""
                className="input-group"
            >
                <input
                    placeholder="Enter a longitude"
                    className="form-control"
                    defaultValue={this.state.longitude}
                    onChange={this.onLongitudeChange.bind(this)}
                />
                <input
                    placeholder="Enter a longitude"
                    className="form-control"
                    defaultValue={this.state.latitude}
                    onChange={this.onLatitudeChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
    onLongitudeChange(e) {
        this.setState({
            longitude: e.target.value,
        });
    }

    onLatitudeChange(e) {
        this.setState({
            latitude: e.target.value,
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.getWeather('post');
    }

    /**
     * Get our global footer component
     * @return {JSX} footer component
     *
     * it is returned here because we don't want it loading
     * until the rest of the page data has loaded.
     */
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
                {this.getInputForm()}
                {this.getFooter()}
            </div>
        );
    }
}
