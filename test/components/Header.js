import React, { Component } from 'react';

/**
 * Render our Header JSX component
 * Just arbitrary HTML really.
 */

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <h1>React Weather</h1>
                <a href="https://github.com/mobot11/weather-challenge">
                    GitHub
                </a>
            </header>
        );
    }
}


module.exports = Header;
