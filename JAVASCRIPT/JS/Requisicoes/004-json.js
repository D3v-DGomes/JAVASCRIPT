/*
JSON.parse:

--> Converte uma string JSON em um objeto JavaScript. É especialmente útil quando você 
recebe dados no formato JSON de uma API e precisa trabalhar com esses dados em seu código.

*/
let person = JSON.parse('{"firstName": "David", "lastName": "Silva", "age": 20}');
console.log(person);



/*
JSON.stringify:

--> Converte um objeto JavaScript em uma string JSON. É útil para serializar dados antes
de enviá-los para um servidor ou armazená-los em um formato que pode ser facilmente 
recuperado mais tarde.
*/
let pessoa = JSON.stringify({nome: 'Kevin', sobrenome: 'Gomes', idade: 95});
console.log(pessoa);
