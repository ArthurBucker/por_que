//Auto typing
const txt = ['assistir anime', 'e', 'jogar video-game'];
let contador = 0,
    index = 0,
    palavraAtual = '',
    letra = '';

(function escrever() {

  if (contador === txt.length) {
    contador = 0;
  }

  palavraAtual = txt[contador];
  letra = palavraAtual.slice(0, ++index);

  document.querySelector('.auto-typing').textContent = letra;
  if(letra.length === palavraAtual.length) {
    contador++;
    index = 0;
  }

  setTimeout(escrever, 150);
}());

