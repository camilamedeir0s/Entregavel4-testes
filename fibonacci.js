function Fibonacci(qt_termos){
    let quantidade_termos = qt_termos;
    let x = 0;
    let y = 1;
    let z = 0;
    let resultadoFib = '';
    for(let i = 0; i < quantidade_termos; i++){
        if(i!=quantidade_termos-1){
            resultadoFib = resultadoFib + x + " ";
        }
        else{
            resultadoFib = resultadoFib + x;
        }
        z = x + y;
        x = y;
        y = z;
    }
    return resultadoFib;
}

module.exports = Fibonacci;