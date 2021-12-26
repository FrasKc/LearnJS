function Employee (firstName, lastName, country='Belgium', base=1500){
    let hireDate = new Date();
    let calculateSalary = function (){
        var today = new Date();
        return baseSalary + (baseSalary * ((today.getYear() - hireDate.getYear()) * 0.01));
    }

    let baseSalary = base;

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.sayHello = function(){
        return `${this.firstName} vous dit bonjour !`;
    };
    Object.defineProperty(this, 'hireDate', {
        get : function(){
            return hireDate;
        }
    });
    Object.defineProperty(this, 'salary', {
        get : function(){
            return calculateSalary();
        }
    });
    Object.defineProperty(this, 'baseSalary', {
        get : function(){
            return baseSalary;
        }, 
        set : function(newSalary){
            if(typeof(newSalary) == 'number' && newSalary > baseSalary){
                baseSalary = newSalary; 
            } else {
                console.log('Le nouveau salaire n\'est pas correct.');
            }
        }
    })
}

let employee = new Employee('Hans', 'Surless', 'France');
employee.baseSalary = 2000;
console.log(employee.salary);