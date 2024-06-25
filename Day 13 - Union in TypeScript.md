# Union Type in TypeScript

Union Types in TypeScript allow a variable to have multiple types, enabling flexibility when a value can be one of several types. This is denoted using the | symbol between types in a type declaration. For example, number | string indicates a variable that can hold either a number or a string value.

## Example

```typescript
// Variable that can be either a number or a string
let myVar: number | string;

myVar = 10; // Valid
myVar = "Hello"; // Valid
myVar = true; // Error: Type 'boolean' is not assignable to type 'number | string'
```

Union Types are useful for scenarios where a function or variable needs to handle different types of input without explicitly specifying each type separately.
