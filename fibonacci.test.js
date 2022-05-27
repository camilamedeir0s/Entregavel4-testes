const Fibonacci = require('./Fibonacci');

test('fibonacci 1', () => {
    expect(Fibonacci(3)).toBe('0 1 1')
})

test('fibonacci 2', () => {
    expect(Fibonacci(5)).toBe('0 1 1 2 3')
})