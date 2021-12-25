function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}
let employee1 = new Employee('Damien', 'Bruyndonckx', 'Belgium');
let employee2 = new Employee('Hans', 'Surless', 'France');

console.log(employee1);
console.log(employee2);