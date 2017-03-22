import React, { Component } from 'react';

import WeatherContainer from '../containers/WeatherContainer';
import Header from './Header';

export default class App extends Component {
    /**
	 * Render the components of our application.
	 * @return {JSX} The header and container of our app.
	 */
    render() {
        return (
            <div>
                <Header />
                <WeatherContainer />
            </div>
        );
    }
}
