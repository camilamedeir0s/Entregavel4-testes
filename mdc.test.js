const MDC = require('./MDC');

test('MDC entre 20 e 10', () => {
    expect(MDC(10, 20)).toBe('O MDC de 10 e de 20 é 10')
})

test('MDC entre 2 e 5', () => {
    expect(MDC(2, 5)).toBe('O MDC de 2 e de 5 é 1')
})