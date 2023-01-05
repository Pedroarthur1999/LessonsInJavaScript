function contruirNotebook(marca, modelo, processador, memoria, bateria, placaDeVideo) {

    return{
        marca:marca,
        modelo,
        processador,
        memoria,
        bateria,
        placaDeVideo
    }
    
}

const notebook1 = contruirNotebook('Asus', 'zenbook5000series', 'Intel core i5',8, 5000, 'gtx1050')

console.log(notebook1);