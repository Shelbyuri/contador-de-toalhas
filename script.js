// Contadores iniciais
const contadores = {
  banho: 0,
  piso: 0,
  rosto: 0
};

// Função para alterar os contadores
function alterarContador(tipo, valor) {
  contadores[tipo] += valor;

  // Impede número negativo
  if (contadores[tipo] < 0) contadores[tipo] = 0;

  // Atualiza o número exibido na tela
  document.getElementById(tipo + "Numero").innerText = contadores[tipo];
}