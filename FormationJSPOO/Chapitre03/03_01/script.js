function createEmployee(firstName, lastName, country) {
    return {
        firstName : firstName,
        lastName : lastName,
        country : country,
        sayHello : function(){
            return `${this.firstName} vous dit bonjour !`;
        }
    };
}

let employee1 = createEmployee('Célian', 'Frasca', 'France');
console.log(employee1.sayHello());
