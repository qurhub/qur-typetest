# Testing Typescript Types

**What**
A library for testing very complex types:
with generics, unions, intersections, conditionals, inferings etc.

**Who**
For those typescript developers who want to be sure that the type they created works as expected.

## Example
Below is the structure of test files.

```
test
|__qur-typetest
   |__file1.ts
   |__file2.ts
   |__file3.ts
```

For simplicity we show example with simple types.

*file1.ts:*
```ts
export const str: string = "foo"
```

*file2.ts:*
```ts
// tt:throws:Type '1' is not assignable to type 'string'.
export const str: string = 1
```

*file3.ts:*
```ts
// tt:throws:Foo some wrong error message
export const str: string = 1
```

**Result:**
```
  ✓ test/qur-typetest/file1.ts
  ✓ test/qur-typetest/file2.ts
  ✗ test/qur-typetest/file3.ts

  test/qur-typetest/file3.ts was expected to fail with a message

    Foo some wrong error message

  but failed with

    Type '1' is not assignable to type 'string'.

  at test/qur-typetest/file3.ts:2:55

  1/3 failed
  2/3 passed
```
## Install

```
npm install typetest
```

In your `tsconfig.json`:
```
"compilerOptions": {...}
"exclude": [
  "test/qur-typetest" // add this
]
```

## Usage
1. 

```
// package.json
"scripts": {
  ...
  "typetest": "typetest"
  ...
}
```

2.
```shell
mkdir test
mkdir test/qur-typetest
echo "const str: string = 1" > test/qur-typetest/myTypeTest.ts
npm run typetest
```

## TODO
[x] Testing types
[ ] tests of this very library
[ ] prettier errors
[ ] Cli command "init" to create test/qur-typetest folder
[ ] Cli command "create" to create test files

## FAQ
**Why `export` was used in the example?**
Because otherwise typescript thinks your files are parts of one code flow. Single `export` or `import` make typescript think that the file is a module and thus, it is isolated. You can omit using `export` until you actually encounter described problem.

**Name**
Why "qur-typetest" and not just "typetest"? Because "qur" is going to be an ecosystem of libraries, it is work in progress now. Also this is done in order to avoid collisions with probably existing "test/typetest" folders.