const express = require('express');
const loaiDichVuController = require('../../controllers/loaiDichVu.controller');

const router = express.Router();
//loaiDichVus/
router.route('/').post(loaiDichVuController.createLoaiDichVu).get(loaiDichVuController.getLoaiDichVus);

router
  .route('/:loaiDichVuId')
  .get(loaiDichVuController.getLoaiDichVu)
  .patch(loaiDichVuController.updateLoaiDichVu)
  .delete(loaiDichVuController.deleteLoaiDichVu);

module.exports = router;
