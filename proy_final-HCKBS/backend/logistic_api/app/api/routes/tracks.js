const express = require('express');
const router = express.Router();
const trackController = require('../app/api/controllers/tracks');
router.get('/', trackController.getAll);
router.post('/', trackController.create);
router.get('/:trackId', trackController.getById);
router.put('/:trackId', trackController.updateById);
router.delete('/:trackId', trackController.deleteById);
module.exports = router;