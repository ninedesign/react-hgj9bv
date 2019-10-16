import React from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import PageTitle from '../PageTitle';
import FiltersGroup from '../../components/FiltersGroup';
import ReactDatatable from '../../components/Datatable';
import Modal from '../../components/BSModal';
import AssociationLists from '../../components/AssociationLists';
import './index.scss';

function ReportsView() {
    const [modalVis, setModalVis] = React.useState();
    const popoverRef = React.useRef();
    return (
        <div className="reports-view">
            <PageTitle title="Reports" />
            <FiltersGroup />
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
                    columns={[{ title: 'Actions', data: 'col1' }, { title: 'ID', data: 'col2' }, { title: 'Label', data: 'col3' }, { title: 'Description', data: 'col4' }, { title: 'IsDefault', data: 'col5' }, { title: 'Enabled', data: 'col6' }, { title: 'SortID', data: 'col7' }]}
                    rows={[
                        { col1: '<i className="icon">Ico</i> <i className="icon">Ico</i>', col2: 'column 2, row 1 ', col3: 'column 3, row 1', col4: 'column 4, row 1', col5: 'column 5, row 1', col6: 'column 6, row 1', col7: 'column 7, row 1' },
                        { col1: 'Icons Here', col2: 'column 2, row 2', col3: 'column 3, row 2', col4: 'column 4, row2', col5: 'column 5, row 2', col6: 'column 6, row 2', col7: 'column 7, row 2' }
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
