import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../custom_bootstrap';
import './index.scss';
import Header from './Header';
import LastUpdated from "./LastUpdated";
import HomeView from './HomeView';
import ReportsView from './ReportsView';
import ReportTypesView from './ReportTypesView';
import AssetTypesView from './AssetTypesView';
import ExportView from './ExportView'

function Test() {
  return (<div>Hello from test</div>);
}

function AdminAppView() {
    // useEffect(() => {
    //     // will need to fetch token once authorized to pass as header on requests to API
    //     getToken();
    // }, []);

    return (
        <>
            <Router>
                <Header className="mb-1" />
                <LastUpdated dateUpdated="10/15/2019" />
                <Route exact path="/" component={HomeView} />
                <Route path="/reports" component={ReportsView} />
                <Route path="/reporttypes" component={ReportTypesView} />
                <Route path="/assettypes" component={AssetTypesView} />
                <Route path="/exportreport" component={ExportView} />
                <Route path="/miscellaneous" component={Test} />
            </Router>
        </>
    );
}

export default AdminAppView;
