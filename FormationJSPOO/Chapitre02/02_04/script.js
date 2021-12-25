let employee = {
    firstName : 'Damien',
    lastName : 'Bruyndonckx',
    country : 'Belgium',
    sayHello : function(){
        return `${this.firstName} vous dit bonjour !`;
    }
};

let method = 'sayHello';
console.log(employee[method]());

