const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const donhangSchema = mongoose.Schema(
  {
    makh: {
      type: String,
      required: true,
      trim: true,
    },
    ngaydathang: {
      type: String,
    },
    trangthai: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
donhangSchema.plugin(toJSON);
donhangSchema.plugin(paginate);

/**
 * @typedef Donhang
 */
const Donhang = mongoose.model('donhang', donhangSchema);

module.exports = Donhang;
