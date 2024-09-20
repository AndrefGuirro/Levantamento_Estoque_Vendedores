// Função para filtrar os produtos por grupo
function filtrarPorGrupo(grupo) {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        if (row.getAttribute("data-grupo") === grupo) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
    // Atualiza o nome do botão com o grupo selecionado
    document.getElementById('dropdownMenuButton').textContent = grupo;
}

// Função para mostrar todos os produtos
function mostrarTodasLinhas() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.classList.remove("hidden");
    });
    document.getElementById('dropdownMenuButton').textContent = "Grupo";
}

// Função para filtrar apenas as linhas onde há produtos cadastrados
function filtrarLinhas() {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const estoque = row.cells[1].textContent.trim();
        const sugestao = row.cells[2].textContent.trim();
        if (estoque || sugestao) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
}
