//código do carro
let yCarros = [40, 96, 152, 212, 264, 320];
let xCarros = [600, 600, 600, -50, -50 ,-50];
let velocidadeCarros = [2, 1, 3, -5.5, -4, -2.7];
let larguraCarros = [70, 70, 70, 70, 70, 70];
let alturaCarros = [35, 35, 35, 35, 35, 35];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros[i], alturaCarros[i]);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i += 1) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function resetaCarro() {
  if (xCarros[0] < -50) {
    xCarros[0] = 600;
    velocidadeCarros[0] += 0.1;
  }
  
  if (xCarros[1] < -50) {
    xCarros[1] = 600;
    velocidadeCarros[1] += 0.1;
  }
  
  if (xCarros[2] < -300) {
    xCarros[2] = 600;
    velocidadeCarros[2] += 0.1;
  }
  
  if (xCarros[3] > 600) {
    xCarros[3] = -50;
    velocidadeCarros[3] -= 0.1;
  }
  
  if (xCarros[4] > 650) {
    xCarros[4] = -100;
    velocidadeCarros[4] -= 0.1;
  }
  
  if (xCarros[5] > 600) {
    xCarros[5] = -50;
    velocidadeCarros[5] -= 0.1;
  }
  
}