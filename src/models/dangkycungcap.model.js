const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const dangKyCungCapSchema = mongoose.Schema(
  {
    ngayBatDau: {
      type: Date,
      required: true,
    },
    ngayKetThuc: {
      type: Date,
      required: true,
    },
    soLuongXe: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dangKyCungCapSchema.plugin(toJSON);
dangKyCungCapSchema.plugin(paginate);

const dangKyCungCap = mongoose.model('dangKyCungCap', dangKyCungCapSchema);

module.exports = dangKyCungCap;