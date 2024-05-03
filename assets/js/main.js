// alert('teste')

// let alturaNavegador = window.innerHeight // 861
// let larguraNavegador = window.innerWidth // 1802
// console.log(alturaNavegador, larguraNavegador);

const areaJogo = document.querySelector('.areaJogo');
let alturaAreaJogo = areaJogo.clientHeight;
let larguraAreaJogo = areaJogo.clientWidth;
let vidas = 1;
let tempo = 10;

let cronometro = setInterval(() => {

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarFruta);
    } else {

        document.getElementById('cronometro').innerHTML = tempo;
    }

    tempo--;

}, 1000);

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
    /*
    innerWidth e innerHeight fornecem a largura e altura da janela do navegador, 
    // clientWidth e clientHeight fornecem a largura e altura da área de conteúdo de 
    // um elemento, excluindo as barras de rolagem, bordas e margens.
    // alturaNavegador = window.innerHeight
    // larguraNavegador = window.innerWidth
    */

    alturaAreaJogo = areaJogo.clientHeight;
    larguraAreaJogo = areaJogo.clientWidth;



    // console.log(`Altura renderizada: ${alturaAreaJogo}, Largura renderizada ${larguraAreaJogo}`);
});

function iniciar(){
    // o próprio jogo remove a fruta (caso exista, quer dizer que o jogador não clicou na fruta, se ele clicar, o jogo entenderá que a img foi removida e retornará false na condição, pulará o if e continuará o código)
    if(document.getElementById('fruta')){

        document.getElementById('fruta').remove();

        // vidas
        if(vidas > 3) {
            // BOM - Browser Object Model (window)
            // window.location.href = 'fim_de_jogo.html'; // redirecionando para a página de game over

        } else {

            document.getElementById('vida' + vidas).src = './assets/images/coracao_vazio.png';
            vidas++;

        }
    }
    
    // pegando as coordenadas onde as frutas irão aparecer na tela, e calculando a posição aleatória X/Y onde a fruta irá aparecer dentro da largura/altura do navegador. o método floor está arredondando para baixo os valores que estão sendo gerados de forma aleatória pelo método random(), subtraindo 50 para que a imagem não ultrapasse as bordas quando for gerada, pois o tamanho da imagem pode acabar fazendo com que a imagem vaze nas bordas da janela do navegador
    let posicaoX =  Math.floor(Math.random() * larguraAreaJogo) - larguraAreaJogo * 0.10;
    let posicaoY = Math.floor(Math.random() * alturaAreaJogo) - alturaAreaJogo * 0.10;
    
    // como está sendo subtraindo -50 da posição atual onde a fruta irá aparecer, fazemos uma condição para que a fruta não fique em uma posição menor que 0. se for menor que zero, ela recebe 0, senão ela recebe ela mesma (permanece o valor que lhe tinha sido atribuído).
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // console.log(`Posição aleatória X: ${posicaoX}, Posição aleatória Y: ${posicaoY}` );
    
    // criando um elemento html (img) que será a fruta que será renderizada em posições aleatórias na janela
    let fruta = document.createElement('img'); // criando o elemento
    let tamanhoFruta = Math.floor(Math.random() * 9 + 4);
    // let tamanhoFrutaLevelFacil = 7;
    // let tamanhoFrutaLevelDificil
    // console.log(`tamanho fruta:  ${tamanhoFruta}`);

   
    fruta.src = './assets/images/frutas/fruta_' + (Math.floor(Math.random() * 6) + 1) + '.png'; // escolhendo imagens entre 1 e 6 de forma randomica
    fruta.style.width = tamanhoFruta + 'em'; // tamanho da fruta de forma randomica
    fruta.style.position = 'absolute';
    fruta.style.left = posicaoX + 'px';
    fruta.style.top = posicaoY + 'px';
    fruta.id = 'fruta';
    fruta.style.opacity = 0; // efeito
    fruta.style.transition = 'opacity 0.7s ease'; // efeito

    fruta.onclick = function () {
        this.remove(); // remove a própria fruta (img) do HTML ao ser clicada, usando 'this' para referenciar o elemento DOM ao qual o evento foi atribuído (ou seja, a própria fruta)
    };
    

    // colocando um efeito de opacidade na imagem
    setTimeout(() => {
        fruta.style.opacity = 1;
    }, 100);

    
    document.querySelector('.areaJogo').appendChild(fruta); // adicionando ao body
    
};

// criando e removendo uma fruta a cada ciclo de tempo
let criarFruta = setInterval(() => {
    iniciar();
}, 2000);
