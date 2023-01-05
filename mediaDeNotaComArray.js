//Exercicio nota escolar
//Obter a media de um array

//0-59 = F
//60-69 = D
//70-79 = C
//80-89 = B
//90-100 = A

const notas = [60, 60, 60]


function mediaDoAluno(notas) {
    let media = 0
    let res = 0
    let nota = ' '
    for (i = 0; i < notas.length; i++) {
        res += notas[i]
    }
    media = parseInt(res/notas.length);

    if (media < 59) {
        nota = 'F'
    }
    else if (media >= 60 && media < 70) {
        nota = 'D'
    }
    else if (media >= 70 && media < 80) {
        nota = 'C'
    }
    else if (media >= 80 && media < 90) {
        nota = 'B'
    }
    else if (media >= 90 && media <= 100) {
        nota = 'A'
    }
    console.log(`Sua nota é ${nota}`);
}
mediaDoAluno(notas)