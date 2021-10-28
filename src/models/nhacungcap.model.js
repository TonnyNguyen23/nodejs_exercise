const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const nhaCungCapSchema = mongoose.Schema(
  {
    tenNhaCC: {
      type: String,
      required: true,
      trim: true,
    },
    diaChi: {
      type: String,
      required: true,
    },
    soDT: {
      type: String,
      required: true,
    },
    maSoThue: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
nhaCungCapSchema.plugin(toJSON);
nhaCungCapSchema.plugin(paginate);

const nhaCungCap = mongoose.model('nhaCungCap', nhaCungCapSchema);

module.exports = nhaCungCap;