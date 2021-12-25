function Person(firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
}
Person.prototype.sayHello = function(){
    return `${this.firstName} vous dit bonjour !`;
}