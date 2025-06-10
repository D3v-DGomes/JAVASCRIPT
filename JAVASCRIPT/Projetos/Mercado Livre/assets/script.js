function showForm(formType) {
    // Oculta todos os formulários
    document.querySelectorAll('.form-section').forEach(form => {
        form.style.display = 'none';
    });

    // Mostra o formulário selecionado
    document.getElementById('form' + formType.charAt(0).toUpperCase() + formType.slice(1)).style.display = 'block';
}

// Mostra um formulário padrão ao carregar a página
showForm('consumidor');