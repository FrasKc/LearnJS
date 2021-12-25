let employee = {
    firstName : 'Damien',
    lastName : 'Bruyndonckx',
    country : 'Belgium',
    sayHello : function(){
        console.log(`${this.firstName} vous dit bonjour !`);
    }
}

console.log(employee);
