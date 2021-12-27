export class Person {
    constructor(firstName, lastName, country='Belgium'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    sayHello(){
        return `${this.firstName} vous dit bonjour !`;
    }
}