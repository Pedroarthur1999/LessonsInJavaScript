const mouse = {
    marca: 'razer',
    dpi: 6400,
    qtBotoes: 5,
    cor: "preto"
}
delete mouse.cor
//assign == atribuição

const novoMouse = Object.assign({
    cor: 'branco'
},
    mouse)

// Tambem pode ser feito assim

const mouseDois = {...mouse}

console.log(mouseDois);
console.log(novoMouse);