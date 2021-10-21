const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { workService } = require('../services');

const createWork = catchAsync(async (req, res) => {
  const work = await workService.createWork(req.body);
  res.status(httpStatus.CREATED).send(work);
});

const getWorks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await workService.queryWorks(filter, options);
  res.send(result);
});

const getWork = catchAsync(async (req, res) => {
  const work = await workService.getWorkById(req.params.workId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateWork = catchAsync(async (req, res) => {
  const work = await workService.updateWorkById(req.params.workId, req.body);
  res.send(work);
});

const deleteWork = catchAsync(async (req, res) => {
  await workService.deleteWorkById(req.params.workId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWork,
  getWorks,
  getWork,
  updateWork,
  deleteWork,
};