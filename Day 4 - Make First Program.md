# Make First Program

## Step 1: Create TypeScript File

Create a TypeScript file (e.g., `app.ts`) in your project directory. Add the following TypeScript code:

```typescript
// app.ts
function greet(name: string) {
    return `Hello, ${name}!`;
}

let user = "Alice";
console.log(greet(user));
```

## Step 2: Generate JavaScript File

Compile the TypeScript file (app.ts) to generate JavaScript (app.js) using the TypeScript Compiler (tsc). Run the following command in your terminal:

```bash
tsc app.ts
```

This will create a JavaScript file (app.js) in the same directory.

## Step 3: Create an HTML File

Create an HTML file (e.g., index.html) in the same directory. Add the following code to include the JavaScript file (app.js):

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Example</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

## Step 4: Run Program on the Browser

Open index.html in your web browser. Open the browser console to view the output of your TypeScript program, which should display "Hello, Alice!".

## Notes

- Ensure TypeScript (tsc) is installed globally (npm install -g typescript).
- Adjust file names and paths according to your project structure.
- Use a local development server (e.g., VS Code Live Server extension) for better development experience, especially if you encounter CORS issues with file-based URLs.
