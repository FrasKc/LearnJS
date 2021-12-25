function Person(){

}
Person.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};
function Employee (firstName, lastName, country='Belgium', baseSalary=1500){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.baseSalary = baseSalary;
};

function Customer (firstName, lastName, customerId, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.customerId = customerId;
};

Employee.prototype = new Person();
Customer.prototype = new Person();
let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');
let customer = new Customer('Hans', 'Surless', 001);


console.log(employee.sayHello());
console.log(customer.sayHello());