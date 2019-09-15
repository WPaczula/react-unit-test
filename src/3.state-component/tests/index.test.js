import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '..';

describe(`<Checkbox />`, () => {
  const renderCheckbox = (props = {}) => {
    const {
      checked = false,
      label = 'label',
      onChange = jest.fn(),
    } = props;

    return shallow(<Checkbox
        checked={checked}
        label={label}
        onChange={onChange}
    />);
  }
  it(`should render with proper state.`, () => {
    const checked = true;

    const checkbox = renderCheckbox({ checked });

    // expect(checkbox.state('checked')).toBe(checked);
    expect(checkbox.find('[checked=true]').exists()).toBe(checked);
  });
  
  it('should update state when props change.', () => {
    const checked = false;
    const checkbox = renderCheckbox({ checked });

    checkbox.setProps({ checked: !checked });

    // expect(checkbox.state('checked')).toBe(!checked);
    expect(checkbox.find('[checked=true]').exists()).toBe(!checked);
  });

  it('should update state and fire handler on click.', () => {
    const checked = false;
    const onChange = jest.fn();
    const checkbox = renderCheckbox({ checked, onChange });

    checkbox.find('input').simulate('change', { target: { checked: !checked } });

    expect(onChange).toBeCalledWith(!checked);
    // expect(checkbox.state('checked')).toBe(!checked);
    expect(checkbox.find('[checked=true]').exists()).toBe(!checked);
  });

  it('should have checked state stored*', () => {
    const checked = true;
    const checkbox = renderCheckbox();

    checkbox.setState({ checked });

    expect(checkbox.find('input[checked=true]').exists()).toBe(true);
  });
});