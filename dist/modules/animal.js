"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    //attributes
    name;
    age;
    spieces;
    isKind = true;
    attributIsNull = null; //useless attribute
    //Konstriuktor
    constructor(name, age, species, isKind = true) {
        this.name = name;
        this.age = age;
        this.spieces = species;
        this.isKind = isKind;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
    info() {
        console.log(`${this.name} is a ${this.age} year old ${this.spieces}.`);
    }
}
exports.Animal = Animal;
