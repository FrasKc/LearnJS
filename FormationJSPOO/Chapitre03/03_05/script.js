let employee = new Object();
let today = new Date('05 APR 1976');
let error = new Error('Il y a une erreur dans le script.');

let employee1 = createEmployee('Damien', 'Bruyndonckx');
let employee2 = new Employee('Hans', 'Surless', 'France');
let firstName = 'Damien';

console.log(firstName.constructor);


function createEmployee (firstName, lastName, country='Belgium'){
    return {
        firstName,
        lastName,
        country,
        sayHello : function(){
            return `${this.firstName} vous dit bonjour !`;
        }
    };
}

function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

