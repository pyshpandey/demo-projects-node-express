const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    accounts: [{type:mongoose.Schema.Types.ObjectId, ref: 'Account'}]
});

module.exports = mongoose.model('Customer', customerSchema);