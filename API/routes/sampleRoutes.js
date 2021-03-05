const express = require('express');
const router = express.Router();
const controller= require('../controllers/sample');
router.get('/getData',controller.getData)
router.post('/showUserData',controller.showUserData)


module.exports = router;