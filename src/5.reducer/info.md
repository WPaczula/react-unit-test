# Jak testować reducery?
# How to test reducers?

This case is really simple - reducer is a pure function. Basing on current state and action it returns a given state back. That's why it's that easy to test.

It's worth to create a helper function which will create a default state. Take care of the helper library (for example `immutable.js`) you use, to provide a correct state object.