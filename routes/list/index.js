const lists = require('../../controllers/list.controller.js');

var list = require('express').Router();

list.post("/", lists.create);

list.get("/", lists.findAll);

module.exports = list