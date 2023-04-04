const express = require('express');
const router = express.Router();

const { 
    getGoodsController, 
    getGoodController,
    createGoodController,
    deleteGoodByIdController } = require('./controllers/goodsControllers')
    
/* GET goods list json */
router.get("/goods", getGoodsController)

// GET good json
router.get("/goods/:goodId", getGoodController)

/* CREATE new good */
router.post('/goods/new', createGoodController)

router.delete("/goods/:goodId/delete", deleteGoodByIdController)

module.exports = router;
