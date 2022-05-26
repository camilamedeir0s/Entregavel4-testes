const primo = require('./primo');

test('numero 5 é primo', () => {
    expect(primo(5)).toBe('primo')
})

test('numero 10 não é primo', () => {
    expect(primo(10)).toBe('não é primo')
})