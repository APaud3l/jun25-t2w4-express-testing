
const express = require('express');
const { getTasks, addTask } = require('./utils');

const app = express();

app.use(express.json());

app.get('/tasks', (request, response) => {
    response.json({ tasks: getTasks() });
} );

app.post('/tasks', (request, response) => {
    const task = addTask(request.body);
    response.status(201).json(task);
});

module.exports = app;