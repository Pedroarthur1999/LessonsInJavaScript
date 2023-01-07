

let endereco = {
        rua: 'José bento ramos',
        cidade:'Cuité',
        cep:58175000
    }
    
function exibirEndereco(endereco) {

    for (let props in endereco) {
        
        console.log(`${props}:${endereco[props]}`);
    
}
}
exibirEndereco(endereco)