// alert('teste')

// let alturaNavegador = window.innerHeight // 861
// let larguraNavegador = window.innerWidth // 1802
// console.log(alturaNavegador, larguraNavegador);

let alturaNavegador = 0;
let larguraNavegador = 0;


/* função nomeada (caso queira reutilizar a função em outras partes do código) para ajustar tamanho da área de jogo (onde serão renderizados os objetos) sempre que o jogador aumentar ou diminuir a tela
    
    function ajustarTamanhoAreaJogo() {
         alturaNavegador = window.innerHeight
         larguraNavegador = window.innerWidth

        console.log(alturaNavegador, larguraNavegador);
}

*/

// função anônima para ajustar tamanho da área de jogo (onde serão renderizados os objetos) sempre que o jogador aumentar ou diminuir a tela
window.addEventListener('resize', () => {
    alturaNavegador = window.innerHeight
    larguraNavegador = window.innerWidth

    console.log(alturaNavegador, larguraNavegador);
});
