
let tasks = [];

function getTasks() {
    // TODO
    return tasks;
}

function addTask(taskData) {
    // return { id: 1, title: taskData.title };
    // Refactoring the code
    const task = { id: tasks.length + 1, ...taskData };
    tasks.push(task);
    return task;
}

module.exports = { tasks, getTasks, addTask };