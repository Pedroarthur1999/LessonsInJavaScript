//Encontrando elementos em um vetor

const array = [1, 5, 4, 2, 6, 4, 8, 9, 10]

console.log(array.indexOf(11));

//Encontrando com mais de um elemento dentro do vetor, o ultimo


console.log(array.lastIndexOf(4));

//Retornando true ou false

console.log(array.includes(-2));

//Encontrando em tipos por referencia

const dados = [

    {id: 1, nome: 'Bianca'},
    {id: 2, nome:'Ana'}
]

const valor = dados.find((valor) => {
    return valor.nome==='Bia'})

console.log(valor);