const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createMucPhi = {
    body: Joi.object().keys({
        donGia: Joi.number().required(),
        moTa: Joi.string().required(),
    }),
};

const getMucPhi = {
    params: Joi.object().keys({
        mucPhiId: Joi.string().custom(objectId),
    }),
};

const updateMucPhi = {
    params: Joi.object().keys({
        mucPhiId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            name: Joi.string(),
            address: Joi.string(),
            born: Joi.date()
        })
        .min(1),
};

const deleteMucPhi = {
    params: Joi.object().keys({
        mucPhiId: Joi.string().custom(objectId),
    }),
};

module.exports = {
    createMucPhi,
    getMucPhi,
    updateMucPhi,
    deleteMucPhi,
};