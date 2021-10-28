const express = require('express');
const dongXeController = require('../../controllers/dongxe.controller');

const router = express.Router();
//dongXes/
router.route('/').post(dongXeController.createDongXe).get(dongXeController.getDongXes);

router
  .route('/:dongXeId')
  .get(dongXeController.getDongXe)
  .patch(dongXeController.updateDongXe)
  .delete(dongXeController.deleteDongXe);

module.exports = router;
