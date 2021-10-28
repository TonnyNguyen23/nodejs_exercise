const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createDangKyCungCap = {
    body: Joi.object().keys({
        ngayBatDau: Joi.date().required(),
        ngayKetThuc: Joi.date().required(),
        soLuongXe: Joi.number().required()
    }),
};

const getDangKyCungCap = {
    params: Joi.object().keys({
        dangKyCungCapId: Joi.string().custom(objectId),
    }),
};

const updateDangKyCungCap = {
    params: Joi.object().keys({
        dangKyCungCapId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteDangKyCungCap = {
    params: Joi.object().keys({
        dangKyCungCapId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createDangKyCungCap,
    getDangKyCungCap,
    updateDangKyCungCap,
    deleteDangKyCungCap,
};