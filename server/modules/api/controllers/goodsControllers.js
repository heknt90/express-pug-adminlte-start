const fs = require('fs/promises')
const path = require('path')

const { errorHandler } = require('../../../middlewares/errorHandler')

const goodsFilePath = path.resolve(__dirname, '../data/goods.json')

// GET json goods list 
function getGoodsController(request, response) {
    fs.readFile(goodsFilePath, "utf-8")
    .then(async data => await JSON.parse(data))
    .then(goods => response.json({
        status: "success",
        data: goods
    }))
    .catch(errorHandler)
}

// CREATE new good
function createGoodController(request, response) {
    fs.readFile(goodsFilePath, "utf-8")
        .then(data => JSON.parse(data))
        .then(goods => {
            const lastId = goods[goods.length - 1].id
            const newGood = req.body
            newGood.id = lastId + 1
            goods.push(newGood)
            return JSON.stringify(goods)
        })
        .then(newJSON => fs.writeFile(goodsFilePath, "utf-8"))
        .then(() => response.json({
            status: "success"
        }))
        .catch(errorHandler)
}

module.exports = {
    getGoodsController,
    createGoodController
}