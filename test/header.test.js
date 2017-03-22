import React from 'react';
import {render} from 'enzyme';
import {expect} from 'chai';

const Header = require('./components/Header.js');

describe('Header', () => {
  it('should render text', () => {
    const wrapper = render(<Header />);

    expect(wrapper).to.contain.text('React Weather');
    expect(wrapper).to.contain.text('GitHub');
  });
  it('should render the header container', () => {
  	const wrapper = render(<Header />);

  	expect(wrapper.find('.main-header').length).to.equal(1);
  });
});

