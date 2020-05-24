import React, { SyntheticEvent, ReactNode } from 'react';
import classnames from 'classnames';
import WarningIcon from './warning-icon';

export interface Props {
  onClick: (e: SyntheticEvent) => void;
  children: ReactNode;
  inverse?: boolean;
  displayWarningIcon?: boolean;
}

const Button = ({
  onClick,
  children,
  inverse = false,
  displayWarningIcon = false,
}: Props) => {
  return (
    <button
      className={classnames('button', {
        'button--inverse': inverse,
      })}
      onClick={onClick}
    >
      {children}
      {displayWarningIcon && <WarningIcon />}
    </button>
  );
};

export default Button;
