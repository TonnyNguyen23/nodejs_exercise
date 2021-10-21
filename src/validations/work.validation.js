const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createWork = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        address: Joi.string().required(),
        born: Joi.date().required()
    }),
};

const getWork = {
    params: Joi.object().keys({
        workId: Joi.string().custom(objectId),
    }),
};

const updateWork = {
    params: Joi.object().keys({
        workId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteWork = {
    params: Joi.object().keys({
        workId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createWork,
    getWork,
    updateWork,
    deleteWork,
};