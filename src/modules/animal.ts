class Animal {
    //attributes
  name: string;
  age: number;
  spieces: string;
  isKind: boolean = true;
  attributIsNull: null = null; //useless attribute

  //Konstriuktor
  constructor(name: string, age: number, species: string, isKind: boolean = true) {
      this.name = name;
      this.age = age;
      this.spieces = species;
      this.isKind = isKind;
  }

  makeSound(): string
  {
      return `${this.name} makes a sound.`;
  }

        info(): string {
      return `${this.name} is a ${this.age} year old ${this.spieces}.`;
  }

  changeName (newName: string): string {
      this.name = newName;
      return this.name;
  }
}

//module.exports = Animal;
export {Animal};