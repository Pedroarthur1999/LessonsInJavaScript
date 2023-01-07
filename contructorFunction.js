

function Notebook(marca,modelo,processador,memoria,bateria,placaDeVideo) {

    this.marca = marca;
    this.modelo = modelo;
    this.processador = processador;
    this.memoria = memoria;
    this.bateria = bateria;
    this.placaDeVideo = placaDeVideo;
    this.ligar = function() {
    console.log("Inicializando");
    }    
}

const notebook = new Notebook('Dell','d1000','Core i5', 8, 10000, 'Rtx2060')

console.log(notebook);
notebook.ligar()