var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  try {
    res.json('1')
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;
