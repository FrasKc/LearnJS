class Person {
    constructor(firstName, lastName, country='Belgium'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    sayHello(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, baseSalary, country){
        super(firstName, lastName, country);
        this.baseSalary = baseSalary;
    }
}

let employee = new Employee('Damien', 'Bruyndonckx', 1500);
console.log(employee);