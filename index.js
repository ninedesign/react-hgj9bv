import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/popover';
import AdminApp from './src/admin-app';

ReactDOM.render(
    <AdminApp
        apiBaseUrl={process.env.API_BASE_URL}
    />,
    document.getElementById('root'),
);
