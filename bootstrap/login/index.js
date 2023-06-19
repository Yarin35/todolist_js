const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`username: ${username}\npassword: ${password}`);
});

app.listen(port, () => {
    console.log(`connected to address : http://localhost:${port}`);
});