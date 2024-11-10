const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dairy-milk-management'); // Removed deprecated options

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
const farmerRoutes = require('./routes/farmerRoutes');
const milkRecordRoutes = require('./routes/milkRecordRoutes');
const advanceRoutes = require('./routes/advanceRoutes');

app.use('/farmers', farmerRoutes);
app.use('/milk-records', milkRecordRoutes);
app.use('/advances', advanceRoutes);

app.get('/', (req, res) => {
    console.log('Home route accessed');
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});