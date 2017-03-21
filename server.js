const express = require('express');
const PORT = 5000;
const axios = require('axios');
const config = require('./app/config/config.js');

const app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/data', (req, res) => {
    const latitude = config.latitude;
    const longitude = config.longitude;
    const apiKey = config.apiKey;
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

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
