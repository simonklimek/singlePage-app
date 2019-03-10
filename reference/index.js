const jewperson = require('./reference/person.js');
const Person = require('./reference/person.js');

const person1 = new Person('Lukasz Bialojan', 28);

console.log(jewperson.name);

person1.greeting();