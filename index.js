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
    // Restaurar o texto do botão para "Grupo"
    document.getElementById('dropdownMenuButton').textContent = "Grupo";
}

// Função para filtrar por grupo de embalagem e atualizar o texto do botão
function filtrarPorGrupo(grupo) {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        if (row.getAttribute("data-grupo") === grupo) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
    // Atualizar o texto do botão para o grupo selecionado
    document.getElementById('dropdownMenuButton').textContent = grupo;
}

// Adiciona evento ao botão "Todos produtos" para restaurar o texto do dropdown
document.querySelector('.btn-secondary').addEventListener('click', function() {
    document.getElementById('dropdownMenuButton').textContent = "Grupo";
});
