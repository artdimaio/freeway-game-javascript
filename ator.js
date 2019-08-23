//ator
let xAtor = 227.5, yAtor = 368, larguraAtor = 32.5, alturaAtor = 27.5;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2.5; 
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 2.5;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2.5; 
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2.5;
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i += 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros[i], alturaCarros[i], xAtor +10, yAtor + 13.75, 27);
    if (colisao) {
      colidiu();
    }
  }
}

function colidiu() {
  xAtor = 227.5;
  yAtor = 368;
  if (meusPontos > 0) {
     meusPontos -= 1;
  }
  somDaColisao.play();
}

function limiteDoJogo() {
  
   if (xAtor > 496 || yAtor > 396 || xAtor < -30) {
     colidiu();
   }
}

function incluiPontos() {
  textSize(20);
  textAlign(CENTER);
  fill(color(255,220,20));
  text(meusPontos, 25, 25);
}

function marcaPonto() {
  if (yAtor < 8) {
    meusPontos += 1;
    somDoPonto.play();
    xAtor = 227.5;
    yAtor = 368;
  }
}