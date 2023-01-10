
//Usando o metodo join

const array = [1,2,3,4,5,6,7,8,9]


console.log(array.join('.'));


//Separando palavras com o metodo split

const url = 'este é um exemplo de link de url que não pode conter espaços'
const link = url.split(' ')

console.log(link);
console.log(link.join('-'));

const frase = 'Olá mundo'

const resultado = frase.split(' ')

console.log(resultado);