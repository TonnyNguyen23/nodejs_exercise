const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { loaiDichVuService } = require('../services');

const createLoaiDichVu = catchAsync(async (req, res) => {
  const loaiDichVu = await loaiDichVuService.createLoaiDichVu(req.body);
  res.status(httpStatus.CREATED).send(loaiDichVu);
});

const getLoaiDichVus = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await loaiDichVuService.queryLoaiDichVus(filter, options);
  res.send(result);
});

const getLoaiDichVu = catchAsync(async (req, res) => {
  const loaiDichVu = await loaiDichVuService.getLoaiDichVuById(req.params.loaiDichVuId);
  if (!loaiDichVu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'LoaiDichVu not found');
  }
  res.send(user);
});

const updateLoaiDichVu = catchAsync(async (req, res) => {
  const loaiDichVu = await loaiDichVuService.updateLoaiDichVuById(req.params.loaiDichVuId, req.body);
  res.send(loaiDichVu);
});

const deleteLoaiDichVu = catchAsync(async (req, res) => {
  await loaiDichVuService.deleteloaiDichVuById(req.params.loaiDichVuId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLoaiDichVu,
  getLoaiDichVus,
  getLoaiDichVu,
  updateLoaiDichVu,
  deleteLoaiDichVu,
};