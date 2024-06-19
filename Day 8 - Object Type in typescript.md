# Object Type in TypeScript

In TypeScript, an object type defines the structure of an object by specifying the names and types of its properties. It allows developers to create complex data structures with specific shapes and ensures type safety when interacting with objects.

Example:

```typescript
// Defining an object type
type Car = {
    brand: string;
    year: number;
    isElectric: boolean;
    calculatePrice: () => number; // Method definition
};

// Using the defined object type
const myCar: Car = {
    brand: "Tesla",
    year: 2023,
    isElectric: true,
    calculatePrice: () => {
        // Example method implementation
        return 50000;
    }
};
```

In this example:

- Car is an object type that specifies properties (brand, year, isElectric) and a method (calculatePrice).

- myCar is an instance of type Car, ensuring it adheres to the defined structure and methods.

## Object types enhance TypeScript's static typing capabilities, facilitating better code organization and reducing runtime errors
