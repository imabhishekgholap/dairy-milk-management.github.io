const mongoose = require('mongoose');

const advanceSchema = new mongoose.Schema({
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    date: { type: Date, default: Date.now },
    amount: { type: Number, required: true }
});

module.exports = mongoose.model('Advance', advanceSchema);