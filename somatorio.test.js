const Somatorio = require('./Somatorio');

test('Somatorio 1', () => {
    expect(Somatorio(5, [1, 2, 3, 4, 10])).toBe("A soma dos 5 números é 20")
})

test('Somatorio 2', () => {
    expect(Somatorio(6, [1, 2, 3, 4, 10, 5])).toBe("A soma dos 6 números é 25")
})