import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';
import WarningIcon from '../warning-icon';

describe(`<Button />`, () => {
  it(`should render text given in children v1`, () => {
    const text = 'Test';
    const props = {
      onClick: jest.fn(),
      inverse: true,
      displayWarningIcon: false,
    }

    const button = shallow(<Button {...props}>{text}</Button>)

    expect(button.text()).toBe(text);
  });

  const renderButton = (props = {}) => {
    const {
      onClick = jest.fn(),
      inverse = false,
      children = 'Text',
      displayWarningIcon = false,
    } = props;

    return shallow(
        <Button 
            onClick={onClick} 
            inverse={inverse}
            displayWarningIcon={displayWarningIcon}
        >
            {children}
        </Button>
    );
  }

  it('debug', () => {
    const wrapper = renderButton();

    console.log(wrapper.debug());
    
  });

  it(`should render text given in children v2`, () => {
    const children = 'Test';

    const button = renderButton({ children });

    expect(button.text()).toBe(children);
  });

  it('should add inverse class when inverse prop is given.', () => {
    const inverse = true;

    const button = renderButton({ inverse });

    expect(button.hasClass('button--inverse')).toBe(true);
  });
  
  it('should fire onClick function when it is clicked.', () => {
    const onClick = jest.fn();
    const button = renderButton({ onClick });

    button.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('should display icon component if it has a warning v1.', () => {
    const displayWarningIcon = true;
    const button = renderButton({ displayWarningIcon });

    const warningIcon = button.childAt(1);

    expect(warningIcon.exists()).toBe(true);
  });
  
  it('should display icon component if it has a warning v2.', () => {
    const displayWarningIcon = true;
    const button = renderButton({ displayWarningIcon });

    const warningIcon = button.find(WarningIcon);

    expect(warningIcon.exists()).toBe(true);
  });
});