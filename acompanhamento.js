//Calculadora do mix
  // Função para calcular dias úteis do mês atual
  function calcularDiasUteis() {
    const hoje = new Date();
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const fimMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);

    let diasUteis = 0;
    let diasTrabalhados = 0;

    // Loop por todos os dias do mês
    for (let dia = inicioMes; dia <= fimMes; dia.setDate(dia.getDate() + 1)) {
      const diaSemana = dia.getDay();
      if (diaSemana !== 0 && diaSemana !== 6) { // Excluindo sábado (6) e domingo (0)
        diasUteis++;
        if (dia < hoje) {
          diasTrabalhados++;
        }
      }
    }

    const diasFaltantes = diasUteis - diasTrabalhados;

    // Preencher os campos no formulário
    document.getElementById('diasUteis').value = diasUteis;
    document.getElementById('diasTrabalhados').value = diasTrabalhados;
    document.getElementById('diasFaltantes').value = diasFaltantes;
  }

  // Função para calcular Mix Faltante
  function calcularMixFaltante() {
    const diasUteis = parseFloat(document.getElementById('diasUteis').value);
    const diasTrabalhados = parseFloat(document.getElementById('diasTrabalhados').value);
    const diasFaltantes = parseFloat(document.getElementById('diasFaltantes').value);
    const mixMedio = parseFloat(document.getElementById('mixMedio').value);

    if (!isNaN(mixMedio)) {
      const mixFaltante = ((diasUteis * 30) - (diasTrabalhados * mixMedio)) / diasFaltantes;
      document.getElementById('mixFaltante').value = mixFaltante.toFixed(2);
    }
  }

  // Inicializar o cálculo ao carregar a página
  window.onload = function () {
    calcularDiasUteis();

    // Adicionar evento para recalcular Mix Faltante
    document.getElementById('mixMedio').addEventListener('input', calcularMixFaltante);
  };






// Função para calcular a conversão de HL para pacotes e o valor faltante
function calcularMetaPacotes() {
    // Obter o valor da meta em HL e converter para float
    let metaHectolitros = parseFloat(document.querySelector("tr td[contenteditable='true']").innerText);
    
    // Calcular a meta em pacotes (CX) e arredondar para cima
    let metaCaixas = Math.ceil(metaHectolitros / 0.063); // Ajuste conforme necessário
    
    // Atualizar o valor da meta em pacotes (CX)
    document.getElementById("metaPacotes1").innerText = metaCaixas;
    
    // Obter o valor da venda diária em pacotes (CX) e converter para float
    let vendasDiariasCaixas = parseFloat(document.querySelectorAll("tr td[contenteditable='true']")[1].innerText);
    
    // Calcular o número de dias úteis restantes
    let diasRestantes = 20; // Ajuste conforme necessário
    
    // Calcular o valor faltante por dia e arredondar para cima
    let faltantePorDia = Math.ceil((metaCaixas - vendasDiariasCaixas) / diasRestantes);
    
    // Atualizar o valor faltante por dia
    document.getElementById("faltante1").innerText = faltantePorDia;
}

// Chamar a função ao carregar a página e ao editar os campos
document.addEventListener("DOMContentLoaded", () => {
    calcularMetaPacotes();
    document.querySelectorAll("td[contenteditable='true']").forEach(td => {
        td.addEventListener("input", calcularMetaPacotes);
    });
});
