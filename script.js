const calcularTotal = () => {
  let total = 0;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    total += parseFloat(checkbox.value);
  });
  document.getElementById('total').textContent = 'R$ ' + total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  });
};

const solicitarOrcamento = () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length === 0) {
    alert('Selecione pelo menos um servico!');
    return;
  }
  document.getElementById('aviso').style.display = 'block';
};