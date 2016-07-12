var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Win = require('../models/Win.js');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
  Win.find(function (err, win) {
    if (err) return next(err);
    res.json(win);
  });
});

router.get('/:id', function(req, res, next) {
  Win.findById(req.params.id, function (err, win) {
    if (err) return next(err);
    res.json(win);
  });
});

module.exports = router;