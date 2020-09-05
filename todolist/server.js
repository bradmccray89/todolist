const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const db = require("./models");
const routes = require('./routes');

var corsOptions = {
    origin:"http://localhost:8081",
    origin:"http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/frontend/dist/todolist'));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname))
});

db.sequelize.sync();

const PORT = process.env.PORT || 8080

app.use('/api/', routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
