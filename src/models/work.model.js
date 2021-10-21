const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const workSchema = mongoose.Schema(
  {
    dateOfJoin: {
      type: Date,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
workSchema.plugin(toJSON);
workSchema.plugin(paginate);

const work = mongoose.model('work', workSchema);

module.exports = work;