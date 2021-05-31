const router = require('express').Router();
const auth = require('../middleware/auth');
const userControl = require('../controllers/userControl');

router.get('/search', auth, userControl.searchUser);
router.get('/user/:id', auth, userControl.getUser);

module.exports = router;
