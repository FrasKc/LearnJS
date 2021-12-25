import {Person} from './person.js';

export class Employee extends Person {
    constructor(firstName, lastName, baseSalary, country){
        super(firstName, lastName, country);
        this.baseSalary = baseSalary;
    }
}