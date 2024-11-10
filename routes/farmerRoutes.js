const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');

router.get('/', farmerController.listFarmers);
router.post('/add', farmerController.addFarmer);
router.post('/delete/:id', farmerController.deleteFarmer); // Add this line

module.exports = router;
