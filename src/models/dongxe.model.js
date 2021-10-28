const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const dongXeSchema = mongoose.Schema(
  {
    hangXe: {
      type: String,
      required: true,
      trim: true,
    },
    soChoNgoi: {
      type: Number,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dongXeSchema.plugin(toJSON);
dongXeSchema.plugin(paginate);

const dongXe = mongoose.model('dongXe', dongXeSchema);

module.exports = dongXe;