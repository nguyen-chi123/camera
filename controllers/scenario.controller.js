const scenariosService= require('../services/scenario.service');
const CrossScenario = require('../models/cross_scenario');
const DvrInfo = require('../models/dvr_info');
class ScenarioController {
    async getCrossScenarioByStationId (req, res) {
        try {
            let {station_id} = req.params;
            let query = {}
            if(station_id) query.station_id = station_id
            const blocks = await scenariosService.getCrossScenarioByStationId(query);
            res.json({
                data: blocks
            });
            
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = new ScenarioController;