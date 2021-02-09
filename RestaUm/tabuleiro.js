// variáveis de medidas do tabuleiro
let comprimento = 450; let altura = 450;
let linhas = 9; let colunas = 9;
let tamanhoPosicao =  comprimento / colunas;


// matriz que define os valores das posições no tabuleiro
/*
  - 1: posição ocupada;
  - 0: posição vazia;
  - -1: posição inválida.
*/
let tabuleiro = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, 1, 1, 1, 0, 1, 1, 1, -1],
    [-1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1]
    ];

// reinicialização do tabuleiro
let posicao_inicial = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, 1, 1, 1, 0, 1, 1, 1, -1],
    [-1, 1, 1, 1, 1, 1, 1, 1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1]
    ];


// desenho das linhas que formam o tabuleiro
function desenhaTabuleiro() {
  line(100, 400, 100, 450)
  line(0, 400, 100, 400)
  
  line(50, 150, 50, 300);
  line(100, 150, 100, 300);
  line(150, 50, 150, 400);
  line(200, 50, 200, 400);
  line(250, 50, 250, 400);
  line(300, 50, 300, 400);
  line(350, 150, 350, 300);
  line(400, 150, 400, 300);
  
  line(150, 50, 300, 50);
  line(150, 100, 300, 100);
  line(50, 150, 400, 150);
  line(50, 200, 400, 200);
  line(50, 250, 400, 250);
  line(50, 300, 400, 300);
  line(150, 350, 300, 350);
  line(150, 400, 300, 400);
}