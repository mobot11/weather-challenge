import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';

const SingleDay = require('./components/SingleDay.js');

    const weeklySummary = 'test summary';

    const tempData = [{
        high: 'test',
        low: 'test',
        summary: 'test summary',
        icon: 'test icon',
        humidity: 'test humidity',
    }];

    let data = {
        summary: weeklySummary,
        data: tempData,
    };

describe('Current Day Container', () => {
    it('should render a single day container for every element in the tempData array', () => {
        const wrapper = shallow(<SingleDay dailyTemps={data} />);

        expect(wrapper.find('.daily-temp-single').length).to.equal(tempData.length);
    });
    it('should render an icon for every element in the tempData array', () => {
        const wrapper = shallow(<SingleDay dailyTemps={data} />);

        expect(wrapper.find('.daily-temp-single i').length).to.equal(tempData.length);
    });

    it('should render six divs for every single day container', () => {
        const wrapper = shallow(<SingleDay dailyTemps={data} />);

        expect(wrapper.find('.daily-temp-single div').length).to.equal(tempData.length * 7);
    });
    it('should render one weekly summary container', () => {
        const wrapper = shallow(<SingleDay dailyTemps={data} />);

        expect(wrapper.find('.weekly-summary-container').length).to.equal(1);
    });
});
