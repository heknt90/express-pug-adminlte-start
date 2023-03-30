const express = require('express');
const router = express.Router();
const axios = require('axios') 

const baseUrl = "http://localhost:3000"

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: "Goods list"
  });
});

/* GET home page. */
router.get('/good/:goodId', function(req, res) {
  const { goodId } = req.params
  axios.get(`${baseUrl}/api/goods/${goodId}`)
    .then(response => {
      res.render('good', {
        title: response.data.data.name + " | Good",
        good: response.data.data
    })
  })
});

module.exports = router;
