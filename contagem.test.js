const Contagem = require('./Contagem');

test('Contagem com 4 termos', () => {
    expect(Contagem(4, [60, 10, 70, 40])).toBe('Número de alunos que passaram no exame: 2')
})

test('Contagem com 6 termos', () => {
    expect(Contagem(6, [60, 10, 70, 40, 90, 100])).toBe('Número de alunos que passaram no exame: 4')
})