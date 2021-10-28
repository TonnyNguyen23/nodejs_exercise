const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createLoaiDichVu = {
    body: Joi.object().keys({
        tenDichVu: Joi.string().required(),
        
    }),
};

const getLoaiDichVu = {
    params: Joi.object().keys({
        loaiDichVuId: Joi.string().custom(objectId),
    }),
};

const updateLoaiDichVu = {
    params: Joi.object().keys({
        loaiDichVuId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteLoaiDichVu = {
    params: Joi.object().keys({
        loaiDichVuId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createLoaiDichVu,
    getLoaiDichVu,
    updateLoaiDichVu,
    deleteLoaiDichVu,
};