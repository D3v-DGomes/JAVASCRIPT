let list = ['Macarrao', 'Frango', 'Arroz', 'Farinha'];
let list2 = ['Panela', 'Frigideira', 'Batedeira'];

let result = list.join(', ');       // Transforma a lista em uma str separando-a com o caractere desejado.
console.log(result);

// Funções que também podem ser utilizadas em arrays:
// .indexOF();  .toFixed();  .toString();   .pop(remove o último);    .shift(remove o primeiro);    
// .push(adicionar item);   

list[0] = 'Creatina';       // Substitui o valor encontrado no índice
console.log(list);

list[list.length] = 'Whey Protein';     // Adiciona o item a lista sem precisar consultar o índice do último item.
console.log(list);      // Recomenda-se utilizar o .push()

// ------------------------------------------------------------------------------------------------------------------

list.splice(2, 1);      // Remove um item da lista da seguinte maneira:
console.log(list)       // .splice(índice do item que deseja excluir, quantidade de itens a serem excluídos a partir do inicial)

// ------------------------------------------------------------------------------------------------------------------

let result3 = list.concat(list2);
console.log(result3.join(', '));

// ------------------------------------------------------------------------------------------------------------------

let result4 = result3.sort();       // Ordena o array em ordem alfabética 
console.log(result4);

// ------------------------------------------------------------------------------------------------------------------

let result5 = result4.reverse();    // Inverte a ordem o array
console.log(result5);

let result5_1 = list2.reverse();
console.log(result5_1);

// ------------------------------------------------------------------------------------------------------------------

let list3 = [33, 91, 1, 21, 84];        // Para dobrar os valores de um array
let list3_1 = [];
let list3_2 = [];
let list3_3 = [];

list3_1 = list3.map(function(item) {    // Mapeamento de função em todos os itens do array
    return item * 2; 
});

let result6 = list3_1;
console.log(result6);

// Segunda alternativa:

for(let i in list3) {
    list3_2.push(list3[i] * 2);
}
console.log(list3_2);

// ------------------------------------------------------------------------------------------------------------------

list3_3 = list3.filter(function(item) {     // Usado para filtrar os dados desejados
    return (item < 35) ? true : false;        // Estrutura reduzida da estrutura condicional IF.
});
console.log(list3_3);

// ------------------------------------------------------------------------------------------------------------------

list3_3 = list3.every(function(item) {      // Só será true se TODOS os itens passarem pela condicional.
    return (item > 3) ? true : false;
});
console.log(list3_3);

// ------------------------------------------------------------------------------------------------------------------

list3_3 = list3.some(function(item) {      // Será true se PELO MENOS UM dos itens for verdadeiro.
    return (item > 50) ? true : false;    
});
console.log(list3_3);

// ------------------------------------------------------------------------------------------------------------------

// Estrutura suportada = .find(function(item, index, array) 
list3_3 = list3.find(function(item) {     // Procura o dado informado até que encontre O PRIMEIRO que seja igual.
    return (item == 21) ? true : false;
});
console.log(list3_3);

list3_3 = list3.find(function(item) {
    return (item == 22) ? true : false;
});
console.log(list3_3);

// ------------------------------------------------------------------------------------------------------------------

list3_3 = list3.findIndex(function(item) {  // Mesma funcionalidade do descrito acima
    return (item == 1) ? true : false;   // Mas em vez de retornar o valor, ele retorna o índice o dado desejado.
});
console.log(list3_3);

// Outro exemplo:

let char = [
    {id: 1, firstName: 'Mikael', lastName: 'Jackson'},
    {id: 2, firstName: 'Bob', lastName: 'Marley'},
    {id: 3, firstName: 'John', lastName:'Lennon'},
    {id: 4, firstName: 'Fredy', lastName: 'Mercuri'},
    {id: 5, firstName: 'Elvis', lastName: 'Presley'}
];

let person = char.find(function(name) {
    return (name.lastName == 'Lennon') ? true : false;
});

result_person = person;

console.log(result_person);

let index_person = char.findIndex(function(index) {
    return (index.firstName == 'Elvis') ? true : false;
});

result_index = index_person;

console.log(result_index);

// ------------------------------------------------------------------------------------------------------------------

