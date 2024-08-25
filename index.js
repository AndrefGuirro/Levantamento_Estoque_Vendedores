// Função para filtrar as linhas preenchidas
function filtrarLinhas() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const estoque = row.cells[1].innerText.trim();
        const sugestaoPedido = row.cells[2].innerText.trim();
        if (estoque === "" && sugestaoPedido === "") {
            row.classList.add("hidden");
        }
    });
}

// Função para mostrar todas as linhas
function mostrarTodasLinhas() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.classList.remove("hidden");
    });
}


// Adiciona os event listeners para os botões
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn-primary").addEventListener("click", filtrarLinhas);
    document.querySelector(".btn-secondary").addEventListener("click", mostrarTodasLinhas);
});
