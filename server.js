const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    todos.push(req.body);
    res.status(201).send();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
