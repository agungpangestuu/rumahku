var express = require('express');
var router = express.Router();
const Controller = require('../controller.userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', Controller)

router.post('/signup', Controller)

module.exports = router;
