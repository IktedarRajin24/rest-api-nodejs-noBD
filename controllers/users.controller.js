let users = require('../models/users.model')
const path = require('path');
const { v4: uuidv4 } = require('uuid');

exports.getHome = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"))
    // res.sendFile(__dirname + "/../views/index.html")
}

exports.getUsers = (req, res)=>{
    res.status(200).json({users})
}

exports.createUsers = (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const newUser = {
        id : uuidv4(),
        username,
        email

    }
    users.push(newUser);
    res.status(200).json({users})
}

exports.updateUsers = (req, res)=>{
    const id = req.params.id;
    const {name, email} = req.body;
    users.filter((user)=> user.id === id).map((selectedUser)=>{
        selectedUser.name = name;
        selectedUser.email = email;
    })
    res.status(200).json({ users })
}

exports.deleteUsers = (req, res)=>{
    const id = req.params.id;
    users = users.filter((user)=>user.id !== id);
    res.status(200).json({users})
}