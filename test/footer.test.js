import React from 'react';
import {render} from 'enzyme';
import {expect} from 'chai';

const Footer = require('./components/Footer.js');

describe('Footer', () => {
    it('should render the footer component', () => {
        const wrapper = render(<Footer />);

        expect(wrapper.find('.main-footer').length).to.equal(1);
    });
    it('should render the footer image', () => {
        const wrapper = render(<Footer />);

        expect(wrapper.find('img').length).to.equal(1);
    });
});
