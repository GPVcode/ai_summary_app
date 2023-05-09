const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const summarySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('aiSummary', summarySchema);