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

let employee1 = createEmployee('Damien', 'Bruyndonckx');
console.log(employee1);

function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

let employee2 = new Employee('Hans', 'Surless', 'France');
console.log(employee2);