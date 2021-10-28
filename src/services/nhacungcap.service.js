const httpStatus = require('http-status');
const { nhaCungCap } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a nhaCungCap
 * @param {Object} nhaCungCapBody
 * @returns {Promise<nhaCungCap>}
 */
const createNhaCungCap = async (nhaCungCapBody) => {
  return nhaCungCap.create(nhaCungCapBody);
};

/**
 * Query for nhaCungCaps
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryNhaCungCaps = async (filter, options) => {
  const nhaCungCaps = await nhaCungCap.paginate(filter, options);
  return nhaCungCaps;
};

/**
 * Get nhaCungCap by id
 * @param {ObjectId} id
 * @returns {Promise<nhaCungCap>}
 */
const getNhaCungCapById = async (id) => {
  return nhaCungCap.findById(id);
};

/**
 * Update nhaCungCap by id
 * @param {ObjectId} nhaCungCapId
 * @param {Object} updateBody
 * @returns {Promise<nhaCungCap>}
 */

const updateNhaCungCapById = async (nhaCungCapId, updateBody) => {
  const nhaCungCap = await getNhaCungCapById(nhaCungCapId);
  if (!nhaCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'NhaCungCap not found');
  }
  Object.assign(nhaCungCap, updateBody);
  await nhaCungCap.save();
  return nhaCungCap;
};

/**
 * Delete nhaCungCap by id
 * @param {ObjectId} nhaCungCapId
 * @returns {Promise<nhaCungCap>}
 */
const deleteNhaCungCapById = async (nhaCungCapId) => {
  const nhaCungCap = await getnhaCungCapById(nhaCungCapId);
  if (!nhaCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'NhaCungCap not found');
  }
  await nhaCungCap.remove();
  return nhaCungCap;
};

module.exports = {
  createNhaCungCap,
  queryNhaCungCaps,
  getNhaCungCapById,
  updateNhaCungCapById,
  deleteNhaCungCapById,
};