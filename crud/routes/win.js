var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Win = require('../models/Win.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Win.find(function (err, win) {
    if (err) return next(err);
    res.json(win);
  });
});

module.exports = router;