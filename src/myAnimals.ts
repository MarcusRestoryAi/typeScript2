//Importera in Animal klassen från animal.ts filen
import {Animal} from './modules/animal';

//Skapa en instans av Animal klassen
const cat1 = new Animal("Whiskers", 3, "Cat");

console.log(cat1);
cat1.makeSound();
cat1.info();