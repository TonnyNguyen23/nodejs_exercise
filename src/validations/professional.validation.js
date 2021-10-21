const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProfessional = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        address: Joi.string().required(),
        born: Joi.date().required()
    }),
};

const getProfessional = {
    params: Joi.object().keys({
        professionalId: Joi.string().custom(objectId),
    }),
};

const updateProfessional = {
    params: Joi.object().keys({
        professionalId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteProfessional = {
    params: Joi.object().keys({
        professionalId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createProfessional,
    getProfessional,
    updateProfessional,
    deleteProfessional,
};