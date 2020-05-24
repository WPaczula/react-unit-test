# How to create a test file, so it's run?

Just create a file with a path like:

```
*/tests/*.test.js
```

# How to run tests and what are useful params?

## Running tests

To run tests once just run jest test runner. In most cases it's `test` command, so you can use one of below commands depending on the package manager of your preference:

```
npm run test
yarn test
```

In the CRA it will run the watch mode by default. When it's done you can target some specific file by writing "p" and setting up the test pattern.

# What is the boilerplate of a test file?

Most of the tests consist of a description of the module in `describe` function, description of a test case in `it` function, which ends with assertion done by `expect` function. You can find an example below:

```
import superFunction from '..';

describe('superFunction', () => {
    it('should do this and that.', () => {
        expect(superFunction()).toBe(Number.infinity);
    });
});
```

To assert you can use functions like:

- `toBe` - value/reference equality,
- `toEqual` - deep equality for example for arrays/objects,
- ...and more like `toBeNull`, `toBeDefined`.

To negate you can use `not` before the function like:

```
expect(10).not.toEqual(5);
```
