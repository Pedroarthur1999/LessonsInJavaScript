//Adicionar elementos em um array


const numeros = [1, 3, 5, 2, 1, 0]

//Adicionando no inicio

numeros.unshift(0)
console.log(numeros);

//Adicionando no meio

numeros.splice(2, 0, 2)
numeros.splice(4, 0, 4)

console.log(numeros);

//Adicionando ao final

numeros.push(8)

console.log(numeros);