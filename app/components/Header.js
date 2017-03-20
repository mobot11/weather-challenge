import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<header className='main-header'>
				<h1>React Weather</h1>
				<a href="https://github.com/mobot11/weather-challenge">GitHub</a>
			</header>
		);
	}
}
