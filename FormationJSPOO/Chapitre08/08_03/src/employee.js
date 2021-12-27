import {Person} from './person.js';

const _baseSalary = Symbol();

export class Employee extends Person {
    constructor(firstName, lastName, baseSalary, country){
        super(firstName, lastName, country);
        this[_baseSalary] = baseSalary;
    }
    doubleSalary(){
        return this[_baseSalary] *2;
    }
}