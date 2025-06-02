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





    // Comportamento das mensagens de campo obrigatório:
    nomeInput.addEventListener('input', () => {
        const cpfCnpjValue = cpfCnpjInput.value.replace(/\D/g, '');

        if (cpfCnpjValue.length <= 11)  // Se for um CPF
        {
            nomeInput.value = nomeInput.value.replace(/[^a-zA-Z\sáàâãéèêíìóòôõúùçÁÀÂÃÉÈÊÍÌÓÒÔÕÚÙÇ\s]/g, '');    // Remove números
        }
        nomeHelp.style.display = 'none';
        if (nomeInput.value.trim().length >= 3) {
            nomeInput.style.border = '';    // Remove a barra vermelha ao digitar mais que 3 caracteres
        }
    });

    razaoSocialHelp.addEventListener('input', () => {
        razaoSocialHelp.style.display = 'none';
        if (razaoSocialInput.value.trim().length >= 3) {
            razaoSocialInput.style.border = '';
        }
    });

    emailInput.addEventListener('input', () => {
        emailHelp.style.display = 'none';
        emailInput.style.border = '';
    });


    // Verificação dos campos obrigatórios no submit:
    cadastroForm.addEventListener('submit', (event) => {
        let hasError = false;
        const cpfCnpjValue = cpfCnpjInput.value.replace(/\D/g, '');
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação do CPF/CNPJ:
        if (!cpfCnpjInput.value.trim()) {
            cpfCnpjHelp.textContent = 'Campo obrigatório';
            cpfCnpjHelp.style.display = 'block';
            cpfCnpjInput.style.border = '1px solid #dc2626';
            hasError = true;
        }
        else if (cpfCnpjValue.length !== 11 && cpfCnpjValue.length !== 14) {
            cpfCnpjHelp.textContent = 'CPF ou CNPJ inválido';
            cpfCnpjHelp.style.display = 'block';
            cpfCnpjInput.style.border = '1px solid #dc2626';
            hasError = true;
        }
        else {
            cpfCnpjHelp.style.display = 'none';
            cpfCnpjInput.style.border = '1px solid #22c55e';
        }

        // Validação do Nome/Fantasia (mínimo 3 caracteres):
        if (!nomeInput.value.trim()) {
            nomeHelp.textContent = 'Campo obrigatório';
            nomeHelp.style.display = 'block';
            nomeInput.style.border = '1px solid #dc2626';
            hasError = true;
        }
        else if (nomeInput.value.trim().length < 3) {
            nomeHelp.textContent = 'Digite pelo menos 3 letras';
            nomeHelp.style.display = 'block';
            nomeInput.style.border = '1px solid #dc2626';
            hasError = true;
        }

        // Validação da Razão Social (se estiver visível: mínimo de 3 caracteres):
        if (razaoSocialGroup.style.display === 'block') {
            if (!razaoSocialInput.value.trim()) {
                razaoSocialHelp.textContent = 'Campo obrigatório';
                razaoSocialHelp.style.display = 'block';
                razaoSocialInput.style.border = '1px solid #dc2626';
                hasError = true;
            }
            else if (razaoSocialInput.value.trim().length < 3) {
                razaoSocialHelp.textContent = 'Digite pelo menos 3 letras';
                razaoSocialHelp.style.display = 'block';
                razaoSocialInput.style.border = '1px solid #dc2626';
                hasError = true;
            }
        }

        // Validação do E-mail (só valida se for preenchido):
        if (emailValue) {
            if (!emailRegex.test(emailValue)) {
                emailHelp.textContent = 'Por favor, insira um e-mail válido';
                emailHelp.style.display = 'block';
                emailInput.style.border = '1px solid #dc2626';
                hasError = true;
            }
            else {
                emailHelp.style.display = 'none';   // Manter borda verde se já estiver válida ao perder o foco
            }
        }
        else {
            emailHelp.style.display = 'none';
            emailInput.style.border = '';
        }

        if (hasError) {
            event.preventDefault();     // Para impedir que o formulário seja enviado com erros
        }
    });
});
