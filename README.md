# Testing Typescript Types

Lost confidence in types you created? You came to the right place.

## What

A library for testing very complex types:
with generics, unions, intersections, conditionals, inferings etc.

## Why

You don't need to test if primitive types like `string` or `boolean` work correctly. Because they were tested by the TypeScript team. Now when you create ultra-complex type you are not that sure about type working as intended anymore.

## Who

For those typescript developers who want to be sure that the type they created works as expected.

## Example

Below is the structure of test files.

```shell
test
|__qur-typetest
   |__file1.ts
   |__file2.ts
   |__file3.ts
```

For simplicity we show example with simple types.

*file1.ts:*

```ts
const str: string = "foo"
```

*file2.ts:*

```ts
// tt:throws:Type '1' is not assignable to type 'string'.
const str: string = 1
```

*file3.ts:*

```ts
// tt:throws:Foo some wrong error message
const str: string = 1
```

Note: each test file should have at least one `export` or `import` expression. This way Typescript compiler would consider those files as modules, i.e. isolated code blocks. Otherwise for the example above `tsc` would generate errors `Cannot redeclare block-scoped variable 'str'`. If you don't have any `export` or `import` then simply add this in the end of the file:

```ts
export {}
```

**Result:**

```shell
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

```shell
npm install @qur/typetest --save-dev
```

Add `test/qur-typetest` to the `exclude` option of your `tsconfig.json`

```json
"compilerOptions": {}
"exclude": [
  "test/qur-typetest"
]
```

## Usage

Add a script to package.json

```json
"scripts": {
  "typetest": "qur-typetest"
}
```

Do the following

```shell
npm run qur-typetest -- init
echo "const str: string = 1" > test/qur-typetest/myTypeTest.ts
npm run qur-typetest
```

## CI

In order to include types testing to your Continuous Integration process,
you should run `typetest` with other tests. Your `test` script in `package.json` can
look like this:

```json
"scripts": {
  "test": "mocha && typetest"
}
```

## TODO

- [x] Testing types
- [ ] tests of this very library
- [ ] prettier errors
- [ ] Cli command "init" to create test/qur-typetest folder
- [ ] Cli command "create" to create test files

## FAQ

### Why should I add at least one `export/import` to a test file?

Because otherwise typescript thinks your files are parts of one code block, not an isolated module. Presence of `export/import` make typescript think that the file is a module and thus, it is isolated. You can omit using `export/import` until you actually encounter the described problem.

### Name

Why "qur-typetest" and not just "typetest"? Because "qur" is going to be an ecosystem of libraries, it is work in progress now. Also this is done in order to avoid collisions with probably existing "test/typetest" folders. Also, npm just not allowed to create "typetest" named library.