# TypeScript `rootDir` and `outDir` Configuration

In TypeScript projects, `rootDir` and `outDir` are configurations in `tsconfig.json` that help organize and manage TypeScript source files and their compiled JavaScript output.

## `rootDir` Configuration

The `rootDir` option specifies the root directory of TypeScript source files (`*.ts` and `*.tsx`). It is used to structure how TypeScript files are found within a project. TypeScript compiler considers this directory as the base when resolving module names.

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

In this example, "rootDir": "./src" specifies that TypeScript source files are located in the src directory. This setting helps TypeScript compiler to resolve module imports relative to the src directory.

## outDir Configuration

The outDir option specifies the output directory for compiled JavaScript files (*.js). It determines where TypeScript compiler should emit compiled JavaScript files relative to the rootDir.

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

In this example, `"outDir": "./dist"` specifies that compiled JavaScript files should be emitted into the `dist` directory. The TypeScript compiler will replicate the directory structure from `rootDir` under `outDir`.

### Output in a Specific Folder

To ensure that output files are consistently directed to a specific folder (`outDir`):

1. **Configure `rootDir`:** Set `"rootDir"` to the directory where your TypeScript source files are located.

2. **Configure `outDir`:** Set `"outDir"` to the directory where you want the TypeScript compiler to emit compiled JavaScript files.

By using `rootDir` and `outDir` in `tsconfig.json`, you can effectively manage the organization and compilation of TypeScript projects, keeping source and output files structured and separated.
