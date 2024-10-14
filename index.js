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


document.getElementById('searchInput').addEventListener('input', function() {
    let filterValue = this.value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    
    rows.forEach(function(row) {
        let productName = row.querySelector("td").innerText.toLowerCase();
        if (productName.includes(filterValue)) {
            row.style.display = ""; // Mostra a linha se a busca corresponder
        } else {
            row.style.display = "none"; // Oculta a linha se não corresponder
        }
    });
});

//Função compartilhar WhatsApp
document.getElementById('shareButton').addEventListener('click', function() {
    const rows = document.querySelectorAll('table tbody tr');
    let message = 'Levantamento de Estoque\n------------------------\n\n'; // Título com linha pontilhada
    
    rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        const nomeProduto = columns[0].innerText;
        const estoque = columns[1].innerText.trim();
        const sugestao = columns[2].innerText.trim();
        
        // Verifica se as colunas "ESTOQUE" e "SUGESTÃO" estão preenchidas
        if (estoque !== '' && sugestao !== '') {
            // Formata a mensagem sem símbolos de formatação
            message += `Produto: ${nomeProduto}\nEstoque: ${estoque}\nSugestão: ${sugestao}\n\n------------------------\n`;
        }
    });

    // Verifica se há produtos preenchidos
    if (message === 'Segue Levantamento de Estoque e Sugestão de pedido\n------------------------\n\n') {
        alert('Nenhum produto preenchido para compartilhar. Preencha os 2 campos, Estoque e sugestão, mesmo que seja 0');
        return;
    }

    // Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(message);
    
    // URL do WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // Abre a URL do WhatsApp
    window.open(whatsappUrl, '_blank');
});
