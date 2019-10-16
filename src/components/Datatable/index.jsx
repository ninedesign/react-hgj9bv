import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'datatables.net';
// stackblitz only
import dt from 'datatables.net-bs4/js/dataTables.bootstrap4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
window.jQuery = $;
window.$ = $;
dt = dt(window,$);

function ReactDatatable(props) {
    const {
        dtOptions = {},
        columns = [{ title: '' }],
        rows = [],
        onRowDetails = () => {},
        onRowEdit = () => {},
        onRowDelete = () => {},
        showActions = false,
    } = props;
    const tableRef = useRef(null);

    const btns = [
        '<button class="view btn btn-sm btn-primary" type="button">View</button>',
        '<button class="edit btn btn-sm btn-info" type="button">Edit</button>',
        '<button class="delete btn btn-sm btn-danger" type="button">Delete</button>'
    ];

    function reloadTableData(newRows) {
        if (showActions) {
            columns.unshift({ title: 'Action', data: 'dt-action' });
            rows.forEach((r) => { r['dt-action'] = btns.join(' '); });
        }
        const table = $(tableRef.current).DataTable();
        table.clear();
        table.rows.add(newRows);
        table.draw();
    }

    useEffect(() => {
        if (showActions) {
            columns.unshift({ title: 'Action', data: 'dt-action' });
            rows.forEach((r) => { r['dt-action'] = btns.join(' '); });
        }
        dtOptions.columns = columns;
        dtOptions.data = rows;
        dtOptions.rowCallback = (row, data) => {
            $(row).find('.edit').on('click', () => {
                onRowEdit(row, data);
            });
            $(row).find('.view').on('click', () => {
                onRowDetails(row, data);
            });
            $(row).find('.delete').on('click', () => {
                onRowDelete(row, data);
            });
        };
        $(tableRef.current).DataTable(dtOptions);
        // cleanup
        return function cleanup() {
            $(tableRef.current).DataTable().destroy();
        };
    }, []);
    useEffect(() => {
        reloadTableData(rows);
    }, [rows]);
    return (
        <table style={{ width: '100%' }} className="table table-sm" ref={tableRef} />
    );
}
ReactDatatable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string
    })).isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape({
    })).isRequired,
    onRowEdit: PropTypes.func,
    onRowDetails: PropTypes.func,
    onRowDelete: PropTypes.func,
    showActions: PropTypes.bool,
    dtOptions: PropTypes.shape({
        columns: PropTypes.array,
        data: PropTypes.array,
        rowCallback: PropTypes.func
    })
};

ReactDatatable.defaultProps = {
    onRowEdit: () => {},
    onRowDetails: () => {},
    onRowDelete: () => {},
    showActions: false,
    dtOptions: {},
};

// export default ReactDatatable;
export default React.memo(ReactDatatable);
// export default React.memo(ReactDatatable, (props, newProps) => {
//     if (props.rows !== newProps.rows) {
//         // do something
//     }
//     return false;
// });
