# Literals Type in TypeScript

Apply Values rather than apply types to a variable or parameter

```typescript
let Data:string | number = "Hello"
Let Data= "abc" | 123 = "abc"

// Variable `myVar` can only be assigned the string "Hello" or the number 123
let myVar: "Hello" | 123;

myVar = "Hello"; // Valid
myVar = 123; // Valid
myVar = "World"; // Error: Type '"World"' is not assignable to type '"Hello" | 123'
myVar = 456; // Error: Type '456' is not assignable to type '"Hello" | 123'
```
