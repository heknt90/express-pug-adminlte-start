var express = require('express');
var router = express.Router();
const goodsData = require("./data/goods.json");

/* GET goods list json */
router.get('/goods', function(req, res, next) {
  res.json(goodsData);
});

module.exports = router;
