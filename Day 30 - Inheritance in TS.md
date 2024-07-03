# What is Inheritance?

Inheritance in TypeScript allows one class (the child class) to inherit properties and methods from another class (the parent class). This promotes code reuse and supports the concept of hierarchical classification.

## Creating Parent Class

Let's create a parent class called Animal with properties and a method:

```typescript
// Animal.ts
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string): void {
        console.log(`${this.name} eats ${food}.`);
    }
}

export default Animal;
```

## Creating Child Class

Now, create a child class called Dog that inherits from Animal and adds its own unique behavior:

```typescript
// Dog.ts
import Animal from './Animal';

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark(): void {
        console.log(`${this.name} barks loudly.`);
    }
}

export default Dog;
```

## Using Inheritance

Finally, let's use these classes in a TypeScript file to demonstrate inheritance:

```typescript
// index.ts
import Animal from './Animal';
import Dog from './Dog';

// Create an instance of Animal
let myAnimal = new Animal('Max');
myAnimal.eat('bones');

// Create an instance of Dog
let myDog = new Dog('Buddy', 'Labrador');
myDog.eat('meat');
myDog.bark();
```
