// exibe botão de solução do resta um
function botaoSolucao() {
  textAlign(LEFT);
  textSize(20);
  textStyle(BOLD);
  fill(color(255, 10, 10));
  text("Solução", 10, 433);
}

// exibe mensagem após o jogo ser vencido
function exibeVencedor() {
  textAlign(CENTER);
  textSize(25);
  textStyle(BOLD);
  fill(color(255, 10, 10));
  text("VOCÊ VENCEU!!", 225, 30);
}