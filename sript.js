// Scroll para a seção do formulário
function scrollToForm() {
  const formSection = document.getElementById('formulario');
  formSection.scrollIntoView({ behavior: 'smooth' });
}

// Lidar com envio do formulário
document.getElementById('consultaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !email) {
    alert('Por favor, preencha seu nome e email.');
    return;
  }

  document.getElementById('mensagemSucesso').textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';

  // Limpa o formulário
  this.reset();

  // Remove mensagem depois de alguns segundos
  setTimeout(() => {
    document.getElementById('mensagemSucesso').textContent = '';
  }, 5000);
});
