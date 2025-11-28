
const { getTasks, addTask } = require('../src/utils');

// SYNTAX: test(description, callback);
// SYNTAX: it(description, callback);

test('should return empty array initially', ()=> {
    // expect(actualresult).toBe(expectedResult);
    expect(getTasks()).toEqual([]);
});

it('should add the first task', () => {
    tasks = []; //Reset
    const taskData = { title: 'Buy milk' };
    const result = addTask(taskData);

    expect(result.title).toBe('Buy milk');
    expect(result.id).toBe(1);
});