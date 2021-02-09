// total de pedras na posição inicial
let totalPedras = 32;

// variáveis que irão capturar a posição do mouse considerando os quadrados do tabuleiro
let colunaOrigem;
let linhaOrigem;

let colunaDestino;
let linhaDestino;


function mousePressed(){
  // função do p5 que é accionada ao utilizar o clique do mouse
  /*
    - verifica se o programa não está executando a função de solucionar o jogo para não haver interferência;
    - calcula a posição do mouse considerando os quadrados do tabuleiro
    - move a pedra que foi arrastada até a posição onde o usuário solta o clique.
  */
  colunaOrigem = Math.floor(mouseX / tamanhoPosicao);
  linhaOrigem = Math.floor(mouseY / tamanhoPosicao);
  
  if(linhaOrigem == 8 && colunaOrigem < 2) {
    solucionaRestaUm();
  }
}


function mouseReleased() {
  // função do p5 que é accionada ao soltar o clique do mouse
  /*
    - verifica se o programa não está executando a função de solucionar o jogo para não haver interferência;
    - calcula a posição do mouse considerando os quadrados do tabuleiro
    - move a pedra que foi arrastada até a posição onde o usuário solta o clique.
  */
  if(!solucionando) {
    colunaDestino = Math.floor(mouseX / tamanhoPosicao);
    linhaDestino = Math.floor(mouseY / tamanhoPosicao);

    movePedra(colunaOrigem, linhaOrigem, colunaDestino, linhaDestino)
  }
}


function movePedra(origemX, origemY, destinoX, destinoY) {
  //altera a posição das pedras
  /* 
    - executa a função de validação como condição;
    - inverte os valores das posições de origem e destino;
    - altera o valor da posição intermediária para 0 (posição vazia);
    - reduz o total de pedras restantes em 1 unidade;
    - imprime o registro do movimento no console.
  */
  if(movimentoValido(origemX, origemY, destinoX, destinoY)) {
    
    tabuleiro[origemX][origemY] = 0;
    tabuleiro[destinoX][destinoY] = 1;
    
    if(origemY == destinoY) {
      tabuleiro[(origemX+destinoX) / 2][origemY] = 0;
    }
    else { tabuleiro[origemX][(origemY+destinoY) / 2] = 0; }
    
    totalPedras -= 1;
    
    console.log("Pedra movida da posição [" + origemX + ", "+ origemY + "] até [" + destinoX + ", "+destinoY+ "].");
  }
  
}


function movimentoValido(origemX, origemY, destinoX, destinoY) {
  // executa três testes para verificar se o movimento segue as regras do jogo.
/* 
  - a posição destino tem valor 0 na matriz (posição vazia);
  - a distância entre a posição origem e a posição destino é de duas posições;
  - a posição localizada entre a posição origem e a posição destino tem valor 1 na matriz (posição ocupada);
  DESAFIO: por que não foi necessário verificar se a posição origem tem valor 1?  
*/
  return tabuleiro[destinoX][destinoY] == 0
  && (Math.abs(origemX - destinoX) == 2 || Math.abs(origemY - destinoY) == 2) 
  && tabuleiro[(origemX + destinoX)/2][origemY] == 1
  && tabuleiro[origemX][(origemY + destinoY)/2] == 1;
}



function venceuJogo() {
  // verifica se restou uma pedra para imprimir "Você venceu" no canvas
  if(totalPedras == 1) {
    exibeVencedor();
  };
}

