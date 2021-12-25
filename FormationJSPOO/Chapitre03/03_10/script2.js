let employee = {
    firstName : 'Damien',
    lastName : 'Bruyndonckx',
    country : 'Belgium',
    sayHello : function(){
        console.log(this)
        console.log(`${this.firstName} vous dit bonjour !`);
    }
}

let customer = {
    firstName : 'Hans',
    lastName : 'Surless',
    country : 'Belgium'
}
