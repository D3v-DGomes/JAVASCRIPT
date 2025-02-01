// Utilizando arrays:

let listArray = ['Blue', 'Yellow', 'Black', 'Green'];

// O método Object.keys() retorna um array contendo as chaves (propriedades) de um objeto:
console.log(Object.keys(listArray));

// O método Object.values() retorna um array contendo os valores das propriedades de um objeto:
console.log(Object.values(listArray));

// O método Object.entries() retorna um array de arrays, onde cada sub-array contém um par 
// chave-valor correspondente a uma propriedade do objeto:
console.log(Object.entries(listArray));


// Utilizando objetos:

let listObject = {firstName: 'David', lastName: 'Gomes', age: 24, country: 'Brazil'};

console.log(Object.keys(listObject));
console.log(Object.values(listObject));
console.log(Object.entries(listObject));

