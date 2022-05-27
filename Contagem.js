function Contagem(qtd_notas, lista){
    let qt_notas = qtd_notas;
    let nota;
    let contador = 0;
    let i = 0;
    
    while (i < qt_notas) {
        nota = lista[i];
    
        if (nota >= 50) {
        contador = contador + 1;
        }
        
        i = i + 1;
    }
    
    return "Número de alunos que passaram no exame: " + contador;
}

module.exports = Contagem;