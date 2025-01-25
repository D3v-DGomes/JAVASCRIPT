/*
O QUE É UM CALLBACK?

--> É uma função passada como argumento para outra função que é executada após a conclusão
dessa segunda função. 

--> São úteis para trabalhar com operações assíncronas, como requisições a servidores
ou tratamento de eventos.
*/


// Exemplo de Callback:

// exemplo 01:
// document.querySelector('#botao').addEventListener('click', () => {
//     alert('Clicou no botão Callback')
// })

// exemplo 02 (mais comum):
function clickCallback (){
    alert('Clicou no botão');
};

document.querySelector('#botao').addEventListener('click', clickCallback);