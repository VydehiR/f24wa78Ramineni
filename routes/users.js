const express = require('express');
const router = express.Router();

var value = 0;
var total = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;
  total += value;
  res.send(`Total is ${total}`);
});

module.exports = router;
