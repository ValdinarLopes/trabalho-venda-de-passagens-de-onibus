// Espera o conteúdo da página ser completamente carregado
document.addEventListener('DOMContentLoaded', () => { 
  // Obtém o elemento que irá conter os assentos
  const assentoContainer = document.getElementById('assento-container');
  const assentos = 45; // número de assentos

  // cria os assentos numerados de 1 a 45
  for (let i = 1; i <= assentos; i++) {
    const assento = document.createElement('div'); //cria um novo elemento div para o assento 
    assento.className = 'assento-item'; //Adiciona uma classe CSS ao assento
    assento.textContent = i;//Define o texto do assento com seu número
    
    // Adiciona um evento de clique ao assento
    assento.addEventListener('click', () => {
      assento.classList.toggle('selected'); //alterna a classe 'selected' para marcar/desmarcar o assento
    });
    assentoContainer.appendChild(assento);// adiciona o assento ao container de assento 
  }
  // Adiciona um evento de clique ao botão de confirmação 
  document.getElementById('confirmar').addEventListener('click', () => {
    const selecionados = document.querySelectorAll('.assento-item.selected');//seleciona todos os assentos que estão selecionados 
    if (selecionados.length > 0) { //verifica se pelo menos um assento foi selecionado
      const assentosSelecionados = Array.from(selecionados).map(a => a.textContent).join(', ');//cria uma lista de numeros dos assentos selecionados
      alert(`Obrigado por confirmar sua compra! Assento(s) reservados: ${assentosSelecionados}.`); //exibe uma alerta com confirmação dos assentos reservados 
    } else {
      alert('Nenhum assento selecionado. Por favor, selecione pelo menos um assento.'); //alerta caso nenhum assento tenha sido selecionado 
    }
  });
});
