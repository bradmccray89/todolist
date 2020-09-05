const tasks = require('../../controllers/task.controller.js');

var task = require('express').Router();

task.post("/", tasks.create);

task.get("/", tasks.findAll);

module.exports = task;
