const express = require('express');
const router = express.Router();
const advanceController = require('../controllers/advanceController');

router.get('/', advanceController.listAdvances);
router.post('/add', advanceController.addAdvance);
router.post('/delete/:id', advanceController.deleteAdvance); // Add this line

module.exports = router;
