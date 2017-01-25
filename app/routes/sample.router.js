const router = require('express').Router();
const sampleController = require('../controllers/sample.controller');

router.post('/send', sampleController.send);

module.exports = router;