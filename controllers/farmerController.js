const Farmer = require('../models/Farmer');

exports.listFarmers = async (req, res) => {
    const farmers = await Farmer.find();
    res.render('farmers', { farmers });
};

exports.addFarmer = async (req, res) => {
    const { name, contact } = req.body;
    const newFarmer = new Farmer({ name, contact });
    await newFarmer.save();
    res.redirect('/farmers');
};

exports.deleteFarmer = async (req, res) => {
    await Farmer.findByIdAndDelete(req.params.id);
    res.redirect('/farmers');
};
