let completName = 'David Kevin Gomes Silva';

console.log(completName.length)        // Para saber a quantidade de strings (conta os espaços em branco)

// -----------------------------------------------------------------------------------------------------------------------------------

let result = ''; 

if(completName.indexOf('Silva') > -1) {        // Para saber a posição da string na variável escolhida 
    result = 'Congratulations!'
} else {
    result = 'Not found.'
}

console.log(result)

// -----------------------------------------------------------------------------------------------------------------------------------

let result1 = completName.slice(-5)      // Iniciar a partir do índice definido no primeiro parâmetro
console.log(result1)            // Somente o primeiro parâmetro é obrigatório. O segundo define o fim do fatiamento.
                                // com slice() é permitido utilizar parâmetros negativos com o intuito de começar o fatiamento do fim da string para o começo dela.

 // -----------------------------------------------------------------------------------------------------------------------------------

 let result2 = completName.substring(0, 4)        // Mesmo funcionamento do slice(), mas não suporta índices negativos.
 console.log(result2)       // Se colocar um número negativo ele se retorna o valor com índice [0].
                            // Usar o segundo parâmetro faz ele informar o início escolhido + a quantidade de letras desejada
 // -----------------------------------------------------------------------------------------------------------------------------------

let result3 = completName.replace('David', 'Lord');     // Substitui o primeiro pelo segundo parâmetro.
console.log(result3)        // Não substitui o valor na variável original usando uma segunda variável.

// -----------------------------------------------------------------------------------------------------------------------------------

console.log(result3.toLowerCase());     // Todas as letras minúsculas
console.log(result1.toUpperCase());     // Todas as letras maiúsculas

// -----------------------------------------------------------------------------------------------------------------------------------

let result4 = completName.concat(' Dev');   // Concatenar com uma variável existente
console.log(result4)        // É possível usar infinitos parâmetros

// -----------------------------------------------------------------------------------------------------------------------------------

let result5 = completName.trim();       // Remove os espaços em branco antes e depois da string, mas não os do meio.
console.log(result5);

// -----------------------------------------------------------------------------------------------------------------------------------

let result6 = completName.charAt(3);        // Para saber qual caractere está na posição referida.
console.log(result6);

let result6_1 = completName[4];     // Mesma funcionalidade
console.log(result6_1);

// -----------------------------------------------------------------------------------------------------------------------------------

let result7 = completName.split(' ');   // Transforma em Array sempre que o valor definido surgir na string. 
console.log(result7);