
const data = new Date()
let ano = data.getFullYear()
let endereco = {
        rua: 'José bento ramos',
        cidade:'Cuité',
        cep:58175000,
        estado:'paraiba',
        ano: ano
        
    }
    
function exibirEndereco(endereco) {

    for (let props in endereco) {
        
        console.log(`${props}:${endereco[props]}`);
    
}
}
exibirEndereco(endereco)