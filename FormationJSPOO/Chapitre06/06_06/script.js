class Person {
    constructor(firstName, lastName, country='Belgium'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    sayHello(){
        return `${this.firstName} vous dit bonjour !`;
    }
    static getAllFromUrl(url, callback){
        fetch(url)
        .then(answer => answer.json())
        .then(json => {
            let persons = [];
            json.map(person => persons.push(new Person(person.firstName, person.lastName, person.country)))
            callback(persons);
        });
    }
}

let person = new Person('Damien', 'Bruyndonckx');

Person.getAllFromUrl('persons.json', function(persons){
    persons.map(person => console.log(person.sayHello()))
});


