// Crie um array de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre
// faixas, tooltip, minimo, maximo 


let faixas = [
    {tooltip:'Até 700 reais', min: 0, max:700},
    {tooltip:'Até 900 reais', min: 701, max:900},
    {tooltip:'Até 1200 reais', min: 901, max:1200},
]

//utilizando function factory

function comparaValores(tooltip,min,max) {
    return{
    tooltip,
    min,
    max
    }
}
console.log(faixas);
let faixa1 = [
    comparaValores('Até 700',0,700),
    comparaValores('Até 1000',700,1000),
]

console.log(faixa1);

//utilizando constructor Function

function Precos(tooltip, min, max){
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}

let faixa2 = new Precos('até 1200',900,1200)
console.log(faixa2);