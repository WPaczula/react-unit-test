import React from 'react';
import { shallow } from 'enzyme';
import SureToGoThere from '..';

jest.mock('../translate');

const mockHistory = { push: jest.fn() };
jest.mock('react-router', () => {
    return {
        withRouter: WrappedComponent => props => <WrappedComponent history={mockHistory} {...props} />
    }
  }
);

describe(`<SureToGoThere />`, () => {
  const renderSureToGoThere = () => {
    const wrapper = shallow(<SureToGoThere />)
        .dive()
        .dive();

    return wrapper;
  };

  beforeEach(() => {
      mockHistory.push.mockReset();
  })

  it(`should push to history on yes`, () => {
    const sureToGoThere = renderSureToGoThere();

    const yesButton = sureToGoThere.find('button').first();
    yesButton.simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith('/wild');
  });
});