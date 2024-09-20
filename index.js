// Função para filtrar produtos pelo grupo selecionado
function filtrarPorGrupo(grupo) {
    // Seleciona todas as linhas da tabela
    let linhas = document.querySelectorAll("tbody tr");

    // Percorre todas as linhas e exibe apenas as que pertencem ao grupo selecionado
    linhas.forEach(function (linha) {
        let grupoProduto = linha.getAttribute("data-grupo"); // Pega o grupo do produto

        // Verifica se a linha pertence ao grupo selecionado e exibe/oculta de acordo
        if (grupoProduto === grupo || grupo === 'todos') {
            linha.style.display = ""; // Mostra a linha
        } else {
            linha.style.display = "none"; // Oculta a linha
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const dropdownItems = document.querySelectorAll('.dropdown-item');
    
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                filtrarPorGrupo(this.getAttribute('data-grupo'));
            });
            
            // Para dispositivos móveis
            item.addEventListener('touchstart', function(e) {
                filtrarPorGrupo(this.getAttribute('data-grupo'));
            });
        });
    });
    


    // Atualiza o nome do botão com o grupo selecionado
    document.getElementById('dropdownMenuButton').textContent = grupo;
}

function filtrarLinhas() {
    var linhas = document.querySelectorAll("tbody tr");
    linhas.forEach(function(linha) {
        var campos = linha.querySelectorAll("td[contenteditable='true']");
        var preenchido = false;
        campos.forEach(function(campo) {
            if (campo.innerText.trim() !== "") {
                preenchido = true;
            }
        });
        if (preenchido) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
}

function mostrarTodasLinhas() {
    var linhas = document.querySelectorAll("tbody tr");
    linhas.forEach(function(linha) {
        linha.style.display = "";
    });
}

// Função para filtrar produtos enquanto digita na pesquisa busca
document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase(); // Termo de pesquisa digitado pelo usuário
    let linhas = document.querySelectorAll('tbody tr'); // Todas as linhas da tabela

    linhas.forEach(function(linha) {
        let nomeProduto = linha.querySelector('td').innerText.toLowerCase(); // Nome do produto
        if (nomeProduto.includes(searchTerm)) {
            linha.style.display = ''; // Mostra a linha se o nome corresponder
        } else {
            linha.style.display = 'none'; // Oculta a linha se não corresponder
        }
    });
});


