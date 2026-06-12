// Botão "Começar"
document.getElementById('btn-start').addEventListener('click', () => {
    alert('Bem-vindo ao Agrinho 2026! Explore as atividades abaixo.');
});

// Interação com atividades
function atividadeClick(nome) {
    alert(`Você selecionou a atividade: ${nome} 🌟`);
}

// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});