let employee = {
    firstName : 'Célian',
    lastName : 'Frasca'
};

console.log(employee);

employee.email = 'celian@gmail.com';
console.log(employee);

employee['country'] = 'France';
console.log(employee);

let prop = 'age';
employee[prop] = 19;
console.log(employee);

delete employee['email'];
delete employee.age;
console.log(employee);