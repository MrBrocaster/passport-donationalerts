const passport = require('passport');
const daStrategy = require('../lib/index');

test('strategy exist', () => {
    expect(typeof daStrategy).toBe('function');
});
