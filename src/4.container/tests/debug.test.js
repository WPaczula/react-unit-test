import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import SureToGoThere from '..';

describe(`<SureToGoThere />`, () => {
  const mountSureToGoThere = () => {
    return mount(
        <MemoryRouter>
          <SureToGoThere />
        </MemoryRouter>
    );
  };
  const shallowRenderSureToGoThere = () => {
    return shallow(<SureToGoThere />);
  };
  it.skip(`mounted`, () => {
    console.log(mountSureToGoThere().debug());
  });

  it.skip('shallow', () => {
    console.log(shallowRenderSureToGoThere().debug());
  });
});