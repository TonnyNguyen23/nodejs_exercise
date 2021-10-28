const express = require('express');
const nhaCungCapController = require('../../controllers/nhacungcap.controller');

const router = express.Router();
//nhaCungCaps/
router.route('/').post(nhaCungCapController.createNhaCungCap).get(nhaCungCapController.getNhaCungCaps);

router
  .route('/:nhaCungCapId')
  .get(nhaCungCapController.getNhaCungCap)
  .patch(nhaCungCapController.updateNhaCungCap)
  .delete(nhaCungCapController.deleteNhaCungCap);

module.exports = router;
