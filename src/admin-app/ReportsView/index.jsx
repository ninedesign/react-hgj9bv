import React from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import './index.scss';
import ReactDatatable from '../../components/Datatable';
import PageTitle from '../PageTitle';
import Modal from '../../components/BSModal';
import AssociationLists from '../../components/AssociationLists';

function ReportsView() {
    const [modalVis, setModalVis] = React.useState();
    const popoverRef = React.useRef();
    return (
        <div className="reports-view">
            <PageTitle title="Reports" />
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                    setModalVis(true);
                }}>Show Modal
            </button>
            <button
                ref={popoverRef}
                className="btn btn-primary"
                type="button"
                onClick={() => {
                    $(popoverRef.current).popover({
                        title: 'popover title',
                        content: 'test content',
                        trigger: 'manual'
                    }).popover('toggle');
                }}>Toggle Popover
            </button>
            <div className="m-4">
                <ReactDatatable
                    columns={[{ title: 'Column 1', data: 'col1' }, { title: 'Column2', data: 'col2' }]}
                    rows={[
                        { col1: 'column 1, row1 ', col2: 'column 2, row1 ' },
                        { col1: 'column1, row 2', col2: 'column 2, row2 ' }
                    ]}
                />
            </div>
            <Modal
                bsOptions={{
                    backdrop: 'static'
                }}
                onClose={() => { setModalVis(false); }}
                title="Modal Title"
                show={modalVis}
            >
                <AssociationLists
                    leftItems={['Pavement']}
                    rightItems={['Bridge', 'Culvert', 'Barrier']}
                />
            </Modal>
        </div>
    );
}

ReportsView.propTypes = {
};

ReportsView.defaultProps = {
};

export default ReportsView;
