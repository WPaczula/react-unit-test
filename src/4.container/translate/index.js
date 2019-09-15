import React from 'react';

export const withTranslate = WrappedComponent => 
    props => <WrappedComponent 
        translate={text => console.log('Some complex function fired!') || text} 
        {...props}
        />