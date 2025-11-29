
const request = require('supertest');

const { tasks } = require('../src/utils');
const app = require('../src/index');

beforeEach(() => {
    tasks.length = 0;
})

// SYNTAX: describe(description, callback);
describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const taskData = { title: 'Buy chocolate'};

        const response = await request(app)
        .post('/tasks')
        .send(taskData)
        .expect(201);

        expect(response.body.title).toBe('Buy chocolate');
        expect(response.body.id).toBe(1);
    });
});

describe('GET /tasks', () => {
    it('should get tasks after the POST', async() => {
        // Add to the tasks
        await request(app)
        .post('/tasks')
        .send({ title: 'Walk Dog' })
        .expect(201);

        // Get the list of tasks
        const response = await request(app)
        .get('/tasks')
        .expect(200);

        expect(response.body.tasks.length).toBeGreaterThan(0);
        expect(response.body.tasks[0].title).toBe('Walk Dog');
    });
});