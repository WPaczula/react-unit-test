# Jak testować sagi?
# How to test sagas?

To test sagas you can use `redux-saga-test-plan` library. It allows writing saga scenarios and checks if they are true for a given action. A boilerplate for that test is given belos:

```
import { expectSaga } from 'redux-saga-test-plan';

it('should do sth', () => {
    // build arguments
    
    return expectSaga(saga, args)
        .select/call/put
        .run();
})
```

It's important to return `expectSaga` from the test. It's a `Promise`, which will wait for the saga to run and that's how jest is able to wait for it to resolve. 

# How to mock staff?

This library allows you to mock complex selectors or asyncrhonous API calls. To do it you can use `provide` function. It has an interesting shape:

`provide(providers: array)`, where provider is an array of tuples - first is the yield call that should be mocked, second is the returned value. For example mocking a selector called `selectAllIds` would look like that:

```
    return expectSaga(saga)
        .provide([
            [select(selectAllIds), mockedValue],
        ]);
```
## What to do with selector creators?

Matching in that library works bsed on a reference. In case of selector creators reference will be different with every call, so the library won't be able to match it. You can use a trick though. Mock the selector creator (`requireAll` function will be really useful here as it returns a module in an object form). You can find an example below:

```
    const mockSelector = jest.fn();
    jest.mock('path/to/selectors', () => {
        const module = require.requireActual('path/to/selectors');

        return ({
            ...module,
            makeMockSelector: () => mockSelector,
        });
    });
```

# What should I test?

There is not so many scenarios in sagas. Just describe what should be done in case of successful/unsuccessful API call or specific application state.