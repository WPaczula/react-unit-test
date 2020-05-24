# React-hooks-testing-library

It's worth testing hooks custom reusable hooks in isolation. [React-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) can help with that task. There is no need to write test components that use custom hook, because the library does it by itself. 

## renderHook method

To render a hook you can use `renderHook` method, which takes factory function for given hook. It returns a set of methods which help with checkich the resulfs of the hook, rerendering or unmounting it. For example:

```
const useCounter = () => {
    ...
    return { count, increment }
}

const { result, rerender, unmount } = renderHook(() => useCounter())
```

## Result object

`result` object returned by the `renderHook` method contains current getter (it's really a function which is fired each time you invoke this property). It will return the current values which hook provides. An example can be found below:

```
const useCounter = () => {
    ...
    return { count, increment }
}

const { result } = renderHook(() => useLogic())

let currentCount = result.current.count

result.current.increment()

currentCount = result.current.count
```

## Event testing

To test events use `fireEvent` function. Remember to wrap it in `act` function so React will run all asynchronous effects.s