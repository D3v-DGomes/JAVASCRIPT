let person = {
    firstName: 'David',
    lastName: 'Silva',
    age: 95,
    social: {
        instagram: {
            url: '@dsilva_',
            followers: 1564
        },
        facebook: {
            id: 'David S.',
            numberOfPublications: 2301
        }
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());


// Melhor maneira de desconstruir um objeto:

let {firstName: nome, lastName: sobrenome, age: idade = 0} = person;    // estrutura: (objeto: novo nome da variável = valor da variável caso o objeto esteja vazio)
console.log(nome, sobrenome, idade);


let {firstName, lastName, social:{instagram:{url:instagram}}, social:{facebook}} = person;
console.log(firstName, lastName, instagram, facebook);



// Desconstruindo usando parâmetros:

function getFullName({firstName = 'Sem nome', lastName = 'Sem sobrenome'}) {
    return `${firstName} ${lastName}`;
};


console.log(getFullName(person));

function getFullName_1({age, social:{facebook:{id: facebook}}, social:{instagram:{url:instagram}}}) {
    return `Idade: ${age}, Facebook: ${facebook}, Instagram: ${instagram}`;
};

console.log(getFullName_1(person));
