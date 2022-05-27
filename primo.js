function Primo(numteste){
    let numero = numteste;
    let contador = 0;
    for (let i=numero; i>0; i--){
        if (numero%i == 0){
            contador++;
        }
    }
    if (contador > 2){
        return "não é primo";
    }    
    else{
        return "primo";
    }  
}

module.exports = Primo;