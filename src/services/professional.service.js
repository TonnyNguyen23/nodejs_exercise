const httpStatus = require('http-status');
const { professional } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a professional
 * @param {Object} professionalBody
 * @returns {Promise<professional>}
 */
const createProfessional = async (professionalBody) => {
  return professional.create(professionalBody);
};

/**
 * Query for professionals
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProfessionals = async (filter, options) => {
  const professionals = await professional.paginate(filter, options);
  return professionals;
};

/**
 * Get professional by id
 * @param {ObjectId} id
 * @returns {Promise<professional>}
 */
const getProfessionalById = async (id) => {
  return professional.findById(id);
};

/**
 * Update professional by id
 * @param {ObjectId} professionalId
 * @param {Object} updateBody
 * @returns {Promise<professional>}
 */

const updateProfessionalById = async (professionalId, updateBody) => {
  const professional = await getProfessionalById(professionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Professional not found');
  }
  Object.assign(professional, updateBody);
  await professional.save();
  return professional;
};

/**
 * Delete professional by id
 * @param {ObjectId} professionalId
 * @returns {Promise<professional>}
 */
const deleteProfessionalById = async (professionalId) => {
  const professional = await getProfessionalById(professionalId);
  if (!professional) {
    throw new ApiError(httpStatus.NOT_FOUND, 'professional not found');
  }
  await professional.remove();
  return professional;
};

module.exports = {
  createProfessional,
  queryProfessionals,
  getProfessionalById,
  updateProfessionalById,
  deleteProfessionalById,
};