const Joi = require("joi");

/** create OrderDetails */
const createOrderDetails = {
    body: Joi.object().keys({
        price: Joi.number().required(),
        quantity: Joi.number().required(),
   }),
};

module.exports = {
    createOrderDetails
}