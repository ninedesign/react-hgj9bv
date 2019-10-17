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
                <h6 className="text-center">Associated</h6>
                <ul ref={leftList} className="border m-1 p-3 left-list">
                    {leftItems && leftItems.length ? (leftItems.map(li => <li key={li} className="list-group-item"><span className="tamdst-ellipsis-v"></span><span className="list-item">{li}</span></li>))
                    : null}
                </ul>
            </div>
            <div className="d-flex flex-column drag-to-from" style={{ justifyContent: 'center' }}>
                <div><span className="tamdst-chevron-left" ></span></div>
                <div><span className="tamdst-chevron-right"></span></div>
            </div>
            <div className="col">
                <h6 className="text-center">Unassociated</h6>
                <ul ref={rightList} className="border m-1 p-3 right-list">
                    {rightItems && rightItems.length ? (rightItems.map(li => <li key={li} className="list-group-item"><span className="tamdst-ellipsis-v"></span><span className="list-item">{li}</span></li>))
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
