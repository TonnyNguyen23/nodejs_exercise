const httpStatus = require('http-status');
const { company } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a company
 * @param {Object} companyBody
 * @returns {Promise<company>}
 */
const createCompany = async (companyBody) => {
  return company.create(companyBody);
};

/**
 * Query for companys
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCompanies = async (filter, options) => {
  const companys = await company.paginate(filter, options);
  return companys;
};

/**
 * Get company by id
 * @param {ObjectId} id
 * @returns {Promise<company>}
 */
const getCompanyById = async (id) => {
  return company.findById(id);
};

/**
 * Update company by id
 * @param {ObjectId} companyId
 * @param {Object} updateBody
 * @returns {Promise<company>}
 */

const updateCompanyById = async (companyId, updateBody) => {
  const company = await getcompanyById(companyId);
  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Company not found');
  }
  Object.assign(company, updateBody);
  await company.save();
  return company;
};

/**
 * Delete company by id
 * @param {ObjectId} companyId
 * @returns {Promise<company>}
 */
const deleteCompanyById = async (companyId) => {
  const company = await getcompanyById(companyId);
  if (!company) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Company not found');
  }
  await company.remove();
  return company;
};

module.exports = {
  createCompany,
  queryCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
};