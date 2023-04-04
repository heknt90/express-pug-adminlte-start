const express = require('express');
const router = express.Router();
const { getGoodService } = require('../services/goodServices');

/* Home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: "Goods list"
  });
});

/* New good page */
router.get('/good/new', function(req, res) {
  
  res.render('newgood', {
    title: "New good creation form"
  })
}) 

/* Good view page */
router.get('/good/:goodId', function(req, res) {
  const { goodId } = req.params
  getGoodService(goodId)
    .then(good => {
      res.render("good", {
        title: good.name + " | Good",
        good
      })
    })
});

module.exports = router;
