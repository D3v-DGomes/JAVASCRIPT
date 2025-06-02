document.addEventListener('DOMContentLoaded', () => {
    // Formatação de CPF/CNPJ e campos Nome/Fantasia dinâmicos:
    const cpfCnpjInput = document.getElementById('cpfCnpj');
    const cpfCnpjLabel = document.querySelector('#cpfCnpjGroup label');
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeInput = document.getElementById('nomeInput');
    const razaoSocialGroup = document.getElementById('razaoSocialGroup');
    const emailInput = document.getElementById('email');


    // Campos obrigatórios:
    const cadastroForm = document.getElementById('cadastroForm');
    const cpfCnpjHelp = document.getElementById('cpfCnpjHelp');
    const nomeHelp = document.getElementById('nomeHelp');
    const razaoSocialHelp = document.getElementById('razaoSocialHelp');
    const razaoSocialInput = document.getElementById('razaoSocialInput');
    const emailHelp = document.getElementById('emailHelp');



    // Máscara do CPF/CNPJ:
    function mascaraCnpjCpf(valor) { // Agora recebe o valor como argumento
        let cnpjCpf = valor.replace(/\D/g, '');

        if (cnpjCpf.length > 14) {
            cnpjCpf = cnpjCpf.substring(0, 14);
        }

        if (cnpjCpf.length <= 11) {
            cnpjCpf = cnpjCpf.replace(/(\d{3})(\d)/, '$1.$2');
            cnpjCpf = cnpjCpf.replace(/(\d{3})(\d)/, '$1.$2');
            cnpjCpf = cnpjCpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        } else {
            cnpjCpf = cnpjCpf.replace(/^(\d{2})(\d)/, '$1.$2');
            cnpjCpf = cnpjCpf.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            cnpjCpf = cnpjCpf.replace(/\.(\d{3})(\d)/, '.$1/$2');
            cnpjCpf = cnpjCpf.replace(/(\d{4})(\d)/, '$1-$2');
        }
        return cnpjCpf;
    }

    // Campos de CPF/CNPJ e Nome/Fantasia dinâmicos:
    cpfCnpjInput.addEventListener('input', () => {
        let value = cpfCnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (value.length > 11) {
            // Formato CNPJ
            cpfCnpjLabel.textContent = 'CNPJ *';
            nomeLabel.textContent = 'Fantasia: *';
            razaoSocialGroup.style.display = 'block';
            cpfCnpjInput.value = mascaraCnpjCpf(cpfCnpjInput.value); // Aplica a máscara DEPOIS

            // Borda verde para CNPJ completo:
            if (value.length === 14) {
                cpfCnpjInput.style.border = '1px solid #22c55e';
            }
            else {
                cpfCnpjInput.style.border = '';
            }
        } else {
            // Formato CPF
            cpfCnpjLabel.textContent = 'CPF *';
            nomeLabel.textContent = 'Nome Completo: *';
            razaoSocialGroup.style.display = 'none';
            cpfCnpjInput.value = mascaraCnpjCpf(cpfCnpjInput.value); // Aplica a máscara DEPOIS
            cpfCnpjInput.placeholder = 'CPF/CNPJ'; // Mantém o placeholder genérico ou atualiza para CPF

            // Borda verde para CPF completo:
            if (value.length === 11) {
                cpfCnpjInput.style.border = '1px solid #22c55e';
            }
            else {
                cpfCnpjInput.style.border = '';
            }
        }
        cpfCnpjHelp.style.display = 'none';     // Oculta a mensagem ao digitar
    });






});
