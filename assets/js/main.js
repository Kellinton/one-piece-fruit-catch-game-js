// alert('teste')

// let alturaNavegador = window.innerHeight // 861
// let larguraNavegador = window.innerWidth // 1802
// console.log(alturaNavegador, larguraNavegador);

let alturaNavegador = window.innerHeight;
let larguraNavegador = window.innerWidth;


/* função nomeada (caso queira reutilizar a função em outras partes do código) para ajustar tamanho da área de jogo (onde serão renderizados os objetos) sempre que o jogador aumentar ou diminuir a tela
function ajustarTamanhoAreaJogo() {
     alturaNavegador = window.innerHeight
     larguraNavegador = window.innerWidth

    console.log(alturaNavegador, larguraNavegador);
}

ajustarTamanhoAreaJogo()

*/



// evento disparado sempre quando redimensiona a tela, a função anônima pega a largura e altura e armazena dentro das variáveis, sempre que a tela for redimensionado para ajustar tamanho da área de jogo (onde serão renderizados os objetos) sempre que o jogador aumentar ou diminuir a tela
window.addEventListener('resize', () => {
    alturaNavegador = window.innerHeight
    larguraNavegador = window.innerWidth

    console.log(`Altura renderizada: ${alturaNavegador}, Largura renderizada ${larguraNavegador}`);
});

// pegando as coordenadas onde as frutas irão aparecer na tela, e calculando a posição aleatória X/Y onde a fruta irá aparecer dentro da largura/altura do navegador. o método floor está arredondando para baixo os valores que estão sendo gerados de forma aleatória pelo método random(), subtraindo 50 para que a imagem não ultrapasse as bordas quando for gerada, pois o tamanho da imagem pode acabar fazendo com que a imagem vaze nas bordas da janela do navegador
let posicaoX =  Math.floor(Math.random() * larguraNavegador) - 50;
let posicaoY = Math.floor(Math.random() * alturaNavegador) - 50;

// como está sendo subtraindo -50 da posição atual onde a fruta irá aparecer, fazemos uma condição para que a fruta não fique em uma posição menor que 0. se for menor que zero, ela recebe 0, senão ela recebe ela mesma (permanece o valor que lhe tinha sido atribuído).
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(`Posição aleatória X: ${posicaoX}, Posição aleatória Y: ${posicaoY}` );

// criando um elemento html (img) que será a fruta que será renderizada em posições aleatórias na janela
let fruta = document.createElement('img'); // criando o elemento
let tamanhoFruta = Math.floor(Math.random() * 7 + 3);
// let tamanhoFrutaLevelFacil = 7;
// let tamanhoFrutaLevelDificil
// console.log(`tamanho fruta:  ${tamanhoFruta}`);
fruta.src = './assets/images/frutas/fruta_' + (Math.floor(Math.random() * 6) + 1) + '.png'; // escolhendo imagens entre 1 e 6 de forma randomica
fruta.style.width = tamanhoFruta + 'em'; // tamanho da fruta de forma randomica
fruta.style.position = 'absolute';
fruta.style.left = posicaoX + 'px';
fruta.style.top = posicaoY + 'px';

document.body.appendChild(fruta); // adicionando ao body

// criando e removendo uma fruta a cada ciclo de tempo

