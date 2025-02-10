const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    warehouse: {
        type: String,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
    movementHistory: [{
        date: {
            type: Date,
            default: Date.now,
        },
        change: {
            type: Number,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
    }],
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;