# testing library

Testing library is a family of testing utilities for libraries. There are some for angular, vue, native, svelte, cypress and react 🤯. We will focus on the [react](https://github.com/testing-library/react-testing-library) one this time. To install it you'll just need to get it via npm/yarn:

```
npm i @testing-library/react --save-dev
yarn add @testing-library/react -D
```

If you are using jest, there are some utility `expect` extensions for you in the [jest-dom](https://github.com/testing-library/jest-dom) library. You will be able to use functions like:

- toBeInTheDocument
- ToBeVisible
- toHaveStyle

Pretty neat if you asked me 🔥🔥🔥.

## Main principle

The main principle of this library is to write the tests the same way the user would use the component. The drawback is that those tests are not always unit tests. If there is a child component which is strongly dependent on its parent and won't be used without it, the tests should check the parent knowing how the child works just the way the user would. There is no need to test if the state was change correctly, but if that state is connected with the component well.

## How does it work? 🤔

React testing library takes the react component and renders it in the virtual DOM using just like react DOM does it using `render` function. The component is rendered inside a `div` right in the `document.body`. The opposite approach is used by `enzyme` library which you can see on the branch with the same name in this repo. After it is rendered you have some tools to find the element of your choice and check if it works fine.

## The tools 🛠

The library exports some main functions:

- `render` - renders the component and returns the helper queries (we will talk about them soon) which help to get the part of that component and check its properties
- `screen` - it was provided lately and is an abstraction of what is displayed by the component. It has all the queries returned by the `render` function so can be used as an alternative.
- `fireEvent` - gives the ability to fire events at the rendered part of the component. It can be a click, focus etc.
- `act` - as some updates like effects became asynchronous there is a way to tell the virtual dom that the action will cause component update. If it is not used there can be a warning in the console, that some unexpected render happened. It also has a awaitable version if there is some promise to be resolved inside the component. Most of the calls in the testing library are wrapped in `act` so this shouldn't be necessary, but useful in some cases.
- `wait` - it retries function until it stops throwing an error or times out - usefull on some async updates when an element will appear.

## The queries 🔍

`render` function or `screen` object gives you set of queries that can be used to find and element on the rendered dom.
