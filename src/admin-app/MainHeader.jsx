import React from 'react';
import PropTypes from 'prop-types';

function MainHeader({ heading, ...others }) {
    return (
        <h2 className="app-heading text-center" {...others}>
            {heading}
        </h2>
    );
}

MainHeader.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default MainHeader;
