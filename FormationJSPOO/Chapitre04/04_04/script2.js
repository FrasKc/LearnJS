function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

let employee = new Employee('Hans', 'Surless', 'France');