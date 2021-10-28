const express = require('express');
const mucPhiController = require('../../controllers/mucphi.controller');

const router = express.Router();
//mucPhis/
router.route('/').post(mucPhiController.createMucPhi).get(mucPhiController.getMucPhis);

router
  .route('/:mucPhiId')
  .get(mucPhiController.getMucPhi)
  .patch(mucPhiController.updateMucPhi)
  .delete(mucPhiController.deleteMucPhi);

module.exports = router;
