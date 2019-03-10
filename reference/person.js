
// MODULE WRAPPER FUNCTION
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename)

// JSON
const jewperson = {
    name: 'Simon Klimek',
    age: 28
}

// CLASS OBJECT
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.exports = jewperson;
// Uppdercase P we are exporting whole class
module.exports = Person;