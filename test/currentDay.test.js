import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

const CurrentDay = require('./components/CurrentDay.js');

    let location = 'test';

    let summary = 'test';
    let icon = 'test';
    let temperature = 'test';
    let apparentTemperature = 'test';
    let humidity = 'test';

let data = {
    summary,
    icon,
    temperature,
    apparentTemperature,
    humidity,
};

describe('Current Day Container', () => {
    it('should render one the current temp container', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('.current-temp').length).to.equal(1);
    });
    it('should render a title', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('.current-temp')).to.contain.text('Weather: test');
    });
    it('should render a body', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('.current-temp-body').length).to.equal(1);
    });
    it('should render an icon', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('i').length).to.equal(1);
    });
    it('should render current temp data', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('.current-temp-data').length).to.equal(1);
    });
    it('should render five data divs', () => {
        const wrapper = mount(<CurrentDay location={location} currentTemp={data} />);

        expect(wrapper.find('.current-temp-data div').length).to.equal(5);
    });
});

