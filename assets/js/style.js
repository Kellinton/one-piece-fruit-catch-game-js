// adicionando uma imagem ao body

const html = document.documentElement;
const body = document.body;
const molduraAreaJogoStyle = document.querySelector('.molduraAreaJogo');
const areaJogoStyle = document.querySelector('.areaJogo');
const molduraPainelStyle = document.querySelector('.molduraPainel');
const painelStyle = document.querySelector('.painel');
const vidasStyle = document.querySelector('.vidas');
const cronometroStyle = document.querySelector('.cronometro');

html.style.cursor = 'url("./assets/images/cursor.png"), auto';

body.style.backgroundImage = 'url("./assets/images/fundo.png")';
body.style.backgroundRepeat = 'no-repeat';
body.style.width = '100%';
body.style.height = '100vh';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'space-around';
body.style.alignItems = 'center';
body.style.overflow = 'hidden';
body.style.backgroundSize = 'cover';

molduraAreaJogoStyle.style.display = 'flex';
molduraAreaJogoStyle.style.justifyContent = 'center';
molduraAreaJogoStyle.style.alignItems = 'center';
molduraAreaJogoStyle.style.backgroundImage = 'url("./assets/images/area-jogavel.png")';
molduraAreaJogoStyle.style.backgroundRepeat = 'no-repeat';
molduraAreaJogoStyle.style.width = '650px';
molduraAreaJogoStyle.style.height = '750px';

areaJogoStyle.style.position = 'relative';
areaJogoStyle.style.width = '80%';
areaJogoStyle.style.height = '50vh';

molduraPainelStyle.style.display = 'flex';
molduraPainelStyle.style.backgroundImage = 'url("./assets/images/placar.png")';
molduraPainelStyle.style.backgroundRepeat = 'no-repeat';
molduraPainelStyle.style.justifyContent = 'center';
molduraPainelStyle.style.alignItems = 'center';
molduraPainelStyle.style.width = '650px';
molduraPainelStyle.style.height = '170px';

painelStyle.style.display = 'flex';
painelStyle.style.justifyContent = 'space-between';
painelStyle.style.alignItems = 'center';
painelStyle.style.width = '80%';
painelStyle.style.height = '40px';




vidasStyle.style.width = '50%';


cronometroStyle.style.marginLeft = '40px';
cronometroStyle.style.width = '50%';
