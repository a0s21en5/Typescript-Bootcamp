# Type Alias in TypeScript

Type Aliases in TypeScript allow you to create a new name for any type. This helps in making your code more readable and reusable by giving meaningful names to complex types.

## Type Alias with Variable

You can use Type Aliases to define a custom name for a type, making it easier to understand and reuse throughout your codebase.

```typescript
// Define a type alias for a complex type
type Point = {
    x: number;
    y: number;
};

// Usage of the type alias
let p1: Point = { x: 10, y: 20 };
let p2: Point = { x: 5, y: 15 };
```

## Type Alias with Function Parameters

Type Aliases can also be used to simplify function parameter definitions, especially when dealing with complex or nested types.

```typescript
// Define a type alias for a callback function type
type Callback = (result: string | null, error?: string) => void;

// Usage of the type alias in a function
function fetchData(callback: Callback) {
    // Implementation to fetch data and invoke the callback
}

// Calling the function with the type alias
fetchData((result, error) => {
    if (error) {
        console.error("Error fetching data:", error);
    } else {
        console.log("Data fetched successfully:", result);
    }
});
```

Type Aliases improve code readability by abstracting complex types and providing meaningful names, making your TypeScript codebase more maintainable and easier to understand.
