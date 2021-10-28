const express = require('express');
const dangKyCungCapController = require('../../controllers/dangkycungcap.controller');

const router = express.Router();
//dangKyCungCaps/
router.route('/').post(dangKyCungCapController.createDangKyCungCap).get(dangKyCungCapController.getDangKyCungCaps);

router
  .route('/:dangKyCungCapId')
  .get(dangKyCungCapController.getDangKyCungCap)
  .patch(dangKyCungCapController.updateDangKyCungCap)
  .delete(dangKyCungCapController.deleteDangKyCungCap);

module.exports = router;
