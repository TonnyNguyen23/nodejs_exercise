const httpStatus = require('http-status');
const { dangKyCungCap } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a dangKyCungCap
 * @param {Object} dangKyCungCapBody
 * @returns {Promise<dangKyCungCap>}
 */
const createDangKyCungCap = async (dangKyCungCapBody) => {
  return dangKyCungCap.create(dangKyCungCapBody);
};

/**
 * Query for dangKyCungCaps
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDangKyCungCaps = async (filter, options) => {
  const dangKyCungCaps = await dangKyCungCap.paginate(filter, options);
  return dangKyCungCaps;
};

/**
 * Get dangKyCungCap by id
 * @param {ObjectId} id
 * @returns {Promise<dangKyCungCap>}
 */
const getDangKyCungCapById = async (id) => {
  return dangKyCungCap.findById(id);
};

/**
 * Update dangKyCungCap by id
 * @param {ObjectId} dangKyCungCapId
 * @param {Object} updateBody
 * @returns {Promise<dangKyCungCap>}
 */

const updateDangKyCungCapById = async (dangKyCungCapId, updateBody) => {
  const dangKyCungCap = await getDangKyCungCapById(dangKyCungCapId);
  if (!dangKyCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DangKyCungCap not found');
  }
  Object.assign(dangKyCungCap, updateBody);
  await dangKyCungCap.save();
  return dangKyCungCap;
};

/**
 * Delete dangKyCungCap by id
 * @param {ObjectId} dangKyCungCapId
 * @returns {Promise<dangKyCungCap>}
 */
const deleteDangKyCungCapById = async (dangKyCungCapId) => {
  const dangKyCungCap = await getDangKyCungCapById(dangKyCungCapId);
  if (!dangKyCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'DangKyCungCap not found');
  }
  await dangKyCungCap.remove();
  return dangKyCungCap;
};

module.exports = {
  createDangKyCungCap,
  queryDangKyCungCaps,
  getDangKyCungCapById,
  updateDangKyCungCapById,
  deleteDangKyCungCapById,
};