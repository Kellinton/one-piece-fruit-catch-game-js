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
