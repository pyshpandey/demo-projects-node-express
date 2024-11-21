const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
const customerRoutes = require('./routes/customerRoutes');

mongoose.connect('mongodb://localhost:27017/banking-system')
    .then(() => {
        const app = express();
        app.use(express.json());

        app.use('/api/account', accountRoutes);
        app.use('/api/customer', customerRoutes);

        app.listen(5000, () => {
            console.log('Server listening on Port: 5000');
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB: ', error);
    });
