const Advance = require('../models/Advance');
const Farmer = require('../models/Farmer');

exports.listAdvances = async (req, res) => {
    const advances = await Advance.find().populate('farmer');
    const farmers = await Farmer.find();
    res.render('advances', { advances, farmers });
};

exports.addAdvance = async (req, res) => {
    const { farmer, amount } = req.body;
    const newAdvance = new Advance({ farmer, amount });
    await newAdvance.save();
    res.redirect('/advances');
};

exports.deleteAdvance = async (req, res) => {
    await Advance.findByIdAndDelete(req.params.id);
    res.redirect('/advances');
};
