var express = require('express');
var router = express.Router();
var warroom = require('../warroom-client')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servers', function (req, res) {
  warroom((error, data) => res.send(data.data))
  //res.send("from the backend")
})

module.exports = router;
