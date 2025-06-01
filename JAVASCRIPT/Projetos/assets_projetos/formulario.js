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







            // Aplica a formatação do CNPJ
            value = value.slice(0, 14); // Limita a 14 dígitos
            if (value.length > 2) {
                value = value.slice(0, 2) + '.' + value.slice(2);
            }
            if (value.length > 6) {
                value = value.slice(0, 6) + '.' + value.slice(6);
            }
            if (value.length > 10) {
                value = value.slice(0, 10) + '/' + value.slice(10);
            }
            if (value.length > 15) {
                value = value.slice(0, 15) + '-' + value.slice(15);
            }






            
            // Aplica a formatação do CPF
            value = value.slice(0, 11); // Limita a 11 dígitos
            if (value.length > 3) {
                value = value.slice(0, 3) + '.' + value.slice(3);
            }
            if (value.length > 7) {
                value = value.slice(0, 7) + '.' + value.slice(7);
            }
            if (value.length > 11) {
                value = value.slice(0, 11) + '-' + value.slice(11);
            }