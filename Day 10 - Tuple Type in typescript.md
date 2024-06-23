# Tuple Type in TypeScript

In TypeScript, a Tuple is like an array where the type of each element is known and fixed. Unlike arrays, Tuples have a specific number of elements, and each element's type is known in advance. This makes Tuples useful for representing fixed sets of data, such as a pair of values like [number, string].

## Example

```typescript
// Declare a tuple type
let employee: [number, string];

// Initialize it
employee = [1, "Steve"];

// Accessing elements
console.log(employee[0]); // Output: 1
console.log(employee[1]); // Output: Steve
```
