function Employee (firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
}

let employee = new Employee('Hans', 'Surless', 'France');
let emProto = Object.getPrototypeOf(employee);
let baseProto = Object.getPrototypeOf(emProto);

baseProto.toString.call(employee);
console.log(baseProto.toString.call(employee));