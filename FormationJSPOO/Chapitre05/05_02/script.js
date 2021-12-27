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
    Person.call(this, firstName, lastName, country='Belgium');
    this.customerId = customerId;
};

Employee.prototype = new Person();
Customer.prototype = new Person();
let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');
let customer = new Customer('Hans', 'Surless', 001);


console.log(employee.sayHello());
console.log(customer.sayHello());