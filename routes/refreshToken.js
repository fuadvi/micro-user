const express = require('express');
const router = express.Router();
const refresTokenHandler = require('./handler/refresh-token');

router.post('/',refresTokenHandler.create);
router.get('/',refresTokenHandler.getToken);

module.exports = router;
