//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Posição das raquete do player 1
let xRaquete = 5;
let yRaquete = 150;

//Posição das raquete do oponente
let xRaquete2 = 585
let yRaquete2 = 150
let VelocidadeYOponente;

let colidiu = false;

//Placar do jogo
let MeusPontos = 0;
let pontosOponente = 0;

//Velocidade da bolinha
let VelocidadeXBolinha = 6;
let VelocidadeYBolinha = 6;

//Dimensão das raquetes
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let RaqueteComprimento2 = 10;
let RaqueteAltura2 = 90;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    MovimentaRaquete();
    VerificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaquete2, yRaquete2);
    MovimentaRaquete2();
    VerificaColisaoRaquete(xRaquete2, yRaquete2);
    incluirPlacar();
    marcaPonto();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x, y) {
    rect(x, y, RaqueteComprimento, RaqueteAltura);
}

function movimentaBolinha() {
    xBolinha += VelocidadeXBolinha;
    yBolinha += VelocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        VelocidadeXBolinha *= -1;
    }

    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        VelocidadeYBolinha *= -1;
    }

}

function MovimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function VerificaColisaoRaquete(x, y) {
    if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete) {
        VelocidadeXBolinha *= -1;
    }
}

function VerificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        VelocidadeXBolinha *= -1;
    }
}

function MovimentaRaquete2() {
    VelocidadeYOponente = yBolinha - yRaquete2 - RaqueteComprimento / 2 - 30;
    yRaquete2 += VelocidadeYOponente
}

function incluirPlacar() {
    fill(255)
    text(MeusPontos, 278, 26);
    text(pontosOponente, 321, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}