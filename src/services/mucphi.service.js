const httpStatus = require('http-status');
const { mucPhi } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a mucPhi
 * @param {Object} mucPhiBody
 * @returns {Promise<mucPhi>}
 */
const createMucPhi = async (mucPhiBody) => {
  return mucPhi.create(mucPhiBody);
};

/**
 * Query for mucPhis
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMucPhis = async (filter, options) => {
  const mucPhis = await mucPhi.paginate(filter, options);
  return mucPhis;
};

/**
 * Get mucPhi by id
 * @param {ObjectId} id
 * @returns {Promise<mucPhi>}
 */
const getMucPhiById = async (id) => {
  return mucPhi.findById(id);
};

/**
 * Update mucPhi by id
 * @param {ObjectId} mucPhiId
 * @param {Object} updateBody
 * @returns {Promise<mucPhi>}
 */

const updateMucPhiById = async (mucPhiId, updateBody) => {
  const mucPhi = await getMucPhiById(mucPhiId);
  if (!mucPhi) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Muc Phi not found');
  }
  Object.assign(mucPhi, updateBody);
  await mucPhi.save();
  return mucPhi;
};

/**
 * Delete mucPhi by id
 * @param {ObjectId} mucPhiId
 * @returns {Promise<mucPhi>}
 */
const deleteMucPhiById = async (mucPhiId) => {
  const mucPhi = await getMucPhiById(mucPhiId);
  if (!mucPhi) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Muc Phi not found');
  }
  await mucPhi.remove();
  return mucPhi;
};

module.exports = {
  createMucPhi,
  queryMucPhis,
  getMucPhiById,
  updateMucPhiById,
  deleteMucPhiById,
};