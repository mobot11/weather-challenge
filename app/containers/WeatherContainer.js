import React, { Component } from 'react';
import axios from 'axios';
import SingleDay from '../components/SingleDay';
import CurrentDay from '../components/CurrentDay';

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

        this.state = { weeklyWeather: [] };
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
        console.log(53, currentWeather);

        return (
            <div className='current-temp-container'>
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
    /**
     * Render weather UI
     * @return {JSX} the body of the weather application
     */
    render() {
        if (!this.state.weeklyWeather) {
            return;
        }

        return (
            <div>
                {this.currentTemp()}
            </div>
        );
    }
}
