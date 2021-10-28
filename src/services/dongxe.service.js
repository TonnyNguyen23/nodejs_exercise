const httpStatus = require('http-status');
const { dongXe } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a dongXe
 * @param {Object} dongXeBody
 * @returns {Promise<dongXe>}
 */
const createDongXe = async (dongXeBody) => {
  return dongXe.create(dongXeBody);
};

/**
 * Query for dongXes
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryDongXes = async (filter, options) => {
  const dongXes = await dongXe.paginate(filter, options);
  return dongXes;
};

/**
 * Get dongXe by id
 * @param {ObjectId} id
 * @returns {Promise<dongXe>}
 */
const getDongXeById = async (id) => {
  return dongXe.findById(id);
};

/**
 * Update dongXe by id
 * @param {ObjectId} dongXeId
 * @param {Object} updateBody
 * @returns {Promise<dongXe>}
 */

const updateDongXeById = async (dongXeId, updateBody) => {
  const dongXe = await getDongXeById(dongXeId);
  if (!dongXe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Dong xe not found');
  }
  Object.assign(dongXe, updateBody);
  await dongXe.save();
  return dongXe;
};

/**
 * Delete dongXe by id
 * @param {ObjectId} dongXeId
 * @returns {Promise<dongXe>}
 */
const deleteDongXeById = async (dongXeId) => {
  const dongXe = await getDongXeById(dongXeId);
  if (!dongXe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Dong xe not found');
  }
  await dongXe.remove();
  return dongXe;
};

module.exports = {
  createDongXe,
  queryDongXes,
  getDongXeById,
  updateDongXeById,
  deleteDongXeById,
};