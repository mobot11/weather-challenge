import React, {PropTypes} from 'react';
/**
 * A component that displays information about the current day's weather.
 * @param  {Object} currentTemp The current days weather info from our API call.
 * @return {JSX}    A JSX component that renders the current day's weather info.
 */

const SearchInput = ({
        longError,
        latError,
        onFormSubmit,
        onLongitudeChange,
        onLatitudeChange,
        longPlaceholder,
        latPlaceholder,
    }) => {
    let longErrorMessage = '';
    let latErrorMessage = '';
    if (longError) {
        longErrorMessage = <div>Please enter a valid longitude</div>;
    }
    if (latError) {
        latErrorMessage = <div>Please enter a valid latitude</div>;
    }
    const form = (
        <form onSubmit={onFormSubmit} action="#">
            <input
                type="number"
                step="any"
                placeholder="Enter a Longitude"
                className="form-control"
                onChange={onLongitudeChange}
            />
            <input
                type="number"
                step="any"
                placeholder="Enter a latitude"
                className="form-control"
                onChange={onLatitudeChange}
            />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </span>
        </form>
    );
    if (longErrorMessage && latErrorMessage) {
        return (
            <div>
                {longErrorMessage}
                {latErrorMessage}
                {form}
            </div>
        );
    }
    if (latErrorMessage) {
        return (
            <div>
                {latErrorMessage}
                {form}
            </div>
        );
    }
    if (longErrorMessage) {
        return (
            <div>
                {longErrorMessage}
                {form}
            </div>
        );
    }

    return form;
};

SearchInput.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onLatitudeChange: PropTypes.func.isRequired,
    onLongitudeChange: PropTypes.func.isRequired,
    longPlaceholder: PropTypes.string,
    latPlaceholder: PropTypes.string,
    error: PropTypes.bool,
};

export default SearchInput;
