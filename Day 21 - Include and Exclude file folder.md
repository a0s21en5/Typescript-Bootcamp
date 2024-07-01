# TypeScript Include and Exclude

In TypeScript projects, you can configure which files and folders should be included or excluded from the compilation process using the `tsconfig.json` file.

## Exclude Files

To exclude specific files from compilation:

```json
{
  "compilerOptions": {
    "exclude": [
      "file1.ts",
      "file2.ts"
    ]
  }
}
```

Here, file1.ts and file2.ts will not be compiled.

## Exclude Folders

To exclude entire folders and their contents:

```json
{
  "compilerOptions": {
    "exclude": [
      "folder1",
      "folder2"
    ]
  }
}
```

In this case, folder1 and folder2 and all their contents will be excluded from compilation.

## Include Files

By default, all TypeScript files (*.ts,*.tsx) in the project directory and its subdirectories are included for compilation. However, you can explicitly include additional files using the include option:

```json
{
  "compilerOptions": {
    "include": [
      "src/**/*.ts"  // Include all TypeScript files under src directory
    ]
  }
}
```

Here, only TypeScript files under src directory and its subdirectories will be included.

## Include Folders

To include entire folders and their contents:

```json
{
  "compilerOptions": {
    "include": [
      "src",  // Include all TypeScript files in src directory and its subdirectories
      "tests" // Include all TypeScript files in tests directory and its subdirectories
    ]
  }
}
```

This configuration ensures that TypeScript files within src and tests directories and their subdirectories are included for compilation.

By using these exclude and include options in your tsconfig.json, you can fine-tune which files and folders TypeScript compiler considers during the build process.
