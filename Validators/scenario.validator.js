const {checkSchema} = require('express-validator');

const stationIdSchemaValidator = checkSchema({
    station_id: {
        in: 'params', 
        isInt: true,
    }
});

module.exports = {
    stationIdSchemaValidator
}