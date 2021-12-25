function createEmployee (firstName, lastName, country){
    return {
        firstName,
        lastName,
        country,
        sayHello : function(){
            return `${this.firstName} vous dit bonjour !`;
        }
    };
}

let employee1 = createEmployee('Damien', 'Bruyndonckx', 'Belgium');
console.log(employee1);

