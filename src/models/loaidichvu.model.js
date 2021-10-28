const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const loaiDichVuSchema = mongoose.Schema(
  {
    tenDichVu: {
      type: String,
      required: true,
      trim: true,
    },
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
loaiDichVuSchema.plugin(toJSON);
loaiDichVuSchema.plugin(paginate);

const loaiDichVu = mongoose.model('loaiDichVu', loaiDichVuSchema);

module.exports = loaiDichVu;