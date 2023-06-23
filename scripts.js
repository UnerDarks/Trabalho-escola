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

////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
  var images = ["banner.jpeg", "nova-imagem.jpg"]; // Adicione aqui os nomes das imagens que deseja exibir
  var currentImage = 0;
  var imgElement = document.getElementById("banner-img");
  var btnElement = document.querySelector(".btn-img");

  function changeImage() {
    btnElement.classList.add("hidden"); // Oculta o botão ao trocar de imagem

    currentImage = (currentImage + 1) % images.length;
    imgElement.src = images[currentImage];

    setTimeout(function() {
      btnElement.classList.remove("hidden"); // Exibe o botão novamente após a troca de imagem
    }, 500); // Tempo em milissegundos antes do botão reaparecer
  }

  setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos (3000 milissegundos)
});

