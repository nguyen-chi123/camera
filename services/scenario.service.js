const CrossScenario = require('../models/cross_scenario');
const DvrInfo = require('../models/dvr_info');
const ChannelInfo = require('../models/channel_info');
const ChannelService = require('./channel.service');
class scenariosService {
    async getCrossScenarioByStationId (query) {
        try {
            let projection = {
                create_by: 0,
                update_by: 0,
                create_date: 0,
                update_date: 0,
                __v: 0,
                inbound_camera: 0,
                inhouse_camera: 0,
                outbound_camera: 0
            }
            const crossScenario = await CrossScenario.find(query, projection).lean();
            for (const block of crossScenario) {
                block.dvr_info = await DvrInfo.find({ _id: { $in: block.dvr_info } }, {dvr_name: 1}).lean();
                for (const dvr of block.dvr_info) {
                    delete Object.assign(dvr, {['value']: dvr['_id'] })['_id'];
                    delete Object.assign(dvr, {['label']: dvr['dvr_name'] })['dvr_name'];
                }
                block.inbound_info = await ChannelService.getChannelNamesByIds(block.inbound_info)
                block.inhouse_info = await ChannelService.getChannelNamesByIds(block.inhouse_info)
                block.outbound_info = await ChannelService.getChannelNamesByIds(block.outbound_info)
            }
            return crossScenario;
        } catch (error) {
            return error
        }
    }
}

module.exports = new scenariosService;