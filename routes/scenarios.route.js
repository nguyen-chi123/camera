const express = require('express');
const router = express.Router();

const scenarioController = require('../controllers/scenario.controller');
const { scenarioValidator } = require('../Validators');
const { validateMiddleware } = require('../middlewares');

router.get('/cross-scenario/:station_id',
    scenarioValidator.stationIdSchemaValidator,
    validateMiddleware,
    scenarioController.getCrossScenarioByStationId
);

module.exports = router;