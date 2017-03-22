import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

const Chart = require('./components/Chart.js');

describe('Chart', () => {
    it('should renders one Chart component', () => {
        const wrapper = shallow(<Chart />);

        expect(wrapper.find('.chart')).to.have.length(1);
    });
});
