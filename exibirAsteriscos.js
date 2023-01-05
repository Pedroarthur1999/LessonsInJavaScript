//Criar uma função que exibe a quantidade de * que aquela linha possui


function exibirAsteriscos(linhas) {

    res = ''

    for (i = 0; i < linhas; i++) {

        res += '*'

        console.log(res);
    }
}
exibirAsteriscos(3)