const fs = require('fs/promises')
const path = require('path')

const goodsFilePath = path.resolve(__dirname, "../models/data/goods.json")

async function getGoodsService() {
    return JSON.parse(await fs.readFile(goodsFilePath, "utf-8"))  
}

async function getGoodService(goodId) {
    const goods = await getGoodsService()
    return goods.find(good => good.id === parseInt(goodId))
}

async function saveGoodsService(goods) {
    const json = await JSON.stringify(goods)
    return fs.writeFile(goodsFilePath, json, "utf-8")
}

async function deleteGoodService(goodId) {
    const goods = await getGoodsService()
    const newGoods = goods.filter(el => el.id !== goodId)
    return saveGoodsService(newGoods)
}

module.exports = { 
    getGoodsService, 
    getGoodService, 
    saveGoodsService,
    deleteGoodService
}