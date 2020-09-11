const tasks = require('../../controllers/task.controller.js');

var task = require('express').Router();

task.post("/", tasks.create);

task.get("/", tasks.findAll);

task.post("/getallforlistid", tasks.findAllForListId);

module.exports = task;
