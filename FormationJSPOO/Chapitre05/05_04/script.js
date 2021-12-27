function Person(firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}
Person.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};
function Employee (firstName, lastName, country='Belgium', baseSalary=1500){
    Person.call(this, firstName, lastName, country='Belgium');
    this.baseSalary = baseSalary;
};

function Customer (firstName, lastName, customerId, country='Belgium'){
    Person.apply(this, [firstName, lastName, country='Belgium']);
    this.customerId = customerId;
};

function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Employee, Person);
extend(Customer, Person);
let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');
let customer = new Customer('Hans', 'Surless', 001);


console.log(employee);
console.log(customer);

let person = new Person();
console.log(employee.constructor);