const express = require('express');
const { createCustomer, getCustomerDetails } = require('../services/customerService');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const customer = await createCustomer(req.body);
        res.status(201).json(customer)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:email', async (req, res) => {
    try {
        const customer = await getCustomerDetails(req.params.email);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.status(200).json(customer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;