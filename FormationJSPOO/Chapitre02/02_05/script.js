let employee = {
    firstName : 'Damien',
    lastName : 'Bruyndonckx',
    country : 'Belgium',
    sayHello : function(){
        return `${this.firstName} vous dit bonjour !`;
    }
};

for (const prop in employee){
    console.log(`La valeur de la propriété ${prop} est : ${employee[prop]}.`);
}