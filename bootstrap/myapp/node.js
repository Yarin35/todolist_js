const express = require('express');
const app = express();
const port = 3000;
let date = new Date();

app.get('/', (req, res) => {
    res.send('<h1>Hello world !</h1>');
})

app.get('/name/:name', (req, res) => {
    const name = String(req.params.name);
    res.send(`<h1>Hello ${name}</h1>\n`);
})

app.get('/date', (req, res) => {
    res.send(`date is ${date}\n`);
})

app.use('/name/:name', (req, res, next) => {
    const name = String(req.params.name);
    console.log(`Time:  hello ${name}`, Date.now());
    next();
});

app.listen(port, () => {
    console.log(`Example app listening http://localhost:${port}`);
})
