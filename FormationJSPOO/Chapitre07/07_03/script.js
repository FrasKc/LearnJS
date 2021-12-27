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
    #baseSalary;
    constructor(firstName, lastName, baseSalary, country='Belgium'){
        super(firstName, lastName, country);
        this.#baseSalary = baseSalary;
    }
    doubleSalary(){
        return this.#baseSalary * 2;
    }
}

let employee = new Employee('Damien', 'Bruyndonckx', 1500);
console.log(employee.doubleSalary());