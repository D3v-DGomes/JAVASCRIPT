/*
PADSTART:

É usado para preencher uma string no início com um caractere ou uma sequência
de caracteres até atingir um comprimento desejado. Esse método é útil quando
você precisa garantir que as strings tenham um comprimento específico, preenchendo-as 
com zeros ou outros caracteres, por exemplo.

Sintaxe:

--> str.padStart(targetLength, padString);

1- targetLength: O comprimento final desejado para a string, após o preenchimento.

2- padString (opcional): A string que será usada para preencher. Se não for fornecida, 
o padrão é usar um espaço (" ").
*/

let id = '12';

console.log(id.padStart(9, '2025-000'));


/* 
PADEND:

--> Possui a mesma funcionalidade e estrutura do padStart;
--> A única diferença é que o efeito dele é no fim da str e não no início como o padStart.
*/

let id_1 = '12';

console.log(id_1.padEnd(9, '00-2025'));


// Exemplo prático:

let card = '4444 5673 2263 4899';
let lastDigits = card.slice(-4);

let cardUnknow = lastDigits.padStart(16, '*');

console.log(cardUnknow);
