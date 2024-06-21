## Array Type in TypeScript

In TypeScript, arrays are a fundamental data structure used to store a collection of elements. TypeScript, being a superset of JavaScript, provides strong typing for arrays, allowing you to define the types of elements that an array can contain.

### Declaring Arrays

You can declare arrays in TypeScript using two syntaxes:

1. **Using square brackets notation:**

   ```typescript
   let fruits: string[] = ['Apple', 'Banana', 'Orange'];
   ```

2. **Using the generic array type:**

    ```typescript
    let fruits: Array<string> = ['Apple', 'Banana', 'Orange'];
    ```

    Both syntaxes are equivalent, but the string[] notation is more commonly used and more concise.

### Initializing Arrays

- Arrays in TypeScript can be initialized in several ways:

  - <b>Using a literal array: let fruits = ['Apple', 'Banana', 'Orange'];</b>
  - <b>Using the Array constructor: let numbers = new Array<number>(1, 2, 3, 4, 5);</b>
  - <b>Using the Array constructor with a length: let emptyArray = new Array<number>(10);</b>
    - This initializes an array with a length of 10, but all elements are initially undefined.

### Accessing Array Elements

Arrays in TypeScript, like JavaScript, are zero-indexed. You can access elements using square bracket notation:

```typescript
let fruits: string[] = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Outputs: 'Apple'
```

### TypeScript Array Methods and Properties

TypeScript arrays inherit all the properties and methods from JavaScript arrays. Some common methods include:

- **push, pop**: Add/remove elements from the end of the array.
- **shift, unshift**: Add/remove elements from the beginning of the array.
- **slice**: Returns a shallow copy of a portion of an array into a new array object.
- **forEach, map, filter, reduce**: Higher-order functions for iterating and manipulating arrays.

### Array Type Annotations

You can specify the type of elements an array should contain using type annotations:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];
let mixedArray: (string | number)[] = ['Apple', 1, 'Banana', 2];
```

### Readonly Arrays

You can also create arrays where the values cannot be modified once they are set:

```typescript
let readOnlyArray: readonly number[] = [1, 2, 3];
```

### Tuple Types

In TypeScript, tuples are arrays with a fixed number of elements where each element has a specific type. They are defined using square brackets and specify the types for each position in the array:

```typescript
let tuple: [string, number] = ['Alice', 25];
```
