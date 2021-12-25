function Employee (firstName, lastName, country='Belgium', baseSalary=1500){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.baseSalary = baseSalary;
}
Employee.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};

function Customer (firstName, lastName, customerId, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.customerId = customerId;
};
Customer.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};


let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');
let customer = new Customer('Hans', 'Surless', 001);


console.log(employee);
console.log(customer);