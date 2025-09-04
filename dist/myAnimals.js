"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importera in Animal klassen från animal.ts filen
const animal_1 = require("./modules/animal");
//Skapa en instans av Animal klassen
const cat1 = new animal_1.Animal("Whiskers", 3, "Cat");
console.log(cat1);
console.log(cat1.info());
console.log(cat1.name);
cat1.name = "Mittens";
console.log(cat1.name);
//Create a new obejct from the Animal class
const dog1 = new animal_1.Animal("Buddy", 5, "Dog");
console.log(cat1.makeSound());
console.log(dog1.makeSound());
