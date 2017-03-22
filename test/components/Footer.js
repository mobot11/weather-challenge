import React, { Component } from 'react';

/**
 * Render the footer component.
 * Just arbitrary HTML really.
 */
class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <img
                    src="images/poweredby-oneline-darkbackground.png"
                    alt="Powred by Dark Sky API"
                    width="300px"
                />
            </footer>
        );
    }
}

module.exports = Footer;
