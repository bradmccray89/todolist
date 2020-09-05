const routes = require('express').Router();
const list = require('./list');
const task = require('./task');

routes.use('/list', list);
routes.use('/task', task);

routes.get('/', (req, res) => {
    res.status(200).json({ message: "Connected!" });
})

module.exports = routes;