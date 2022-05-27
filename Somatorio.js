function Somatorio(qt_numeros, lista){
    let qt_num = qt_numeros;
    let numero;
    let soma = 0;
    let i = 0;

    while (i < qt_num) {
        numero = lista[i];
        soma = soma + numero;
        i = i + 1;
    }

    return "A soma dos " + qt_num + " números é " + soma;
}

module.exports = Somatorio;