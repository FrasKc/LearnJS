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
    constructor(firstName, lastName, baseSalary, country='Belgium'){
        super(firstName, lastName, country='Belgium');
        this.baseSalary = baseSalary;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, customerId, country='Belgium'){
        super(firstName, lastName, country='Belgium');
        this.customerId = customerId;
    }
}

let employee = new Employee('Damien', 'Bruyndonckx', 1500);
let customer = new Customer('Hans', 'Surless', 1);
console.log(employee.sayHello());
console.log(customer.sayHello());
