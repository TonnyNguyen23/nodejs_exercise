const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const mucPhiSchema = mongoose.Schema(
  {
    donGia: {
      type: Number,
      required: true,
    },
    moTa: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
mucPhiSchema.plugin(toJSON);
mucPhiSchema.plugin(paginate);

const mucPhi = mongoose.model('mucPhi', mucPhiSchema);

module.exports = mucPhi;