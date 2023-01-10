//Utilizando funções de seta

//Diferença de sintaxe

function teste(testando) {
    return testando
}

//Arrow function (as 2 funcionam)

const arrow = (testando) => {
    return testando
}

//se a arrow function tiver apenas um parametro, pode se omitir os parenteses

testando => {return testando}

//ao remover as chaves da arrow function, vc pode obter um retorno implicito

testando => testando



//Exemplo
// Crie uma arrow function que irá concatenar 2 strings


const concatena = (palavra1, palavra2) => palavra1+' '+palavra2

console.log(arrow('olá'), concatena('pedro','arthur'));
