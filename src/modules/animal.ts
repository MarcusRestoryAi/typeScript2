class Animal {
  name: string;
  age: number;
  spieces: string;
  isKind: boolean = true;
  constructor(name: string, age: number, spieces: string) {
      this.name = name;
      this.age = age;
      this.spieces = spieces;
  }
  makeSound(): void {
      console.log(`${this.name} makes a sound.`);
  }

  info(): void {
      console.log(`${this.name} is a ${this.age} year old ${this.spieces}.`);
  }
}

//module.exports = Animal;
export {Animal};