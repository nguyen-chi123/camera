const express = require('express');
const db = require('./configs/db');
db.connect();
const scenariosRoute = require('./routes/scenarios.route');
const app = express();

app.use(express.json());
app.use('/scenarios', scenariosRoute);

app.listen('3000');
module.exports = app;
