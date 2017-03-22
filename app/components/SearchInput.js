import React, {PropTypes} from 'react';
/**
 * A component that allows a user to set own longitude and latitude values
 * @param  {Object} props props passed down from parent component
 * @return {JSX}    A JSX component that renders the form and input fields.
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
    let longErrorMessage = <div>Please enter a valid longitude</div>;
    let latErrorMessage = <div>Please enter a valid latitude</div>;

    const form = (
        <form onSubmit={onFormSubmit} action="#">
            <input
                type="number"
                step="any"
                placeholder={longPlaceholder}
                className="form-control"
                onChange={onLongitudeChange}
            />
            <input
                type="number"
                step="any"
                placeholder={latPlaceholder}
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
    if (longError && latError) {
        return (
            <div>
                {longErrorMessage}
                {latErrorMessage}
                {form}
            </div>
        );
    }
    if (latError) {
        return (
            <div>
                {latErrorMessage}
                {form}
            </div>
        );
    }
    if (longError) {
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
