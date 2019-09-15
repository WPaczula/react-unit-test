import React from 'react';

export const withTranslate = WrappedComponent => props => <WrappedComponent translate={jest.fn()} {...props} />