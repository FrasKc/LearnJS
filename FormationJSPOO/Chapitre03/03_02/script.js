function createEmployee (firstName, lastName, country){
    return {
        firstName,
        lastName,
        country,
        sayHello : function(){
            return `${this.firstName} vous dit bonjour !`;
        }
    };
}

let employee1 = createEmployee('Damien', 'Bruyndonckx', 'Belgium');
console.log(employee1);

function Employee(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

let employee2 = new Employee('Célian', 'Frasca', 'France');
console.log(employee2.sayHello());