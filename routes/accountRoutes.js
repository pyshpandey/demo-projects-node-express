const express = require('express');
const { getAccounts, createAccount, deposit, withdraw, getAccountDetails } = require('../services/accountService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const accountList = await getAccounts();
        res.status(200).json(accountList);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/create', async (req, res) => {
    try {
        const account = await createAccount(req.body);
        res.status(201).json(account);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/deposit', async (req, res) => {
    try {
        const { accountId, amount } = req.body;
        const account = await deposit(accountId, amount);
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/withdraw', async (req, res) => {
    try {
        const { accountId, amount } = req.body;
        const account = await withdraw(accountId, amount);
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:accountId', async (req, res) => {
    try {
        const account = await getAccountDetails(req.params.accountId);
        if (!account) return res.status(404).json({ error: 'Account not found' });
        res.status(200).json(account);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;