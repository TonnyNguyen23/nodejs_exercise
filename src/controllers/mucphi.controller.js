const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { mucPhiService } = require('../services');

const createMucPhi = catchAsync(async (req, res) => {
  const mucPhi = await mucPhiService.createMucPhi(req.body);
  res.status(httpStatus.CREATED).send(mucPhi);
});

const getMucPhis = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await mucPhiService.queryMucPhis(filter, options);
  res.send(result);
});

const getMucPhi = catchAsync(async (req, res) => {
  const mucPhi = await mucPhiService.getMucPhiById(req.params.mucPhiId);
  if (!mucPhi) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Muc Phi not found');
  }
  res.send(user);
});

const updateMucPhi = catchAsync(async (req, res) => {
  const mucPhi = await mucPhiService.updateMucPhiById(req.params.mucPhiId, req.body);
  res.send(mucPhi);
});

const deleteMucPhi = catchAsync(async (req, res) => {
  await mucPhiService.deleteMucPhiById(req.params.mucPhiId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMucPhi,
  getMucPhis,
  getMucPhi,
  updateMucPhi,
  deleteMucPhi,
};