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


let person = new Person('Damien', 'Bruyndonckx');
console.log(person);
