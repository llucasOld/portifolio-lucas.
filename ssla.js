var carrossel = document.querySelector('.carrossel');
var listaImagens = carrossel.querySelectorAll('li');
var indiceAtual = 0;

function mostrarImagem(indice) {
  listaImagens.forEach(function(imagem) {
    imagem.style.display = 'none';
  });
  listaImagens[indice].style.display = 'block';
  indiceAtual = indice;
}

function proximaImagem() {
  var proximoIndice = (indiceAtual + 1) % listaImagens.length;
  mostrarImagem(proximoIndice);
}

function imagemAnterior() {
  var indiceAnterior = (indiceAtual - 1 + listaImagens.length) % listaImagens.length;
  mostrarImagem(indiceAnterior);
}

var intervalo = setInterval(proximaImagem, 11000);

carrossel.addEventListener('click', function(event) {
  clearInterval(intervalo);
  if (event.target.classList.contains('botao-anterior')) {
    imagemAnterior();
  } else if (event.target.classList.contains('botao-proximo')) {
    proximaImagem();
  }
  intervalo = setInterval(proximaImagem, 11000);
});