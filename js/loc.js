var https = require('https');
require('dotenv').config()

https.get(`${process.env.IPLocation_API_URL}?key=${process.env.IPLocation_API_Key}`, (resp) => {
    var body = '';
    resp.on('data', (data) => {
        body+=data;
    })

    resp.on('end', () => {
        var loc = JSON.parse(body);
        console.log(loc);
    })
});