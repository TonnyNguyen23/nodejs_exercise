const httpStatus = require('http-status');
const { work } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a work
 * @param {Object} workBody
 * @returns {Promise<work>}
 */
const createWork = async (workBody) => {
  return work.create(workBody);
};

/**
 * Query for works
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWorks = async (filter, options) => {
  const works = await work.paginate(filter, options);
  return works;
};

/**
 * Get work by id
 * @param {ObjectId} id
 * @returns {Promise<work>}
 */
const getWorkById = async (id) => {
  return work.findById(id);
};

/**
 * Update work by id
 * @param {ObjectId} workId
 * @param {Object} updateBody
 * @returns {Promise<work>}
 */

const updateWorkById = async (workId, updateBody) => {
  const work = await getworkById(workId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  Object.assign(work, updateBody);
  await work.save();
  return work;
};

/**
 * Delete work by id
 * @param {ObjectId} workId
 * @returns {Promise<work>}
 */
const deleteWorkById = async (workId) => {
  const work = await getworkById(workId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found');
  }
  await work.remove();
  return work;
};

module.exports = {
  createWork,
  queryWorks,
  getWorkById,
  updateWorkById,
  deleteWorkById,
};