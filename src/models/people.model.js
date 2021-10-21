const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: Boolean,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    phone: {
      // type: String,
      type: Number,
      required: true,
    },
    address: {
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
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

const people = mongoose.model('people', peopleSchema);

module.exports = people;