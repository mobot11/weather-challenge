import React, { Component } from 'react';

import WeatherContainer from '../containers/WeatherContainer';
import Header from './Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <WeatherContainer />
            </div>
        );
    }
}
