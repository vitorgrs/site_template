// Inicializa o Swiper.js
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true, // Loop infinito
    autoplay: {
      delay: 8000, // Autoplay com 8 segundos de intervalo
    },
    pagination: {
      el: '.swiper-pagination', // Bolinhas de navegação
      clickable: true, // Permite clicar nas bolinhas
    },
  });
});
