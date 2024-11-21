const Account = require('../models/Account');

const createAccount = async (accountData) => {
    const account = new Account(accountData);
    return await account.save();
};

const deposit = async (accountId, amount) => {
    const account = await Account.findOne({ accountId });
    if (!account) throw new Error('Account not found');
    account.balance += amount;
    return await account.save();
};

const withdraw = async (accountId, amount) => {
    const account = await Account.findOne({ accountId });
    if (!account) throw new Error('Account not found');
    if (account.balance < amount) throw new Error('Insufficient balance');
    account.balance -= amount;
    return await account.save();
};

const getAccountDetails = async (accountId) => {
    return await Account.findOne({});
};

module.exports = {
    createAccount, deposit, withdraw, getAccountDetails
};