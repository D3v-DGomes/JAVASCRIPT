/*

Permite que uma função receba um número indefinido de argumentos como um array. 
Ele é útil para trabalhar com parâmetros de função variáveis e para operações em arrays.


Aplicações Práticas:

1- Parâmetros de Funções: Facilita a criação de funções que aceitam qualquer 
número de argumentos.

2- Manipulação de Arrays: Combina bem com o operador spread para operações 
avançadas de arrays.

3- Desestruturação de Objetos: Útil para extrair propriedades específicas e coletar 
o restante em um novo objeto.

*/

// Exemplo I:
function add(...informations) {
    console.log(informations);
}

add(1, 'White', 5, 33, 'Blue', 64, 73, 'Brown', 0, 123, 'David', 'ABC');


// Exemplo II:

function addNames(names, ...newNames) {
    let newSet = [
        ...names,
        ...newNames
    ];

    return newSet;
};

let names = ['Dyrroth', 'Cecilius'];
let others = addNames(names, 'X-Borg', 'Atlas', 'Angela');

console.log(others);


