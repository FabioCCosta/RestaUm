// "matriz" com os centros das posições
let Pedras = [
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
    25, 75, 125, 175, 225, 275, 325, 375, 425,
  ];


// desenha as pedras
function desenhaPedras() {
  for(i = 0; i < colunas; i++) {
    for(j = 0; j < linhas; j++) { 
      if(tabuleiro[i][j] == 1) {
        fill('green')
        circle(Pedras[i], Pedras[j], 40);
      }
    }
  }
}
