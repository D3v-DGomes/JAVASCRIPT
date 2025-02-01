/*

MÉTODO INCLUDES:

É utilizado para determinar se um array ou uma string contém um determinado valor. 
Ele retorna true se o valor for encontrado, e false caso contrário. Esse método é muito útil 
para verificar a presença de um elemento sem precisar iterar manualmente pelo array ou string.

*/

let list = ['Ovo', 'Carne', 'Feijão', 'Arroz', 'Macarrão'];
let finalList = list.map(element => element.toLowerCase());

console.log('-'.repeat(5), finalList.includes('carne'), '-'.repeat(5));
