module.exports = app => {
    const tasks = require('../controllers/task.controller.js');

    var router = require('express').Router();

    router.post("/", tasks.create);

    app.use('/api/tasks', router);
}