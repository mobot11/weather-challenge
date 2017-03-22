const express = require('express');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
const config = require('./app/config/config.js');
const bodyparser = require('body-parser');
const apiKey = config.apiKey;

const app = express();
app.use(express.static(__dirname + '/dist'));

// Decode information from post requests
app.use(bodyparser.urlencoded({ extended: false }));
// parse body of post with JSON
app.use(bodyparser.json());

// A GET Request to set initial data.
app.get('/data', (req, res) => {
    const latitude = config.latitude;
    const longitude = config.longitude;
    const reqUrl = `https://api.darksky.net/forecast/${apiKey}/${longitude},${latitude}`;

    axios
        .get(reqUrl)
        .then(response => {
            let data = response.data;
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
});

app.post('/data', (req, res) => {
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;

    const reqUrl = `https://api.darksky.net/forecast/${apiKey}/${longitude},${latitude}`;

    axios
        .get(reqUrl)
        .then(response => {
            if (response.status === 200) {
                let data = response.data;
                res.json(data);
            } else {
                res.send(
                    'Please enter a vaild longitude and latitude and try again'
                );
            }
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

module.exports = app;
