let person = {
    firstName: 'David',
    lastName: 'Silva',
    age: 95,
    social: {
        instagram: '@dsilva_',
        facebook: 'David Silva'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName());

// Forma tradicional:

let firstName = person.firstName;
let lastName = person.lastName;
let age = person.age;

console.log(firstName, lastName, age);


// Melhor maneira de desconstruir um objeto:

let {firstName: nome, lastName: sobrenome, age: idade = 0} = person;    // estrutura: (objeto: novo nome da variável = valor da variável caso o objeto esteja vazio)

console.log(nome, sobrenome, idade);