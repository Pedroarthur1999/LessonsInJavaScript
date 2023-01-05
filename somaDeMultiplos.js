//criar função somar que retorna A
//soma de todos os multiplos de 3 e 5

function somarMultiplos(limite){

    let res = 0;

    for(i=0;i<=limite;i++){
        if(i%3==0){
            res+=i
        }
        if(i%5==0){
            res+=i
        }
    }
    return res
}
const resultado = somarMultiplos(2)

console.log(resultado);