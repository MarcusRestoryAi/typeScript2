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
        return `${this.name} makes a sound.`;
    }
    info() {
        return `${this.name} is a ${this.age} year old ${this.spieces}.`;
    }
    changeName(newName) {
        this.name = newName;
        return this.name;
    }
}
exports.Animal = Animal;
