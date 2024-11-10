const express = require('express');
const router = express.Router();
const milkRecordController = require('../controllers/milkRecordController');

router.get('/', milkRecordController.listMilkRecords);
router.post('/add', milkRecordController.addMilkRecord);
router.post('/delete/:id', milkRecordController.deleteMilkRecord); // Add this line

module.exports = router;
