# Enum in TypeScript

An enum in TypeScript is a collection of related constants, represented as a distinct type. Enums allow us to define a set of named constants, which can be assigned numeric or string values. They provide a way to organize a group of constants that are logically related, making code more readable and reducing the chances of errors caused by using magic strings or numbers directly in code.

Enums are especially useful when there's a need to define a set of options or states that an object or variable can have. They make it easy to document and understand the possible values that a variable can take, enhancing code clarity and maintainability.

In TypeScript, enums support both numeric and string values, and they can be accessed using their names (as symbols) rather than their underlying values, which adds to the clarity of code.

## Example Usage

```typescript
// Define an enum named Role with string values
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// Usage example
let userRole: Role = Role.Admin;

if (userRole === Role.Admin) {
  console.log("User is an admin.");
}
