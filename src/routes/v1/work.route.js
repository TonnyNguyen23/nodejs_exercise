const express = require('express');
const workController = require('../../controllers/work.controller');

const router = express.Router();
//works/
router.route('/').post(workController.createWork).get(workController.getWorks);

router
  .route('/:workId')
  .get(workController.getWork)
  .patch(workController.updateWork)
  .delete(workController.deleteWork);

module.exports = router;
