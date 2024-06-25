# Void Function in TypeScript

## What does "void" mean?

In TypeScript, `void` is a data type that represents the absence of any type. It is used to indicate that a function does not return any value.

## How to Define Void

Void is used as the return type for functions that do not return a value. Here's how you define a void function in TypeScript:

```typescript
// Example of a void function
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
    // No return statement
}
```

In this example, void specifies that the greet function does not return a value.

## Use of Void

Void is particularly useful when you want to define functions that perform tasks without returning any meaningful result, such as logging messages, updating global state, or interacting with external systems.

## By Default, Void

If a function in TypeScript does not specify a return type explicitly and does not return any value, TypeScript infers its return type as void. For example:

```typescript
function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
    // No return statement
}
// TypeScript infers return type as void for sayHello function
```
