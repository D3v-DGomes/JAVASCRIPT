let person = {
    firstName: 'David',
    lastName: 'Silva',
    age: 25,
    social: {
        instagram: '@dsilva_',
        facebook: 'David Silva'
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName);