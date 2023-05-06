const httpStatus = require('http-status');
const { Donhang } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a donhang
 * @param {Object} donhangBody
 * @returns {Promise<Donhang>}
 */
const createDonhang = async (donhangBody) => {
  return Donhang.create(donhangBody);
};

/**
 * Query for donhangs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDonhangs = async (filter, options) => {
  const donhangs = await Donhang.paginate(filter, options);
  return donhangs;
};

/**
 * Get donhang by id
 * @param {ObjectId} id
 * @returns {Promise<Donhang>}
 */
const getDonhangById = async (id) => {
  return Donhang.findById(id);
};

/**
 * Get donhang by email
 * @param {string} email
 * @returns {Promise<Donhang>}
 */
const getDonhangByEmail = async (email) => {
  return Donhang.findOne({ email });
};

/**
 * Update donhang by id
 * @param {ObjectId} donhangId
 * @param {Object} updateBody
 * @returns {Promise<Donhang>}
 */
const updateDonhangById = async (donhangId, updateBody) => {
  const donhang = await getDonhangById(donhangId);
  Object.assign(donhang, updateBody);
  await donhang.save();
  return donhang;
};

/**
 * Delete donhang by id
 * @param {ObjectId} donhangId
 * @returns {Promise<Donhang>}
 */
const deleteDonhangById = async (donhangId) => {
  const donhang = await getDonhangById(donhangId);
  if (!donhang) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Donhang not found');
  }
  await donhang.remove();
  return donhang;
};

module.exports = {
  createDonhang,
  queryDonhangs,
  getDonhangById,
  getDonhangByEmail,
  updateDonhangById,
  deleteDonhangById,
};
