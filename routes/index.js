var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    message: "Hello World!",
    layout: 'layout.njk',
    title: 'Nunjucks example'
  }
  res.render('index.njk', data);
});

module.exports = router;
