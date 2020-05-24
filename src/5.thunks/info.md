# Thunks

Thunks are the function returned from another function. In the redux thunk they are executed before "before" the reducer step. To test it you can mock `dispatch`, `getState` and any additional parameters like API, and test if the function was called like you expected. It usually means checking if everything works fine when the request was done correctly and failed.

## Dispatch mock

The good part about using `jest.fn()` to mock the dispatch function is that it doesn't check if the object that was an argument was equal to the reference, but to the value. So checking if the actions were fired will work fine.

## Api mock

If you are using typescript it is convenient to define thunks with `Pick` type. That way you define which part of the API the thunk needs and you can mock only those "endpoints" by providing a plain functions in there.

## getState mock

When using some parts of the state it is also convenient to use `Pick`, to provide only the parts of the state that selectors need to calculate the perform any action.

## The code will probably be the best example
