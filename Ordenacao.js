function Ordenacao(qt_termos, lista){
    let qt_valores = qt_termos;
    let valor_recebido;
    let vetor = [];
    for(let i = 0; i < qt_valores; i++){
        valor_recebido = lista[i];
        vetor.push(valor_recebido);
    }

    let resultado = quickSort(vetor, 0, vetor.length - 1);

    function quickSort(vetor, esquerda, direita){
    let i = esquerda;
    let j = direita;
    let meio = Math.floor((i + j)/2);
    
    while(i <= j){
        while(vetor[i] < vetor[meio]){
        i++;
        }
        
        while(vetor[j] > vetor[meio]){
        j--;
        }
        
        if(i <= j){
        let temp = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = temp;
        i++;
        j--;
        }
    }
    
    let index = i;
    
    if(index-1 > esquerda){
        quickSort(vetor, esquerda, index-1);    
    }
    
    if(index < direita){
        quickSort(vetor, index, direita);
    }
    return vetor;
    }

    vetor = [];
    return resultado;

}

module.exports = Ordenacao;