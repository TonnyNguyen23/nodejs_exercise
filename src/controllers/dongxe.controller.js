const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { dongXeService } = require('../services');

const createDongXe = catchAsync(async (req, res) => {
  const dongXe = await dongXeService.createDongXe(req.body);
  res.status(httpStatus.CREATED).send(dongXe);
});

const getDongXes = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await dongXeService.queryDongXes(filter, options);
  res.send(result);
});

const getDongXe = catchAsync(async (req, res) => {
  const dongXe = await dongXeService.getDongXeById(req.params.dongXeId);
  if (!dongXe) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Dong xe not found');
  }
  res.send(user);
});

const updateDongXe = catchAsync(async (req, res) => {
  const dongXe = await dongXeService.updateDongXeById(req.params.dongXeId, req.body);
  res.send(dongXe);
});

const deleteDongXe = catchAsync(async (req, res) => {
  await dongXeService.deleteDongXeById(req.params.dongXeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDongXe,
  getDongXes,
  getDongXe,
  updateDongXe,
  deleteDongXe,
};