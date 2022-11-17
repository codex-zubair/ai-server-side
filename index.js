const express = require('express')
const app = express()
const port = 5000
const categories = require('./categories.json');
var cors = require('cors');

// making API access able for all
app.use(cors());



app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/categories/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const category = categories.find(cat=> cat.id === id) || {};
    res.send(category);
})

app.get('/checkout/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const category = categories.find(cat=> cat.id === id) || {};
    res.send(category);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})