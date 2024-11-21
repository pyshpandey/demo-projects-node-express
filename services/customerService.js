const Customer = require('../models/Customer');

const createCustomer = async(customerData) => {
    const customer = new Customer(customerData);
    return await customer.save();
};

const getCustomerDetails = async(email) => {
    return await Customer.findOne({email});
};


module.exports = {
    createCustomer, getCustomerDetails
}

