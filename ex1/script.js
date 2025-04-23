window.onload = function() {
  // Quando a página for carregada, esconda o loader e mostre o conteúdo
  const loader = document.querySelector('.loader-container');
  const content = document.querySelector('.content');
  
  // Atraso de 3 segundos para simular o carregamento da página
  setTimeout(function() {
      loader.style.display = 'none';  // Esconde a animação de carregamento
      content.style.display = 'block';  // Exibe o conteúdo da página
  }, 3000); // Altere o tempo conforme necessário
};
