# Mocking stuff

Jest has a mocking functionality built in so there's no need to install any additional packages. There are 3 most common scenarios connected with mocking:

- mocking functions
- mocking whole modules
- spying methods

## Mocking functions =>

To create a mock function you can use `jest.fn()`. It returns a mock which will monitor how many times it was fired and with what arguments. Most of the time you can use some expect extensions to assert the function calls. The most common are:

- `toHaveBeenCalled()` - checks if the function was called at all
- `toHaveBeenCalledWith(...args)` - checks if the function was called with some arguments
- `toHaveBeenCalledTimes(number)` - check if the function was called X number of times

Sometimes you'll need to setup the mock to work some way or return a specific value. To do it you can use `mockReturnValue(value)` and `mockImplementation(some function)`.

## Mocking modules

To mock the whole module you can use `jest.mock(pathToModule, () => mock)`. If the module uses `export default` the returned mock will be used as the default export. If the module uses named `export` return an object with the names as properties. The `jest.mock` call is hoisted so it will be fired before test imports, so imported module will already be a mock. There is an example of it in the code. If you want to get a part of mocked module use `jest.requireActual`.

Let's say you need to controll the mock from the test. You can use some variable which will be accessible to that mock through the closure. There is one thing done by jest to ensure, that you know what you are doing. This variable needs to be called `mock...`. Remember to restore your mocks each test so they have no connection to each other. Let's have a look at the example.

```
import someFunction from 'path';

const mockFunction = jest.fn();
jest.mock('path', () => mockFunction);

describe('someFunction', () => {
    beforeEach(() => {
        mockFunction.mockRestore();
    });

    it('can be mocked to return true.', () => {
        const expectedValue = true;
        mockFunction.mockReturnValue(expectedValue);

        const value = someFunction();

        expect(value).toBe(expectedValue);
    })
})
```

If a module will be mocked constantly in your test you can create a file with that mock so you don't need to implement it every time. It needs to be in the same folder as the imported file in the `__mocks__` folder. So it can look like so:

```
src
|
--- myModule
    |
    ---index.js
    ---__mocks__
       |
       ---index.js
```

To use the mock just use `jest.mock(path)` without the inline function with the implementation.

## Spying on methods

Let's say you want to see if the function was called, but not mock it completely with the `jest.fn()`. Like adding listeners to the window object. You can use `jest.spyOn(object, methodName)` to attach the spy to the method. It returns a spy object which you can check with assertions the same way `jest.fn()`.

## Let's see THE CODE 🚀
