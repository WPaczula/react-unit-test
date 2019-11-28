# How to test containers?

To test components logic, which is wrapped by some container, you should find it first. If you use `mount` just call a `find` function.

You can do that using `shallow` as well. You have to use `dive()` through all the containers up to the component you are looking for. To see in which component you're in use mentioned `debug()` function.

# How to mock a container to prevent using some heavy functions?

To mock a module you can use `jest.mock('path/to/the/module', () => mock)`. Function passed as the second argument must be inline. In case of using some outer parameters use `mock` word before the name of a variable. Otherwise you will see:

```
The modue factory of jest.mock is not allowed to reference any out-of-scope variables.

NOTE: This is a precaution to guard against uninitialized mock variables. If it is ensured that the mock is required lazily, variable names prefixed with `mock` (case insensitive) are permitted.
```

Take care of your mock inicialisation when running a test.

# What should I remember when mocking modules?

When creating mocks, remember about reseting them before each test. To do so use `beforeEach(fn)`. When using a function as a mock you can use `mockRestore`, to reset mock and loose its implementation if it was specified. To remember the implementation use `mockReset`.
