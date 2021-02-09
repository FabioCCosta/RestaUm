// variável booleana que informa se o processo de solucionar está ocorrendo
let solucionando = false


function solucionaRestaUm() {
  // apresenta a solução do resta um utilizando o método dos quatro L's
  /*
    - verifica se o processo de solucionar já não está sendo executado;
    - informa que o processo de solucionar iniciou;
    - retorna o tabuleiro a formação inicial de pedras;
    - elimina as pedras diferenciando as etapas da solução
  */
      if(!solucionando) {
        solucionando = true
        tabuleiro = posicao_inicial;
        totalPedras = 32;

        eliminaOsL();
        eliminaCoracao();
        eliminaCruz();
  
}
  

function eliminaOsL() {
  // elimina as pedras seguindo a ordem do método dos quatro L's e vira o tabuleiro em 90 graus no sentido horário
  setTimeout(function() {
  movePedra(4, 2, 4, 4);}, 500)
        
  for(i = 0; i < 4; i++) {
    setTimeout(function() {
      movePedra(6, 3, 4, 3);}, 1000 + 5000 * i)
    setTimeout(function() {
      movePedra(5, 1, 5, 3);}, 2000 + 5000 * i)
    setTimeout(function() {
      movePedra(5, 4, 5, 2);}, 3000 + 5000 * i)
    setTimeout(function() {
      movePedra(3, 1, 5, 1);}, 4000 + 5000 * i)
    setTimeout(function() {
      movePedra(5, 1, 5, 3);}, 5000 + 5000 * i)
    setTimeout(function() {
      tabuleiro = vira90GrausSentidoHorario(tabuleiro)}, 5500 + 5000 * i)
          
  }
}

function eliminaCoracao(){
  // elimina as pedras a partir da forma do coração, repetindo movimentos ao virar o tabuleiro em 180 graus
  for(i = 0; i < 2; i++) {
          setTimeout(function() {
            movePedra(4, 5, 2, 5);}, 21000 + 3000 * i)
          setTimeout(function() {
            movePedra(2, 5, 2, 3);}, 22000 + 3000 * i)
          setTimeout(function() {
            movePedra(2, 3, 4, 3);}, 23000 + 3000 * i)
          setTimeout(function() {
            tabuleiro = vira90GrausSentidoHorario(tabuleiro)}, 23300 + 3000 * i)
          setTimeout(function() {
            tabuleiro = vira90GrausSentidoHorario(tabuleiro)}, 23600 + 3000 * i)
        
  }
}

function eliminaCruz(){
  // elimina a forma da cruz sem muita criatividade
  setTimeout(function() {
        movePedra(4, 4, 6, 4);}, 27000)
        setTimeout(function() {
        movePedra(4, 6, 4, 4);}, 28000)
        setTimeout(function() {
        movePedra(3, 4, 5, 4);}, 29000)
        setTimeout(function() {
        movePedra(6, 4, 4, 4);}, 30000)
      
  }
}

function vira90GrausSentidoHorario(matriz) {
  // altera os valores da matriz em 90 graus e informa o processo no console
  let n=matriz.length;
  for (let i=0; i<n/2; i++) {
    for (let j=i; j<n-i-1; j++) {
      var tmp=matriz[i][j];
      matriz[i][j]=matriz[n-j-1][i];
      matriz[n-j-1][i]=matriz[n-i-1][n-j-1];
      matriz[n-i-1][n-j-1]=matriz[j][n-i-1];
      matriz[j][n-i-1]=tmp;
    }
  }
  console.log("Virando tabuleiro em 90 graus à direita.");
  
  return matriz;
}