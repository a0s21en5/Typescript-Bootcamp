# Using and Compiling Multiple Files in TypeScript

## Compiling Multiple Files

When working with TypeScript projects that span across multiple files, you typically compile them into JavaScript using the TypeScript compiler (`tsc`). Here's how you can do it:

1. **Create Your TypeScript Files**: Organize your TypeScript files (`*.ts`) into a directory structure that suits your project.

2. **Compile All TypeScript Files**: Navigate to the root directory of your project in the terminal and run the TypeScript compiler (`tsc`) without specifying any files. This will compile all TypeScript files it finds according to the settings in `tsconfig.json`.

    ```bash
    tsc
    ```

    By default, `tsc` looks for `tsconfig.json` in the current directory.

3. **Compile Specific TypeScript Files**: If you want to compile only specific files, you can specify them directly:

    ```bash
    tsc file1.ts file2.ts
    ```

## Generating `tsconfig.json` File

The `tsconfig.json` file is used to specify compiler options and project settings for TypeScript. To generate a basic `tsconfig.json` file, you can run:

```bash
tsc --init
```

This command generates a tsconfig.json with default settings. You can further customize it according to your project requirements.

## Using Watch Mode

Watch mode (--watch or -w) in TypeScript allows the compiler to watch for changes in your TypeScript files and recompile them automatically when a change is detected. To use watch mode:

```bash
tsc --watch
```

```bash
tsc -w
```
