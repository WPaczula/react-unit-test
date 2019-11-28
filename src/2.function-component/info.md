# Enzyme - how to test components in isolation?

To test a React component you can use an [open source library by airbnb](https://airbnb.io/enzyme/) called `Enzyme`. It allows you to render React components and provides functions useful to find children or checking its state. It provides three rendering methods:
- `shallow` - shallow render of a component,
- `mount` - full render of a components,
- `render` - static html render,

To check the result of the render you can use `debug()` function, which will return a string with the html tree.

## render

Renders a full static html tree. It allows its search, but doesn't allow checking components state or props. You can use it to test building of an ap or SSR.

## mount

Renders a full tree up to the last child. You can use it for integration testing. It allows using the same methods as `shallow`.

## shallow

Function for unit testing. It renders only one level of components! Consists of lots of methods, which allows you to search for children, more in the shallow tree or simulating events:

1. `find(css: string|props: object|react component)` - search method. You can use css selectors, React components by passing its name or by describing props.
2. `childAt(i: number)` - method to choose i child of a given component. It's risky to use it as a simple refactor can break the test.
3. `hasClass(class: string)` - check if a html element has a given css class.
4. `simulate(eventName: string, event: object)` - simulates an event.
5. `exists()` - checks if an element was rendered.
 
