const httpStatus = require('http-status');
const { loaiDichVu } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a loaiDichVu
 * @param {Object} loaiDichVuBody
 * @returns {Promise<loaiDichVu>}
 */
const createLoaiDichVu = async (loaiDichVuBody) => {
  return loaiDichVu.create(loaiDichVuBody);
};

/**
 * Query for loaiDichVus
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLoaiDichVus = async (filter, options) => {
  const loaiDichVus = await loaiDichVu.paginate(filter, options);
  return loaiDichVus;
};

/**
 * Get loaiDichVu by id
 * @param {ObjectId} id
 * @returns {Promise<loaiDichVu>}
 */
const getLoaiDichVuById = async (id) => {
  return loaiDichVu.findById(id);
};

/**
 * Update loaiDichVu by id
 * @param {ObjectId} loaiDichVuId
 * @param {Object} updateBody
 * @returns {Promise<loaiDichVu>}
 */

const updateLoaiDichVuById = async (loaiDichVuId, updateBody) => {
  const loaiDichVu = await getLoaiDichVuById(loaiDichVuId);
  if (!loaiDichVu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'LoaiDichVu not found');
  }
  Object.assign(loaiDichVu, updateBody);
  await loaiDichVu.save();
  return loaiDichVu;
};

/**
 * Delete loaiDichVu by id
 * @param {ObjectId} loaiDichVuId
 * @returns {Promise<loaiDichVu>}
 */
const deleteLoaiDichVuById = async (loaiDichVuId) => {
  const loaiDichVu = await getLoaiDichVuById(loaiDichVuId);
  if (!loaiDichVu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'LoaiDichVu not found');
  }
  await loaiDichVu.remove();
  return loaiDichVu;
};

module.exports = {
  createLoaiDichVu,
  queryLoaiDichVus,
  getLoaiDichVuById,
  updateLoaiDichVuById,
  deleteLoaiDichVuById,
};