const mongoose = require('mongoose');

const milkRecordSchema = new mongoose.Schema({
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    date: { type: Date, default: Date.now },
    quantity: { type: Number, required: true },
    temperature: { type: Number, required: true },
    fatContent: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('MilkRecord', milkRecordSchema);