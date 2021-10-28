const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createNhaCungCap = {
    body: Joi.object().keys({
        tenNhaCC: Joi.string().required(),
        diaChi: Joi.string().required(),
        soDT: Joi.string().required(),
        maSoThue: Joi.number().required(),
    }),
};

const getNhaCungCap = {
    params: Joi.object().keys({
        nhaCungCapId: Joi.string().custom(objectId),
    }),
};

const updateNhaCungCap = {
    params: Joi.object().keys({
        nhaCungCapId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteNhaCungCap = {
    params: Joi.object().keys({
        nhaCungCapId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createNhaCungCap,
    getNhaCungCap,
    updateNhaCungCap,
    deleteNhaCungCap,
};