const express = require('express');
const router = express.Router();
const trackController = require('../api/controllers/tracks');
router.get('/tracks', trackController.getAll);
router.post('/', trackController.create);
router.get('/:trackId', trackController.getById);
router.put('/:trackId', trackController.updateById);
router.delete('/:trackId', trackController.deleteById);
module.exports = router;