# Function Types in TypeScript

## What is a Function Type?

In TypeScript, a function type describes the shape of a function. It specifies the parameters the function expects, their types, and the type of the value that the function returns.

## Why Do We Need Function Types?

Function types allow TypeScript to enforce type checking when functions are assigned to variables, passed as arguments to other functions, or used as return types from other functions. This helps catch errors early in development and improves code reliability by ensuring that functions are used correctly across different parts of the codebase.

## How to Define Function Types

Function types can be defined using TypeScript's syntax for function declarations. Here's a basic example:

```typescript
// Defining a function type
type AddFunction = (a: number, b: number) => number;

// Example usage
let add: AddFunction = (x, y) => x + y;
console.log(add(2, 3)); // Outputs: 5
```

## In this example

- `AddFunction` is a **type alias** that defines a function type.
- `(a: number, b: number) => number` specifies that `AddFunction` represents a function that:
  - Takes two parameters (`a` and `b`) of type `number`.
  - Returns a value of type `number`.
