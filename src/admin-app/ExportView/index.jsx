import React from 'react';
// import PropTypes from 'prop-types';
import $ from 'jquery';
import PageTitle from '../PageTitle';
import ReactDatatable from '../../components/Datatable';
import AssociationLists from '../../components/AssociationLists';

function ExportView() {
    const [modalVis, setModalVis] = React.useState();
    const popoverRef = React.useRef();
    return (
        <div className="reports-view">
            <PageTitle title="Export Report Configurations" />
            <span className="col-desc">Columns Descriptions </span>
            <a
                ref={popoverRef}
                className="col-desc-icon"
                data-html="true"
                data-placement="bottom"
                onClick={() => {
                    $(popoverRef.current).popover({
                        title: 'Columns Descriptions',
                        content: '<ul><li><strong>Label</strong> - The display name for the report seen in the left-side panel.</li><li><strong>Description</strong> - The descriptive text that appears below the report title when the report is active.</li><li><strong>PowerBI Report GUID</strong> - Report to be loaded.</li><li><strong>Power BI Page ID</strong> - Page in report to be rendered.</li><li><strong>Enabled</strong> - Disabled reports can be considered "offline" and will not appear in the application.</li><li><strong>Sort Order</strong> - Order reports are listed within a data option or "report type" group.</li></ul>',
                        trigger: 'manual'
                    }).popover('toggle');
                }}> <span className="tamdst-question-circle-o"> </span>
            </a>
            <div className="m-4">
                <ReactDatatable
                    columns={[{ title: 'Actions', data: 'col1' }, { title: 'Report Type', data: 'col2' }, { title: 'Label', data: 'col3' }, { title: 'Description', data: 'col4' }, { title: 'Power BI Report GUID', data: 'col5' }, { title: 'Power BI Page ID', data: 'col6' }, { title: 'Enabled', data: 'col7' }, { title: 'Sort Order', data: 'col8' }]}
                    rows={[
                        { col1: '<span class="tamdst-association-modal-2"> </span> <span class="tamdst-edit"> </span> <span class="tamdst-circle-cancel"> </span>', col2: 'column 2, row 1', col3: 'column 3, row 1', col4: 'column 4, row 1', col5: 'column 5, row 1', col6: 'column 6, row 1', col7: 'column 7, row 1', col8: 'column 8, row 1' },
                        { col1: '<span class="tamdst-association-modal-2"> </span> <span class="tamdst-edit"> </span> <span class="tamdst-circle-cancel"> </span>', col2: 'column 2, row 2', col3: 'column 3, row 2', col4: 'column 4, row 2', col5: 'column 5, row 2', col6: 'column 6, row 2', col7: 'column 7, row 2', col8: 'column 8, row 2' }
                    ]}
                />
            </div>
        </div>
    );
}

ExportView.propTypes = {
};

ExportView.defaultProps = {
};

export default ExportView;
