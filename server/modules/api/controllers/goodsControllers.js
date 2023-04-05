const { errorHandler } = require('../../../middlewares/errorHandler')
const { getGoodsService, 
        getGoodService, 
        saveGoodsService,
        deleteGoodService } = require("../../../services/goodServices")

// GET json goods list 
function getGoodsController(request, response) {
    getGoodsService()
        .then(goods => response.json({
            status: "success",
            data: goods
        }))
        .catch(errorHandler)
}

// Get json good
function getGoodController(request, response) {
    const { goodId } = request.params
    getGoodService(goodId)
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
    getGoodsService()
        .then(goods => {
            const lastId = goods[goods.length - 1].id
            const data = request.body
            const newGood = {
                name: data.name,
                desc: data.desc,
                price: {
                    current: data['price-current'],
                    full: data["price-full"]
                },
                thumbs: [
                    {url: data.thumb1},
                    {url: data.thumb2},
                ]
            }
            newGood.id = lastId + 1
            goods.push(newGood)
            return saveGoodsService(goods)
        })
        .then(() => response.json({
            status: "success"
        }))
        .catch(errorHandler)
}

function deleteGoodByIdController(request, response) {
    const { goodId } = request.params
    deleteGoodService(parseInt(goodId))
    .then(_ => {
            response.json({
                status: "success"
            })
        })
        .catch(errorHandler)
}

module.exports = {
    getGoodsController,
    getGoodController,
    createGoodController,
    deleteGoodByIdController
}