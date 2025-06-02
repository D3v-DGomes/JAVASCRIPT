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








});
