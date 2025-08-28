//Importera in Animal klassen från animal.ts filen
import {Animal} from './modules/animal';

//Skapa en instans av Animal klassen
const cat1 = new Animal("Whiskers", 3, "Cat");

console.log(cat1);

cat1.info();

console.log(cat1.name);
cat1.name = "Mittens";
console.log(cat1.name);

//Create a new obejct from the Animal class
const dog1 = new Animal("Buddy", 5, "Dog");

cat1.makeSound();
dog1.makeSound();