const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountId: { type: Number, required: true, unique: true },
    accountHolder: { type: String, required: true },
    accountType: { type: String, required: true },
    balance: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }
});

module.exports = mongoose.model('Account', accountSchema);