# Testing types - Proof of Concept

This library has as its goal testing very complex types:
conditional types, inferred etc.

Below is the structure of test files.

```
test
|__qur-typetest
   |__file1.ts
   |__file2.ts
```

For simplicity we show example with simple types.

*file1.ts:*
```ts
  const: string = "foo"
```

*file2.ts:*
```ts
  // tt:throws:Type '1' is not assignable to type 'string'.
  const: string = 1
```

**Result:**
```
  ✓ test/qur-typetest/file1.ts
  ✓ test/qur-typetest/file2.ts
  2/2 passed
```
## Install

```
  npm install ...
```

add to tsconfig.json:

```
  "exclude": [
    "test/qur-types"
  ]
```

TODO
<!-- 

install:




https://github.com/Microsoft/vscode/issues/53944 -->