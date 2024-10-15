const carouselNoticias = document.querySelector('#carouselNoticias');

document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o Slick quando o documento estiver pronto
  $(carouselNoticias).slick({
    infinite: true, // Habilita o loop infinito
    slidesToShow: 1, // Mostra 1 slide por vez
    slidesToScroll: 1, // Rola 1 slide por vez
    autoplay: true, // Habilita autoplay
    autoplaySpeed: 8000, // Velocidade do autoplay em milissegundos
    dots: true, // Ativa as bolinhas de navegação
    arrows: false, // Remove as setas de navegação
  });
});
