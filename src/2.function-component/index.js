import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WarningIcon from './warning-icon';

const Button = ({ onClick, inverse, children, displayWarningIcon}) => {
    return (
        <button 
            className={classnames("button", {
                'button--inverse': inverse,
            })} 
            onClick={onClick} 
        >
            { children }
            { displayWarningIcon && <WarningIcon />}
        </button>
    )
};

Button.defaultProps = {
    inverse: false,
    displayWarningIcon: false,
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    inverse: PropTypes.bool,
    children: PropTypes.string.isRequired,
    displayWarningIcon: PropTypes.bool,
};

export default Button;
