// function Person(firstName, lastName, country='Belgium'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.country = country;
// }
// Person.prototype.sayHello = function(){
//     return `${this.firstName} vous dit bonjour !`;
// }

class Person {
    constructor(firstName, lastName, country='Belgium'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    sayHello() {
        return `${this.firstName} vous dit bonjour !`;
    }
}

let person = new Person('Célian', 'Frasca', 'France');
console.log(typeof Person);