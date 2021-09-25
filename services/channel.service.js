const DvrInfo = require('../models/dvr_info');
const ChannelInfo = require('../models/channel_info');

class ChannelService {
    async getChannelNamesByIds (arrChannelId) {
        const channelNames = await ChannelInfo.find({ _id: { $in: arrChannelId } }, {dvr_id: 1, channel_name: 1}).lean();
        for (const channelName of channelNames) {
            let dvr_name = await DvrInfo.findOne({ _id: channelName.dvr_id }, { dvr_name: 1 }).lean();
            channelName.channel_name = dvr_name.dvr_name + '.' + channelName.channel_name;
            delete channelName.dvr_id;
            delete Object.assign(channelName, {['value']: channelName['_id'] })['_id'];
            delete Object.assign(channelName, {['lable']: channelName['channel_name'] })['channel_name'];
        }
        return channelNames;
    }
}

module.exports = new ChannelService;