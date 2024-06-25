# unknown Type in TypeScript

## What is `unknown` Type?

In TypeScript, `unknown` is a type that represents values whose type we do not know or cannot determine statically during compilation. It is the type-safe counterpart of the `any` type because variables of type `unknown` force us to perform type checks before performing operations with them.

## How is `unknown` Different from `any`?

- **Type Safety:** Variables of type `any` can be assigned any value and can be freely used without TypeScript type checking. Conversely, variables of type `unknown` require type checking before they can be assigned, invoked, or manipulated in any significant way.
  
- **Type Assertions:** Variables of type `unknown` must be type asserted before they can be used as a specific type. This enforces type safety and prevents unintentional runtime errors that may occur when using `any`.

## How to Use `unknown`

### Type Assertions

To use a variable of type `unknown` as a specific type, you need to assert or narrow its type. Here's how you can do it:

```typescript
let userInput: unknown;
let userName: string;

// Type assertion
if (typeof userInput === 'string') {
    userName = userInput; // Now TypeScript knows userInput is a string
}

// Type assertion using 'as' keyword
let maybeNumber: unknown = 5;
let myNumber: number = maybeNumber as number; // Type assertion to number
