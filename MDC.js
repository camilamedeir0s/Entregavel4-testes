function MDC(num1, num2){
    let numero_1 = num1;
    let numero_2 = num2;
    let valor_MDC = 0;

    for(let i = numero_1; i>0; i--){
        if(numero_1%i == 0 && numero_2%i == 0){
            valor_MDC = i;
            break;
        }
    }
    return 'O MDC de ' + numero_1 + ' e de ' + numero_2 + ' é ' + valor_MDC;
}

module.exports = MDC;