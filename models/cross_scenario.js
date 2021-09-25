const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cross_scenario = new Schema({
    delete_flg: {type: Number,  default: 0},
    station_id: {type: Number},
    scenario_name: {type: String},
    dvr_info: [String],
    inbound_info: [String],
    inhouse_info: [String],
    outbound_info: [String],
    create_by: {type: String},
    update_by: {type: String},
    create_date: {type: Date, default: mongoose.now},
    update_date: {type: Date, default: mongoose.now},
    server_no: {type: Number},
    province_id: [Number], 
    station_dest_id: [Number],
});

module.exports = mongoose.model('cross_scenario', cross_scenario);