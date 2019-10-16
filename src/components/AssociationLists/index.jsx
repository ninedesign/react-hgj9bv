/* eslint-disable no-new */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Sortable from 'sortablejs';
import './index.scss';

function AssociationLists({ leftItems, rightItems }) {
    const leftList = useRef(null);
    const rightList = useRef(null);
    useEffect(() => {
        new Sortable(leftList.current, {
            group: 'association-lists', // set both lists to same group
            animation: 150
        });
        new Sortable(rightList.current, {
            group: 'association-lists',
            animation: 150
        });
    }, []);

    return (
        <div className="d-flex w-100">
            <div className="col">
                <h4>Associated</h4>
                <ul ref={leftList} className="bg-secondary border m-1 p-3 left-list">
                    {leftItems && leftItems.length ? (leftItems.map(li => <li key={li} className="list-group-item">{li}</li>))
                    : null}
                </ul>
            </div>
            <div className="d-flex flex-column" style={{ justifyContent: 'center' }}>
                <div>&larr;</div>
                <div>&rarr;</div>
            </div>
            <div className="col">
                <h4>Unassociated</h4>
                <ul ref={rightList} className="bg-secondary border m-1 p-3 right-list">
                    {rightItems && rightItems.length ? (rightItems.map(li => <li key={li} className="list-group-item">{li}</li>))
                    : null}
                </ul>
            </div>
        </div>
    );
}

AssociationLists.propTypes = {
    leftItems: PropTypes.arrayOf(PropTypes.string),
    rightItems: PropTypes.arrayOf(PropTypes.string)
};

AssociationLists.defaultProps = {
    leftItems: [],
    rightItems: []
};

export default AssociationLists;
