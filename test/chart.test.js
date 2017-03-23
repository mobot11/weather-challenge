import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

const Chart = require('./components/Chart.js');
const data = [10, 20, 30];

describe('Chart', () => {
    it('should render one Chart container', () => {
        const wrapper = shallow(
            <Chart data={data} units="%" value="Humidity" color="violet" />
        );

        expect(wrapper.find('.chart')).to.have.length(1);
    });
    it('should render one Chart SVG', () => {
        const wrapper = mount(
            <Chart data={data} units="%" value="Humidity" color="violet" />
        );

        expect(wrapper.find('svg')).to.have.length(1);
    });
    it('should render one Sparkline component', () => {
        const wrapper = mount(
            <Chart data={data} units="%" value="Humidity" color="violet" />
        );

        expect(wrapper.find('Sparklines')).to.have.length(1);
    });
});
