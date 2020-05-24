import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { Props } from '..';

describe(`<Button />`, () => {
  it(`should render text given in children v1`, () => {
    const text = 'Test';
    const props = {
      onClick: jest.fn(), // quick way to setup a mock function that doesn't do anything
      inverse: true,
      displayWarningIcon: false,
    };

    const { getByText } = render(<Button {...props}>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  const renderButton = (props: Partial<Props> = {}) => {
    const {
      onClick = jest.fn(),
      inverse = false,
      children = 'Text',
      displayWarningIcon = false,
    } = props;

    return render(
      <Button
        onClick={onClick}
        inverse={inverse}
        displayWarningIcon={displayWarningIcon}
      >
        {children}
      </Button>,
    );
  };

  it('debug', () => {
    const { debug } = renderButton();

    debug();
  });

  it(`should render text given in children v2`, () => {
    const text = 'Test';

    const { getByText } = renderButton({ children: text });

    expect(getByText(text)).toBeInTheDocument();
  });

  it('should add inverse class when inverse prop is given.', () => {
    const inverse = true;

    const { container } = renderButton({ inverse });

    expect(container.firstChild).toHaveClass('button--inverse');
  });

  it('should fire onClick function when it is clicked.', () => {
    const onClick = jest.fn();
    const text = 'text';
    const { getByText } = renderButton({ onClick, children: text });

    fireEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalled();
  });

  it('should display icon component if it has a warning v1.', () => {
    const displayWarningIcon = true;
    const { getByTestId } = renderButton({ displayWarningIcon });

    const warningIcon = getByTestId('warning-icon');

    expect(warningIcon).toBeInTheDocument();
  });
});
