
let tasks = [];

function getTasks() {
    // TODO
    return tasks;
}

function addTask(taskData) {
    return { id: 1, title: taskData.title };
}

module.exports = { getTasks, addTask };