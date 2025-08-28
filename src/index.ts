function greet(firstName: string, lastName: string): string {
    return `Hello, ${firstName} ${lastName}!`;
}

console.log(greet("Chas", "School"));

const myFirstName: string = "Marcus";
const myLastName: string = "Henriksson";
console.log(greet(myFirstName, myLastName));