function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}

Employee.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};


let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');

Employee.prototype.sayGoodbye = function(){
    return `${this.firstName} vous dit au revoir !`;
};

console.log(employee.sayHello());
console.log(employee.sayGoodbye());