/*
O spread permite que um iterável (como um array ou uma string) seja expandido em locais onde 
múltiplos elementos são esperados. Ele pode ser usado para copiar arrays, concatenar arrays, 
e até mesmo em objetos.

É válido ressaltar que ao utilizá-lo em objetos, também é possível sobrescrever 
o valor de uma variável existente.
*/

// Exemplo com números:

let numbers = [1, 2, 3, 4];
let moreNumbers = [...numbers, 5, 6, 7];

console.log(numbers);
console.log(moreNumbers);


// Exemplo com objetos:

let info = {
    firstName: 'Kevin',
    lastName: 'Silva',
    age: 24    
};

let newInfo = {
    ...info,
    country: 'Brazil',
    hobby: 'Runner',
    favoriteBook: 1984
};

console.log(newInfo);


// Exemplo usando funções:

function addInfo(info) {
    let newInfo = {
        ...info,
        status: 0,
        token: 'fheh83#fjj-!jfj@@mv',
        born: '2000.10.27'
    };
    return newInfo;
}

console.log(addInfo({firstName: 'David', lastName: 'Gomes'}));
