const animal = require('../dist/modules/animal');

describe('Animal Class', () => {
    let cat;
    let dog;
    beforeEach(() => {
        cat = new animal.Animal('Whiskers', 3, 'Cat', true);
        dog = new animal.Animal('Rex', 5, 'Dog', true);
    }
    );

    test('should create an animal with correct properties', () => {
        expect(cat.name).toBe('Whiskers');
        expect(cat.age).toBe(3);
        expect(cat.spieces).toBe('Cat');
        expect(cat.isKind).toBe(true);
    });
    test('should return correct sound from makeSound method', () => {
        expect(cat.makeSound()).toBe('Whiskers makes a sound.');
        expect(dog.makeSound()).toBe('Rex makes a sound.');
    });
    test('should return correct info from info method', () => {
        expect(cat.info()).toBe('Whiskers is a 3 year old Cat.');
        expect(dog.info()).toBe('Rex is a 5 year old Dog.');
    });

    test('should change name correctly using changeName method', () => {
        cat.changeName('Mittens');
        expect(cat.name).toBe('Mittens');
        dog.changeName('Buddy');
        expect(dog.name).toBe('Buddy');
    });
});