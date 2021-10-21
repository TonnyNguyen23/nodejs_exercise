const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCompany = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        address: Joi.string().required(),
        born: Joi.date().required()
    }),
};

const getCompany = {
    params: Joi.object().keys({
        companyId: Joi.string().custom(objectId),
    }),
};

const updateCompany = {
    params: Joi.object().keys({
        companyId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteCompany = {
    params: Joi.object().keys({
        companyId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createCompany,
    getCompany,
    updateCompany,
    deleteCompany,
};