const mouse = {
    marca: 'razer',
    dpi: 6400,
    qtBotoes: 5,
    cor: "preto"
}

//Criando um metodo
function alterarDpi(velocidade) {
    mouse.dpi = velocidade
}
//Deletando atributos

delete mouse.cor

//Chamando o metodo

alterarDpi(5000)

console.log(mouse);