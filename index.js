const express = require('express');
const shortid = require('shortid');
const server = express();
const PORT = 5000;

server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));
server.use(express.json());

let users = [];

server.post('/api/users', (req, res) => {
    const userInfo = req.body;

    userInfo.id = shortid.generate();

    users.push(userInfo);

    res.status(201).json(userInfo);
});

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

// server.get('/api/users/:id', (req, res) => {
//     res.status(200).json(`users/:id`)
// })