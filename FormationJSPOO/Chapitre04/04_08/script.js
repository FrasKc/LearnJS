function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}

Employee.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};


let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');

console.log(employee.sayHello());