const express = require('express');
const router = express.Router();

const { getGoodsService } = require('../../services/goodServices')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-admin', {title: "Main page"});
});

router.get('/goods', function(req, res, next) {
  getGoodsService()
    .then(goods => res.render('admin-goods-list', {
      title: "Goods list",
      goodsList: goods
    }))
})

module.exports = router;
