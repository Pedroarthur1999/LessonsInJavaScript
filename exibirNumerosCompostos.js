//Crie uma função que mostra os numeros compostos

function exibirNumeroComposto(limite) {

    for (let i = 2; i <= limite; i++) {

        if (limite % i == 0) {
            console.log(i);
        }
    }

}
exibirNumeroComposto(20)