// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
  // Obtém todos os elementos <a> dentro do <nav>
  var navLinks = document.querySelectorAll("nav a");
  
  // Percorre cada elemento <a> e adiciona um ouvinte de evento de clique
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      // Impede o comportamento padrão de clicar em um link
      event.preventDefault();
      
      // Obtém o href do link clicado
      var targetId = this.getAttribute("href");
      
      // Obtém o elemento alvo usando o href como seletor
      var targetElement = document.querySelector(targetId);
      
      // Verifica se o elemento alvo foi encontrado
      if (targetElement) {
        // Calcula a posição do elemento alvo em relação ao topo da página
        var offsetTop = targetElement.offsetTop;
        
        // Realiza a animação de rolagem suave
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});
