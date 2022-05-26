const fibonacci = require('./fibonacci');

test('fibonacci 1', () => {
    expect(fibonacci(3)).toBe('0 1 1')
})

test('fibonacci 2', () => {
    expect(fibonacci(5)).toBe('0 1 1 2 3')
})