import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({ title, ...others }) {
    return (
        <h4 className="page-title text-center" {...others}>
            {title}
        </h4>
    );
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;
