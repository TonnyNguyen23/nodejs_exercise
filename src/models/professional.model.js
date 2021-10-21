const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const professionalSchema = mongoose.Schema(
  {
    // district: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'District',
    //   trim: true,
    // },
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
professionalSchema.plugin(toJSON);
professionalSchema.plugin(paginate);

const professional = mongoose.model('professional', professionalSchema);

module.exports = professional;