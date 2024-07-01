# TypeScript Target Configuration

In TypeScript, the `target` configuration setting specifies the version of ECMAScript (JavaScript) that the TypeScript compiler should target when generating JavaScript files.

## What is Target Configuration?

The `target` configuration in `tsconfig.json` determines the ECMAScript version compatibility for the compiled JavaScript output. TypeScript supports targeting various ECMAScript versions like ES5, ES6 (ES2015), ESNext, etc.

## Use of Target

The `target` setting ensures that the TypeScript compiler generates JavaScript code that is compatible with the specified ECMAScript version. This allows developers to leverage modern JavaScript features while ensuring backward compatibility for older browsers or environments.

## Example

Here’s an example of configuring the `target` in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

## In this example

- `"target": "es5"` specifies that the TypeScript compiler should generate JavaScript code compatible with ECMAScript 5.
- `"outDir": "./dist"` specifies the output directory for compiled JavaScript files.
- `"rootDir": "./src"` specifies the root directory where TypeScript source files (\*.ts) are located.

By setting `"target": "es5"`, TypeScript will compile any modern JavaScript syntax used in the TypeScript source code into ECMAScript 5-compatible JavaScript. This ensures broader compatibility across different browsers and environments.
