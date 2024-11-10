const MilkRecord = require('../models/MilkRecord');
const Farmer = require('../models/Farmer');

exports.listMilkRecords = async (req, res) => {
    const milkRecords = await MilkRecord.find().populate('farmer');
    const farmers = await Farmer.find();
    res.render('milkRecords', { milkRecords, farmers });
};

exports.addMilkRecord = async (req, res) => {
    const { farmer, quantity, temperature, fatContent, price } = req.body;
    const newRecord = new MilkRecord({ farmer, quantity, temperature, fatContent, price });
    await newRecord.save();
    res.redirect('/milk-records');
};

exports.deleteMilkRecord = async (req, res) => {
    await MilkRecord.findByIdAndDelete(req.params.id);
    res.redirect('/milk-records');
};
