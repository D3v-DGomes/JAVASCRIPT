document.addEventListener('DOMContentLoaded', () => {
    const cpfCnpjInput = document.getElementById('cpfCnpj');
    const cpfCnpjLabel = document.querySelector('#cpfCnpjGroup label');
    const nomeGroup = document.getElementById('nomeGroup');
    const razaoSocialGroup = document.getElementById('razaoSocialGroup');
    const fantasiaGroup = document.getElementById('fantasiaGroup');

    cpfCnpjInput.addEventListener('input', () => {
        let value = cpfCnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (value.length > 11) {
            // Formato CNPJ
            cpfCnpjLabel.textContent = 'CNPJ';
            nomeGroup.style.display = 'none';
            razaoSocialGroup.style.display = 'block';
            fantasiaGroup.style.display = 'block';
        } else {
            // Formato CPF
            cpfCnpjLabel.textContent = 'CPF';
            nomeGroup.style.display = 'block';
            razaoSocialGroup.style.display = 'none';
            fantasiaGroup.style.display = 'none';
        }
        cpfCnpjInput.value = value;
    });
});

// Adicionando validação de campo:
const form = document.getElementById('cadastroForm');

form.addEventListener('submit', function(e) {
    // Evitando que o formulário não recarregue a página:
    e.preventDefault();

    const errorIcon = '<i class="fa-solid fa-circle-exclamation"></i>';

    const name = document.getElementById('nome');
    const nameValue = name.value;
    const inputBox = name.closest('#nomeGroup');

    const errorSpan = inputBox.querySelector('.error');
    errorSpan.innerHTML = '';

    inputBox.classList.remove('invalid');

    if (isEmpty(name)) {
        errorSpan.innerHTML = `${errorIcon} Este campo é obrigatório`;
        inputBox.classList.add('invalid');
        return;
    }
});

// Verificando se o campo está vazio:
function isEmpty(value) {
    return value === '';
}