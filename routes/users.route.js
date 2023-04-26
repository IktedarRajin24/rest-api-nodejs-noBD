const { getHome, getUsers, createUsers, updateUsers, deleteUsers } = require('../controllers/users.controller');

const route = require('express').Router();

route.get("/", getHome)

route.get("/users", getUsers)

route.post("/users", createUsers)

route.put("/users/:id", updateUsers)

route.delete("/users/:id", deleteUsers)

module.exports = route;