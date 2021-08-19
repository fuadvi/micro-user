const express = require('express');
const router = express.Router();
const userHendler = require('./handler/users')

router.post('/register', userHendler.register);
router.post('/login', userHendler.login);
router.post('/logout', userHendler.logout);
router.put('/:id', userHendler.update);
router.get('/:id', userHendler.getUser);
router.get('/', userHendler.getUsers);

module.exports = router;
