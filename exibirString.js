//Criar um método para ler propriedades de um objeto e exibir somente aqueles que forem strings

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Morgan',
    personagem: 'Thor',
}

function exibirTipoString(filme) {
    for (props in filme) {
        if (typeof (filme[props]) == 'string') {
            console.log(props + ' ' + filme[props]);
        }
    }
}
exibirTipoString(filme)