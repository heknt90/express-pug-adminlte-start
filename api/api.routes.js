const express = require('express');
const fs = require('fs')
const path = require('path')
const router = express.Router();
const goodsDataFilePath = path.resolve(__dirname, 'data/goods.json')

/* GET goods list json */
router.get('/goods', async function(req, res, next) {
  const json = await fs.readFileSync(goodsDataFilePath, {
    encoding: 'utf-8',
    flag: 'r'
  })
  const goodsData = await JSON.parse(json)
  res.json(goodsData);
});

/* CREATE new good */
router.post('/goods/new', async function(req, res, next) {
  const json = await fs.readFileSync(goodsDataFilePath, 'utf-8')
  const goodsData = await JSON.parse(json)
  const lastId = goodsData[goodsData.length - 1].id
  // const newGood = req.body
  // Example object
  const newGood = {
    name: 'Book',
    desc: 'Read and silence',
    price: { current: 4500, full: 6300 },
    thumbs: [ {
      url: "https://wordassociations.net/image/600x/svg_to_png/dniezby_Generic_Book.png"
    }, 
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKezZZvTrxdBr6Rvxobo1GuVGqL-KecHWGg&usqp=CAU"
    }]
  }
  newGood.id = lastId + 1
  goodsData.push(newGood)
  const newJSON = await JSON.stringify(goodsData)
  await fs.writeFileSync(goodsDataFilePath, newJSON)
  // console.log(req.body)
  res.status('ok')
})

module.exports = router;
