const { v4 : uuidv4 } = require('uuid');

const users = [
    {
        id : uuidv4(),
        name : "John",
        email : "john@gmail.com"
    },
    {
        id : uuidv4(),
        name : "Kevin",
        email : "kevin@gmail.com"
    },
    {
        id : uuidv4(),
        name : "Paul",
        email : "paul@gmail.com"
    }
]

module.exports = users;