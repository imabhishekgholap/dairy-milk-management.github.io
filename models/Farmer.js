const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    totalMilk: { type: Number, default: 0 },
    totalAdvance: { type: Number, default: 0 }
});

module.exports = mongoose.model('Farmer', farmerSchema);