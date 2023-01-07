//Crie neste exercicio um objeto de postagem de blog que ira conter
// as seguintes propriedades
// titulo 
// mensagem
// autor
// visualizações
// comentarios(autor mensagem)
// estaAoVivo

function Postagem(titulo,mensagem,autor,visualizacoes) {
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.vizualizacoes = visualizacoes
    this.entrou =() => this.vizualizacoes+=1
    this.comentarios = function () {
        console.log(this.autor+': "'+this.mensagem+'"');
    }
    this.estaAoVivo = () => console.log('Iniciando live...');
    
}

let blog1 = new Postagem('carro','O ford fastback está lindo','Lucão', 0)

blog1.estaAoVivo()
blog1.comentarios()
blog1.entrou()
console.log(blog1);
