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
