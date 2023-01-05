verificarVelocidade(233)
function verificarVelocidade(velocidade){
    if(velocidade<=70){
        console.log('Ok');
    }    
    if(velocidade>70){
      let pontos = 0
      pontos = (velocidade-70)/5
      console.log(`Você tem ${Math.floor(pontos)} pontos`);
      if(pontos>12){
        console.log('Sua carteira está suspensa');
      }
    }

}
