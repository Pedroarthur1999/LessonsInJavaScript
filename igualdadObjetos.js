
function Caneta(marca, cor, tipo, material) {
    this.marca = marca
    this.cor = cor
    this.tipo = tipo
    this.material = material

}

const caneta1 = new Caneta('bic', 'azul', 'esferografica', 'plastico')
const caneta2 = new Caneta('Faber Castell','preta','pena','aluminio')
const caneta3 = new Caneta('bic','azul','esferografica','plastico')

function exibirObjeto(objeto) {

    for (const props in objeto) {
        console.log(props+': '+objeto[props]);
    } 
}

function comparaCanetas(caneta1, caneta2) {
    return caneta1.marca===caneta2.marca &&
    caneta1.cor===caneta2.cor && caneta1.tipo===caneta2.tipo &&
    caneta1.material===caneta2.material
    
}
function comparaReferencia(caneta1,caneta2){
    return caneta1===caneta2
}
console.log(comparaCanetas(caneta1,caneta3));
console.log(comparaReferencia(caneta1,caneta1));