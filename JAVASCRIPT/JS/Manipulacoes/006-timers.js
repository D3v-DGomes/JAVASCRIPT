/*
O setInterval() é uma função em JavaScript que permite a execução de uma função ou um trecho
de código repetidamente, com um intervalo de tempo fixo entre cada execução. 
Em outras palavras, ele serve para agendar a repetição de ações em intervalos regulares.

A estrutura da função possui dois parâmetros: 

1º - É a função a ser executada repetidamente;
2º - É o intervalo de tempo que a função deve ser executada, posto em milissegundos;
*/

let = timer;

function toStart() {
    timer = setInterval(showTime, 1000);
};


/*
A função clearInterval() é essencial para controlar e parar a execução de intervalos quando 
não são mais necessários, evitando que o código continue a ser executado indefinidamente.
*/

function sstop() {
    clearInterval(timer);
};

function showTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    let currentTime = hours + ':' + minutes + ':' + seconds;

    document.querySelector('.demo').innerHTML = currentTime;
};


/*
O setTimeout é uma função que serve para executar um trecho de código 
ou uma função depois de um determinado período de tempo (em milissegundos). 
Pode ser útil em várias situações.

1- Atrasar a execução de uma ação específica;

2- Criar animações temporizadas;

3- Retardar a execução de uma função para simular um processamento mais longo.
*/

let = timer_2;

function twoSeconds(){
    timer_2 = setTimeout(function() {
        document.querySelector('.demo2').innerHTML = 'Rodou!';
    }, 2000);
}


/* 
para que serve o cleartimeout
A função clearTimeout é usada para cancelar um temporizador que foi configurado 
anteriormente com setTimeout. Isso pode ser útil se você decidir que a ação agendada 
não precisa mais ser executada.
*/

function sstop_2() {
    clearTimeout(timer_2);
}


