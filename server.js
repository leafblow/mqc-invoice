
(
    function() {
        "use strict";

const express = require('express')
const port = 5050
const app = require('express')();
const server = require('http').createServer(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

// const envFunctions = require('./lib/envFunctions');
// const backLog = require('./lib/backlogFunctions');

// const env = require('dotenv');
// console.log(env.config());

// console.log(process.env)

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname,  "extraResources")));
app.get('/api', (req, res) => res.send('Hello World!'))


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

module.exports = { app, server};
}()
);