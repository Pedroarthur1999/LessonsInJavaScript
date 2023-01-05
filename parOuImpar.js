//Receber uma quantidade de valores e dizer se é par ou impar


function exibirTipo(valor){

    for(i=0; i<=valor; i++){
        i%2 == 0 ?console.log("'par'"+' '+i):console.log('impar'+' '+i);;
    }
}
exibirTipo(21)