
const { getTasks } = require('../src/utils');

// SYNTAX: test(description, callback);
// SYNTAX: it(description, callback);

test('should return empty array initially', ()=> {
    // expect(actualresult).toBe(expectedResult);
    expect(getTasks()).toEqual([]);
});

