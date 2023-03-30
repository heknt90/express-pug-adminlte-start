const express = require('express');
const router = express.Router();

const { getGoodsController, createGoodController } = require('./controllers/goodsControllers')

/* GET goods list json */
router.get("/goods", getGoodsController)

/* CREATE new good */
router.post('/goods/new', createGoodController)

module.exports = router;
