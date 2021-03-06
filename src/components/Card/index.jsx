import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";

// function Card({ title, inset, children, ...others }) {
//     return (
//         <div {...others} className="card">
//             <div className="card-body">
//                 <h5 className="card-title"><span>{inset}</span>{title}</h5>
//                 <p className="card-text">
//                     {children}
//                 </p>
//             </div>
//         </div>
//     );
// }

function Card({ title, children, ...others }) {
    return (
        <div {...others} className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {children}
                </p>
            </div>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any
};

Card.defaultProps = {
    children: null
};

export default Card;
