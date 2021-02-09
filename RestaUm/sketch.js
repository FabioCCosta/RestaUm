function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(220);
  desenhaTabuleiro();
  desenhaPedras();
  botaoSolucao();
  venceuJogo();
}