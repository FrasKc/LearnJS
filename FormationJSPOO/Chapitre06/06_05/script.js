
// function Person (firstName, lastName, country='Belgium'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.country = country;
// };
// Person.prototype.logThis = function(){
//     console.log(this);
// }

class Person {
    constructor(firstName, lastName, country='Belgium'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    logThis(){
        console.log(this);
    }
}

let person = new Person('Damien', 'Bruyndonckx');

//method call
person.logThis();
let myFunct = person.logThis;
//console.log(myFunct);
//function call
myFunct();