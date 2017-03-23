import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

const SearchInput = require('./components/SearchInput.js');
const longError = false;
const latError = false;
const onFormSubmit = sinon.spy();
const onLatitudeChange = sinon.spy();
const onLongitudeChange = sinon.spy();
const longPlaceholder = 'test placeholder';
const latPlaceholder = 'test placeholder';
const longitude = "90";
const latitude = "100";

describe('Search Input', () => {
    it('should render one form Element', () => {
        const wrapper = shallow(<SearchInput
                    longError={longError}
                    latError={latError}
                    onFormSubmit={onFormSubmit}
                    onLongitudeChange={onLongitudeChange}
                    onLatitudeChange={onLatitudeChange}
                    longitude={longitude}
                    latitude={latitude}
                    longPlaceholder={longPlaceholder}
                    latPlaceholder={latPlaceholder}
                />);

        expect(wrapper.find('form').length).to.equal(1);
    });

    it('should render two inputs', () => {
        const wrapper = shallow(<SearchInput
                    longError={longError}
                    latError={latError}
                    onFormSubmit={onFormSubmit}
                    onLongitudeChange={onLongitudeChange}
                    onLatitudeChange={onLatitudeChange}
                    longitude={longitude}
                    latitude={latitude}
                    longPlaceholder={longPlaceholder}
                    latPlaceholder={latPlaceholder}
                />);

        expect(wrapper.find('input').length).to.equal(2);
    });
    it('should render a submit button', () => {
        const wrapper = shallow(<SearchInput
                    longError={longError}
                    latError={latError}
                    onFormSubmit={onFormSubmit}
                    onLongitudeChange={onLongitudeChange}
                    onLatitudeChange={onLatitudeChange}
                    longitude={longitude}
                    latitude={latitude}
                    longPlaceholder={longPlaceholder}
                    latPlaceholder={latPlaceholder}
                />);

        expect(wrapper.find('button').length).to.equal(1);
    });

});
