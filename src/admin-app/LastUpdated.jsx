import React from 'react';
import PropTypes from 'prop-types';

function LastUpdated({ dateUpdated, ...others }) {
    return (
        <p className="date-updated" {...others}>
            <em>Last updated: {dateUpdated}</em>
        </p>
    );
}

LastUpdated.propTypes = {
    dateUpdated: PropTypes.string.isRequired,
};

export default LastUpdated;
