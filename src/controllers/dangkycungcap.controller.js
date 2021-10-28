const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { dangKyCungCapService } = require('../services');

const createDangKyCungCap = catchAsync(async (req, res) => {
  const dangKyCungCap = await dangKyCungCapService.createDangKyCungCap(req.body);
  res.status(httpStatus.CREATED).send(dangKyCungCap);
});

const getDangKyCungCaps = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await dangKyCungCapService.queryDangKyCungCaps(filter, options);
  res.send(result);
});

const getDangKyCungCap = catchAsync(async (req, res) => {
  const dangKyCungCap = await dangKyCungCapService.getDangKyCungCapById(req.params.dangKyCungCapId);
  if (!dangKyCungCap) {
    throw new ApiError(httpStatus.NOT_FOUND, 'dangKyCungCap not found');
  }
  res.send(user);
});

const updateDangKyCungCap = catchAsync(async (req, res) => {
  const dangKyCungCap = await dangKyCungCapService.updateDangKyCungCapById(req.params.dangKyCungCapId, req.body);
  res.send(dangKyCungCap);
});

const deleteDangKyCungCap = catchAsync(async (req, res) => {
  await dangKyCungCapService.deleteDangKyCungCapById(req.params.dangKyCungCapId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDangKyCungCap,
  getDangKyCungCaps,
  getDangKyCungCap,
  updateDangKyCungCap,
  deleteDangKyCungCap,
};