document.addEventListener('DOMContentLoaded', () => {
    // Formatação de CPF/CNPJ e campos Nome/Fantasia dinâmicos:
    const cpfCnpjInput = document.getElementById('cpfCnpj');
    const cpfCnpjLabel = document.querySelector('#cpfCnpjGroup label');
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeInput = document.getElementById('nomeInput');
    const razaoSocialGroup = document.getElementById('razaoSocialGroup');
    const emailInput = document.getElementById('email');

    // Campos de ajuda (mensagens de erro) e inputs obrigatórios:
    const cadastroForm = document.getElementById('cadastroForm');
    const cpfCnpjHelp = document.getElementById('cpfCnpjHelp');
    const nomeHelp = document.getElementById('nomeHelp');
    const razaoSocialHelp = document.getElementById('razaoSocialHelp');
    const razaoSocialInput = document.getElementById('razaoSocialInput');
    const emailHelp = document.getElementById('emailHelp');
    const passwordInput = document.getElementById('password');
    const senhaHelp = document.getElementById('senhaHelp');

    // Requisitos para a criação da senha:
    const passwordLength = document.getElementById('passwordLength');
    const passwordUppercase = document.getElementById('passwordUppercase');
    const passwordSpecial = document.getElementById('passwordSpecial');

    // Função para verificar os requisitos da senha e retornar o status de cada um:
    function verificarRequisitosSenha(senha) {
        return {
            length: senha.length >= 8, // Senha maior ou igual a 8 caracteres
            uppercase: /[A-Z]/.test(senha), // Pelo menos 1 letra maiúscula
            special: /[^a-zA-Z0-9]/.test(senha) // Pelo menos 1 caractere que não seja letra ou número
        };
    }

    // Função para atualizar o feedback visual dos requisitos da senha:
    function atualizarFeedbackRequisitos(senha) {
        const requisitosAtendidos = verificarRequisitosSenha(senha);

        // Funções auxiliares para aplicar estilos
        const applyStyle = (element, condition) => {
            if (condition) {
                element.classList.remove('text-danger');
                element.style.color = '#22c55e'; // Verde
            } else {
                element.classList.add('text-danger');
                element.style.color = ''; // Volta ao padrão da classe ou ao vermelho
            }
        };

        applyStyle(passwordLength, requisitosAtendidos.length);
        applyStyle(passwordUppercase, requisitosAtendidos.uppercase);
        applyStyle(passwordSpecial, requisitosAtendidos.special);

        // Determina se a senha é totalmente válida com base em todos os requisitos:
        return requisitosAtendidos.length && requisitosAtendidos.uppercase && requisitosAtendidos.special;
    }

    // Resetando as cores das bordas (agora como função genérica):
    const resetInputBorder = (inputElement) => {
        inputElement.style.border = '';
    };

    // Máscara do CPF/CNPJ:
    function mascaraCnpjCpf(valor) {
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

    // --- Event Listeners para feedback em tempo real e validação no 'blur' ---

    // CPF/CNPJ
    cpfCnpjInput.addEventListener('input', () => {
        let value = cpfCnpjInput.value.replace(/\D/g, '');
        cpfCnpjInput.value = mascaraCnpjCpf(cpfCnpjInput.value); // Aplica a máscara

        if (value.length > 11) {
            cpfCnpjLabel.textContent = 'CNPJ *';
            nomeLabel.textContent = 'Fantasia: *';
            razaoSocialGroup.style.display = 'block';
        } else {
            cpfCnpjLabel.textContent = 'CPF *';
            nomeLabel.textContent = 'Nome Completo: *';
            razaoSocialGroup.style.display = 'none';
        }

        if (cpfCnpjHelp.style.display === 'block' && cpfCnpjInput.style.border.includes('rgb(220, 38, 38)')) {
            // Não faz nada, deixa o erro persistir até que o usuário insira algo válido
        } else {
            cpfCnpjHelp.style.display = 'none'; // Oculta a mensagem ao digitar
            resetInputBorder(cpfCnpjInput); // Remove borda ao digitar
        }

    });

    cpfCnpjInput.addEventListener('blur', () => {
        const value = cpfCnpjInput.value.replace(/\D/g, '');
        if (value.length === 11 || value.length === 14) {
            cpfCnpjInput.style.border = '1px solid #22c55e'; // Borda verde se CPF/CNPJ válido
            cpfCnpjHelp.style.display = 'none';
        } else if (value.length > 0) {
            cpfCnpjInput.style.border = '1px solid #dc2626';
            cpfCnpjHelp.textContent = 'CPF ou CNPJ inválido';
            cpfCnpjHelp.style.display = 'block';
        } else {
            resetInputBorder(cpfCnpjInput);
            cpfCnpjHelp.style.display = 'none';
        }
    });

    // Nome Completo/Fantasia
    nomeInput.addEventListener('input', () => {
        const cpfCnpjValue = cpfCnpjInput.value.replace(/\D/g, '');
        if (cpfCnpjValue.length <= 11) { // Se for um CPF
            nomeInput.value = nomeInput.value.replace(/[^a-zA-Z\sáàâãéèêíìóòôõúùçÁÀÂÃÉÈÊÍÌÓÒÔÕÚÙÇ\s]/g, ''); // Remove números
        }

        if (nomeHelp.style.display === 'block' && nomeInput.style.border.includes('rgb(220, 38, 38)')) {
            // Não faz nada
        } else {
            nomeHelp.style.display = 'none'; // Oculta a mensagem ao digitar
            resetInputBorder(nomeInput); // Remove borda ao digitar
        }
    });

    nomeInput.addEventListener('blur', () => {
        const nomeValue = nomeInput.value.trim();
        if (nomeValue.length === 0) {
            resetInputBorder(nomeInput); // Se o campo estiver vazio ao perder o foco, remover borda
            nomeHelp.style.display = 'none';
        } else if (nomeValue.length < 3) {
            nomeHelp.textContent = 'Digite pelo menos 3 letras';
            nomeHelp.style.display = 'block';
            nomeInput.style.border = '1px solid #dc2626';
        } else {
            nomeInput.style.border = '1px solid #22c55e';
            nomeHelp.style.display = 'none';
        }
    });

    // Razão Social
    razaoSocialInput.addEventListener('input', () => {
        if (razaoSocialHelp.style.display === 'block' && razaoSocialInput.style.border.includes('rgb(220, 38, 38)')) {
            // Não faz nada
        } else {
            razaoSocialHelp.style.display = 'none';
            resetInputBorder(razaoSocialInput);
        }
    });

    razaoSocialInput.addEventListener('blur', () => {
        const razaoSocialValue = razaoSocialInput.value.trim();
        if (razaoSocialValue.length === 0) {
            resetInputBorder(razaoSocialInput);
            razaoSocialHelp.style.display = 'none';
        } else if (razaoSocialValue.length < 3) {
            razaoSocialHelp.textContent = 'Digite pelo menos 3 letras';
            razaoSocialHelp.style.display = 'block';
            razaoSocialInput.style.border = '1px solid #dc2626';
        } else {
            razaoSocialInput.style.border = '1px solid #22c55e';
            razaoSocialHelp.style.display = 'none';
        }
    });

    // E-mail
    emailInput.addEventListener('input', () => {
        if (emailHelp.style.display === 'block' && emailInput.style.border.includes('rgb(220, 38, 38)')) {
            // Não faz nada
        } else {
            emailHelp.style.display = 'none';
            resetInputBorder(emailInput);
        }
    });

    emailInput.addEventListener('blur', () => {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue) {
            if (!emailRegex.test(emailValue)) {
                emailHelp.textContent = 'Por favor, insira um e-mail válido.';
                emailHelp.style.display = 'block';
                emailInput.style.border = '1px solid #dc2626';
            } else {
                emailHelp.style.display = 'none';
                emailInput.style.border = '1px solid #22c55e';
            }
        } else {
            resetInputBorder(emailInput);
            emailHelp.style.display = 'none';
        }
    });

    // Senha
    passwordInput.addEventListener('input', () => {
        const senhaValue = passwordInput.value;
        const senhaValida = atualizarFeedbackRequisitos(senhaValue); // Atualiza os requisitos visuais

        if (senhaHelp.style.display === 'block' && passwordInput.style.border.includes('rgb(220, 38, 38)')) {
            // Não faz nada
        } else {
            senhaHelp.style.display = 'none';
            if (senhaValida) {
                passwordInput.style.border = '1px solid #22c55e';
            } else {
                resetInputBorder(passwordInput);
            }
        }
    });

    passwordInput.addEventListener('blur', () => {
        const senhaValue = passwordInput.value;
        if (senhaValue.length === 0) { // Se o campo estiver vazio ao perder o foco
            senhaHelp.textContent = 'Campo obrigatório';
            senhaHelp.style.display = 'block';
            passwordInput.style.border = '1px solid #dc2626';
        } else {
            const senhaValida = atualizarFeedbackRequisitos(senhaValue);
            if (!senhaValida) {
                passwordInput.style.border = '1px solid #dc2626';
                senhaHelp.textContent = 'Senha não atende a todos os requisitos.';
                senhaHelp.style.display = 'block';
            } else {
                senhaHelp.style.display = 'none';
                passwordInput.style.border = '1px solid #22c55e';
            }
        }
    });


    // --- Verificação Final dos campos obrigatórios no submit ---
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let hasError = false;

        // Validação do CPF/CNPJ:
        const cpfCnpjValue = cpfCnpjInput.value.replace(/\D/g, '');
        if (!cpfCnpjInput.value.trim()) {
            cpfCnpjHelp.textContent = 'Campo obrigatório';
            cpfCnpjHelp.style.display = 'block';
            cpfCnpjInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else if (cpfCnpjValue.length !== 11 && cpfCnpjValue.length !== 14) {
            cpfCnpjHelp.textContent = 'CPF ou CNPJ inválido';
            cpfCnpjHelp.style.display = 'block';
            cpfCnpjInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else {
            cpfCnpjHelp.style.display = 'none';
            cpfCnpjInput.style.border = '1px solid #22c55e';
        }

        // Validação do Nome/Fantasia:
        if (!nomeInput.value.trim()) {
            nomeHelp.textContent = 'Campo obrigatório';
            nomeHelp.style.display = 'block';
            nomeInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else if (nomeInput.value.trim().length < 3) {
            nomeHelp.textContent = 'Digite pelo menos 3 letras';
            nomeHelp.style.display = 'block';
            nomeInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else {
            nomeHelp.style.display = 'none';
            nomeInput.style.border = '1px solid #22c55e';
        }

        // Validação da Razão Social (se visível):
        if (razaoSocialGroup.style.display === 'block') {
            if (!razaoSocialInput.value.trim()) {
                razaoSocialHelp.textContent = 'Campo obrigatório';
                razaoSocialHelp.style.display = 'block';
                razaoSocialInput.style.border = '1px solid #dc2626';
                hasError = true;
            } else if (razaoSocialInput.value.trim().length < 3) {
                razaoSocialHelp.textContent = 'Digite pelo menos 3 letras';
                razaoSocialHelp.style.display = 'block';
                razaoSocialInput.style.border = '1px solid #dc2626';
                hasError = true;
            } else {
                razaoSocialHelp.style.display = 'none';
                razaoSocialInput.style.border = '1px solid #22c55e';
            }
        }

        // Validação do E-mail (só valida se preenchido):
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue && !emailRegex.test(emailValue)) {
            emailHelp.textContent = 'Por favor, insira um e-mail válido.';
            emailHelp.style.display = 'block';
            emailInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else if (emailValue) { // Se preenchido e válido
            emailHelp.style.display = 'none';
            emailInput.style.border = '1px solid #22c55e';
        } else { // Se vazio
            emailHelp.style.display = 'none';
            emailInput.style.border = '';
        }

        // Validação da Senha:
        const senhaValue = passwordInput.value;
        const senhaValida = atualizarFeedbackRequisitos(senhaValue); // Garante que o feedback visual esteja atualizado

        if (senhaValue.length === 0) {
            senhaHelp.textContent = 'Campo obrigatório';
            senhaHelp.style.display = 'block';
            passwordInput.style.border = '1px solid #dc2626';
            hasError = true;
        } else if (!senhaValida) {
            passwordInput.style.border = '1px solid #dc2626';
            senhaHelp.textContent = 'Senha não atende a todos os requisitos.';
            senhaHelp.style.display = 'block';
            hasError = true;
        } else {
            senhaHelp.style.display = 'none';
            passwordInput.style.border = '1px solid #22c55e';
        }

        if (!hasError) {
            alert('Formulário enviado com sucesso!');
            cadastroForm.submit();
        }
    });
});