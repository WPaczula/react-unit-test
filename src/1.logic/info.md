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

## Test watch - how to speed up your work

It's the same kind of a parameter that wepback has - it turns *watch* mode. To run it use `--watchAll`:

```
npm run test -- --watchAll
yarn test --watchAll
```

## Running a single file

To run a single file just pass a regular expression, which describes the path to that file. You can find an example to tests containing *logic* part below:

```
npm run test -- logic
yarn test logic
```

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
- `toHaveBeenCalled` - mock function was called,
    - `toHaveBeenCalledTimes` - mock function was called x times,
    - `toHaveBeenCalledWith` - mock function was called with some argument.
- ...and more like `toBeNull`, `toBeDefined`.

To negate you can use `not` before the function like:
```
expect(10).not.toEqual(5);
```

# Function mocking

To create a function mock you can call `jest.fn()`. Then you can check, if it was called using mentioned `toHaveBeenCalled...` functions. You can specify a value returned by the mock using:

```
const mockReturningFive = jest.fn().mockReturnValue(5);
```

Or specify it's implementation:

```
const toBoolean = jest.fn().mockImplementation(value => !!value)
```

