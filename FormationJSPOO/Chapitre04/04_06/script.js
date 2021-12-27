function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}

Employee.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
};


Object.defineProperty(Employee.prototype, 'sayHello', {
    enumerable : false,
    configurable : false
});
let employee = new Employee('Damien', 'Bruyndonckx', 'Belgium');
console.log(Object.getOwnPropertyDescriptor(Employee.prototype, 'sayHello'));
console.log(Object.getOwnPropertyDescriptor(Employee.prototype, 'constructor'));
console.log(employee);

for (prop in employee) {
    console.log(prop);
}