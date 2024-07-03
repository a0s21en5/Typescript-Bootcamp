# Constructor and Shorthand Initialization in TypeScript

## Constructor

In TypeScript, a constructor is a special method that is automatically called when an instance of a class is created. It's typically used to initialize properties of the object being instantiated.

## Shorthand Initialization

Shorthand initialization is a convenient way to declare and initialize class properties directly within the constructor parameters, reducing the need for separate property declarations.

## Getting Property Value

To access the value of a property in TypeScript, you can simply use the dot notation (object.propertyName) on an instance of the class.

Example

```typescript
// Define a class with constructor and shorthand initialization
class Person {
    constructor(public name: string, public age: number) {
        // No need for separate this.name = name; this.age = age; declarations
    }
}

// Create an instance of the class
let person1 = new Person("Alice", 30);

// Accessing property values
console.log(person1.name); // Output: "Alice"
console.log(person1.age);  // Output: 30
```
