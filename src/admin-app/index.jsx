import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../custom_bootstrap';
import '../fonts';
import './index.scss';
import Header from './Header';
import LastUpdated from "./LastUpdated";
import HomeView from './HomeView';
import ReportsView from './ReportsView';

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
                <Route path="/reporttypes" component={Test} />
                <Route path="/assettypes" component={Test} />
                <Route path="/exportreport" component={Test} />
                <Route path="/miscellaneous" component={Test} />
            </Router>
        </>
    );
}

export default AdminAppView;
