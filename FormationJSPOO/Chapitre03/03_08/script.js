function Employee (firstName, lastName, country='Belgium', baseSalary=1500){
    let hireDate = new Date();
    let calculateSalary = function (){
        var today = new Date();
        return baseSalary + (baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01));
    }

    this.baseSalary = baseSalary;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    };
    this.getSalary = function(){
        return calculateSalary();
    };
    this.getHireDate = function(){
        return hireDate;
    }
}

let employee = new Employee('Hans', 'Surless', 'France');

console.log(employee.getHireDate());