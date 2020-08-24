const db = require('../models');
const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return;
    }

    const task = {
        title: req.body.name,
        description: req.body.description,
        completingid: 1,
        requestingid: 2
    }

    Task.create(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the task."
            })
        })
}