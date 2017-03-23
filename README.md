## Synopsis

An application to get weather data by entering a longitude and latitude.

The default weather is for seattle (longitude: 47.6062, latitude: -122.3321) but there is an option to enter your own custom longitude and latitude after scrolling to the bottom.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

This application is a coding challenge given to me by L4 Digitial. It uses the Dark Sky weather API to get current weather data for the city of Seattle and displays both the current weather and the expected weather for the next five days. The project is built using ReactJS. Both the icons of the various containers and their linear gradient backgrounds change depending on what the expected weather is for that day. For Seattle, it looks like mostly rain unfortunately.

## Design Decisions

The project is built using ReactJS, babel, webpack and express. I decided to use React because it is a fun and intuitive way to build UIs. 

I decided against using Flux architecture because the app is relatively simple and does not need to manage complex state. Flux would have added to the complexity and taken away from time I was able to spend on design.

I decided to use basic CSS because again the app is relatively small and it was one less dependency I had to manage which allowed me to spend more time actually building the UI.

The application proxies all AJAX requests through an Express server to avoid Cross Origin issues.

I used spark charts to build small charts that allow a user to visualize the high temp, low temp and humidity for the next five days and displays the average of these values below their respective charts.

I used flexbox to display elements because of its ease of use. If this was a production project, I would add vendor prefixes or refactor if I had to support browsers that do not have full flexblox support.

I used Mocha, Chai and Air BnB's Enzyme testing framework to test my UI components, Mocha Chai and Chai-http to test my server.



## Installation

1) Clone the repository at https://github.com/mobot11/weather-challenge
2) run `npm install`
3) run `npm run build`
4) run `npm start`
5) go to http://localhost:5000/

The application can also be seen at https://react-weekly-weather.herokuapp.com/

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Test server API calls: `npm run test-server`

Test UI components: `npm run test-ui`

## Contributors

Dylan Moberg https://github.com/mobot11 with help from the Dark Sky API https://darksky.net

## License

ISC License (ISC)
Copyright 2017 Dylan Moberg

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.