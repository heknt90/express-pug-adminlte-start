const fs = require('fs/promises')
const path = require('path')

const { errorHandler } = require('../../../middlewares/errorHandler')

const goodsFilePath = path.resolve(__dirname, '../data/goods.json')

// GET json goods list 
function getGoodsController(request, response) {
    fs.readFile(goodsFilePath, "utf-8")
        .then(data => JSON.parse(data))
        .then(goods => response.json({
            status: "success",
            data: goods
        }))
        .catch(errorHandler)
}

// Get json good
function getGoodController(request, response) {
    const { goodId } = request.params
    fs.readFile(goodsFilePath, "utf-8")
        .then(data => JSON.parse(data))
        .then(goods => {
            return goods.find(good => good.id === parseInt(goodId))
        })
        .then(good => {
            if (good) {
                response.json({
                    status: "success",
                    data: good
                })
            } else {
                response.status(404).json({
                    status: "error",
                    message: "This is ID dosnt exist"
                })
            }

        })
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
        .then(newJSON => fs.writeFile(goodsFilePath, newJSON, "utf-8"))
        .then(() => response.json({
            status: "success"
        }))
        .catch(errorHandler)
}

module.exports = {
    getGoodsController,
    getGoodController,
    createGoodController
}