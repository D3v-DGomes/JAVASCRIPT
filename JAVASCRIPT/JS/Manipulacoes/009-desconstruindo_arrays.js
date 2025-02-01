let info = ['David Gomes', 'David', 'Gomes', '@dgomess_'];


// Desconstruindo todos os itens:

let [fullName, firstName, lastName, instagram] = info;
console.log(fullName, firstName, lastName, instagram);


// Desconstruindo itens específicos:

let [fullName_1, , , instagram_1] = info;
console.log(fullName_1, instagram_1);


// Criando um Array e desconstruindo em seguida:

let list = [color, numbers, nickName] = ['Azul', 23, 'Angelo'] 
console.log(color, numbers, nickName);


// Desconstruindo um array usando função:

function toCreate() {
    return  [1, 2, 3];
}

let [a, b, c] = toCreate();

console.log(a, b, c);