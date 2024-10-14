// Seleciona o elemento do carrossel de notícias
const carouselNoticias = document.querySelector('#carouselNoticias');
console.log(carouselNoticias);

// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o Slick quando o documento estiver pronto
  $(carouselNoticias).slick({
    infinite: true, // Habilita o loop infinito
    slidesToShow: 1, // Mostra 1 slide por vez
    slidesToScroll: 1, // Rola 1 slide por vez
    autoplay: true, // Habilita autoplay
    autoplaySpeed: 2000, // Velocidade do autoplay em milissegundos
  });
});
