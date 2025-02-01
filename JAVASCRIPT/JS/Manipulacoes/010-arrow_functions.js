/*
Sintaxe Básica:

const nomeFuncao = (parametro1, parametro2, ...) => {
  // Corpo da função
};

Se a função tiver apenas uma expressão, você pode omitir as chaves {} 
e a expressão será retornada automaticamente:

const soma = (a, b) => a + b;



Características:

1- Sintaxe Concisa: Menos código para declarar uma função.

2- this Léxico: A palavra-chave this dentro de uma arrow function refere-se ao contexto 
de execução no qual a função foi definida, não no qual ela foi chamada. Isso é útil
em métodos de objetos.

3- Funções Anônimas: Arrow functions são frequentemente usadas para funções anônimas 
em callbacks, como em métodos de array (map, filter, reduce).

4- Sem arguments: Arrow functions não têm seu próprio objeto arguments. Para acessar argumentos, 
é necessário usar rest parameters ...args.



Cuidados e Limitações:

1- Não Usar Como Métodos: Evite usar arrow functions como métodos de objetos, 
pois a palavra-chave this pode não se comportar conforme o esperado.

2- Não Usar com new: Arrow functions não podem ser usadas como construtores 
(não têm a propriedadenew`).

*/


// Alternativa I:

let sum = (x , y) => {
    return x + y;
}

console.log(sum(10, 8));


// Alternativa II:

let multiplication = (a, b) => a * b;

console.log(multiplication(3, 2));


// Alternativa III:

let letterInName = (firstName) => {
    return firstName.length;
}

console.log(letterInName('Bob'));

// com apenas um parâmetro:

let letterInName_1 = lastName => lastName.length;

console.log(letterInName_1('Azimov'));