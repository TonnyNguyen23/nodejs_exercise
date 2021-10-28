const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { nhaCungCapService } = require('../services');

const createNhaCungCap = catchAsync(async (req, res) => {
  const nhaCungCap = await nhaCungCapService.createNhaCungCap(req.body);
  res.status(httpStatus.CREATED).send(nhaCungCap);
});

const getNhaCungCaps = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await nhaCungCapService.queryNhaCungCaps(filter, options);
  res.send(result);
});

const getNhaCungCap = catchAsync(async (req, res) => {
  const nhaCungCap = await nhaCungCapService.getNhaCungCapById(req.params.nhaCungCapId);
  if (!nhaCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'NhaCungCap not found');
  }
  res.send(user);
});

const updateNhaCungCap = catchAsync(async (req, res) => {
  const nhaCungCap = await nhaCungCapService.updateNhaCungCapById(req.params.nhaCungCapId, req.body);
  res.send(nhaCungCap);
});

const deleteNhaCungCap = catchAsync(async (req, res) => {
  await nhaCungCapService.deleteNhaCungCapById(req.params.nhaCungCapId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createNhaCungCap,
  getNhaCungCaps,
  getNhaCungCap,
  updateNhaCungCap,
  deleteNhaCungCap,
};