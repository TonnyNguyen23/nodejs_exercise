const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createDongXe = {
    body: Joi.object().keys({
        hangXe: Joi.string().required(),
        soChoNgoi: Joi.number().required(),
    }),
};

const getDongXe = {
    params: Joi.object().keys({
        dongXeId: Joi.string().custom(objectId),
    }),
};

const updateDongXe = {
    params: Joi.object().keys({
        dongXeId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteDongXe = {
    params: Joi.object().keys({
        dongXeId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createDongXe,
    getDongXe,
    updateDongXe,
    deleteDongXe,
};