const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPeople = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        address: Joi.string().required(),
        born: Joi.date().required()
    }),
};

const getPeople = {
    params: Joi.object().keys({
        peopleId: Joi.string().custom(objectId),
    }),
};

const updatePeople = {
    params: Joi.object().keys({
        peopleId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deletePeople = {
    params: Joi.object().keys({
        peopleId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createPeople,
    getPeople,
    updatePeople,
    deletePeople,
};