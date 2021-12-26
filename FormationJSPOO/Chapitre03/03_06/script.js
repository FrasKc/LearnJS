function Employee (firstName, lastName, country='Belgium', baseSalary=1500){
    let hireDate = new Date();
    this.baseSalary = baseSalary;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    }
    let calculateSalary = function() {
        var today = new Date();
        return this.baseSalary + (this.baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01))
    }
}


let employee = new Employee('Hans', 'Surless', 'France');
console.log(employee.calculateSalary());