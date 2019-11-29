# Jak testować stan i zmianę propsów?
# How to test components with a state or changing props?

There are a lot of methods to test state/props. The most important ones are:

- `state(-|name: string)` - returns a whole state (read a paragraph below),
- `props(-|name: string)` - returns all props or only one of a given name,
- `setState(state: object)` - it works like `setState` in a class component (read a paragraph below),
- `setProps(props: object)` - it merges given props with the ones already set.

# Should I test the state?

`Enzyme` authors write, that its best to use components API instead of setting a state directly. Try to simulate events/setting props to go to a specific state.