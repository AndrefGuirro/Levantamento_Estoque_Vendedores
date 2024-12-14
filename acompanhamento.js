//CALCULADORA DE MIX MEDIO
// Lista de feriados no formato AAAA-MM-DD
const feriados = [
  "2024-12-25", // Natal de 2024
  "2024-12-31", //Folga
  "2025-01-01", // Ano Novo 2025
  "2025-04-21", // Tiradentes 2025
  "2025-05-01", // Dia do Trabalhador 2025
  "2025-09-07", // Independência do Brasil 2025
  "2025-10-12", // Nossa Senhora Aparecida 2025
  "2025-11-02", // Finados 2025
  "2025-11-15", // Proclamação da República 2025
  "2025-12-25", // Natal de 2025
  "2025-07-09", // Revolução Constitucionalista 2025
  "2025-11-20", // Consciência Negra 2025
];

// Função para calcular se uma data é feriado
function ehFeriado(data) {
  const dataFormatada = data.toISOString().split("T")[0];
  return feriados.includes(dataFormatada);
}

// Função para calcular dias úteis do mês atual
function calcularDiasUteis() {
  const hoje = new Date();
  const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const fimMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);

  let diasUteis = 0;
  let diasTrabalhados = 0;

  // Loop por todos os dias do mês
  for (let dia = new Date(inicioMes); dia <= fimMes; dia.setDate(dia.getDate() + 1)) {
    const diaSemana = dia.getDay();
    if (diaSemana !== 0 && diaSemana !== 6 && !ehFeriado(dia)) {
      // Exclui sábados, domingos e feriados
      diasUteis++;
      if (dia < hoje.setHours(0, 0, 0, 0)) {
        diasTrabalhados++; // Considere apenas os dias úteis passados
      }
    }
  }

  const diasFaltantes = diasUteis - diasTrabalhados;

  // Preencher os campos no formulário
  document.getElementById("diasUteis").value = diasUteis;
  document.getElementById("diasTrabalhados").value = diasTrabalhados;
  document.getElementById("diasFaltantes").value = diasFaltantes;
}

// Função para calcular Mix Faltante
function calcularMixFaltante() {
  const diasUteis = parseFloat(document.getElementById("diasUteis").value);
  const diasTrabalhados = parseFloat(document.getElementById("diasTrabalhados").value);
  const diasFaltantes = parseFloat(document.getElementById("diasFaltantes").value);
  const mixMedio = parseFloat(document.getElementById("mixMedio").value);

  // Verificar qual botão radio está selecionado
  const mix25Selecionado = document.getElementById("mix25").checked;
  const mix30Selecionado = document.getElementById("mix30").checked;

  let mixReferencia = 30; // Padrão

  if (mix25Selecionado) {
    mixReferencia = 25;
  }

  if (!isNaN(mixMedio)) {
    const mixFaltante = ((diasUteis * mixReferencia) - (diasTrabalhados * mixMedio)) / diasFaltantes;
    document.getElementById("mixFaltante").value = mixFaltante.toFixed(2);
  }
}

// Inicializar o cálculo ao carregar a página
window.onload = function () {
  calcularDiasUteis();

  // Adicionar evento para recalcular Mix Faltante
  document.getElementById("mixMedio").addEventListener("input", calcularMixFaltante);

  // Adicionar eventos nos botões radio
  document.getElementById("mix25").addEventListener("change", calcularMixFaltante);
  document.getElementById("mix30").addEventListener("change", calcularMixFaltante);
};
