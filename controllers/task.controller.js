const db = require('../models');
const taskModel = require('../models/task');
const Task = db.Task;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return;
    }

    const task = {
        title: req.body.title,
        description: req.body.description,
        listid: req.body.listid,
    }

    Task.create(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the task."
            });
        });
};

exports.findAll = (req, res) => {
    Task.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tasks."
            });
        });
};

exports.findAllForListId = (req, res) => {
    console.log('req.body', req.body);

    Task.findAll({ where: { listid: req.body.id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving lists."
            });
        });
};
