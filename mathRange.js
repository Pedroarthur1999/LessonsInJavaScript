
function gerarRandom(min,max){

    return Math.random(min, max).toFixed(2)*100


}

const numero = (gerarRandom(10,50)) * 100

console.log(numero);