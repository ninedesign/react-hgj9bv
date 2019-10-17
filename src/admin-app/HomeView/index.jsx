import React from "react";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import "./index.scss";
import PageTitle from "../PageTitle";
import Card from "../../components/Card";

function HomeView() {
  // for body anchor links (cards)
  let anchorRef = React.createRef()

  return (
    <div className="home-view">
      <PageTitle title="Home - Configurations" />
      <div className="container">
        <div className="row justify-content-around">
          <div className="col col-sm-5 col-md-6">
            <Card title="Report Configurations">Configure reports.<Link to="/reports" innerRef={anchorRef} className="stretched-link" /></Card>
          </div>
          <div className="col col-sm-5 col-md-6">
            <Card title="Report Type Configurations"><Link to="/reporttypes" innerRef={anchorRef} className="stretched-link" />Configure report types.</Card>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col col-sm-5 col-md-6">
            <Card title="Asset Type Configurations"><Link to="/assettypes" innerRef={anchorRef} className="stretched-link" />Configure asset types within TAMDST.</Card>
          </div>
          <div className="col col-sm-5 col-md-6">
            <Card title="Export Report Configurations"><Link to="/exportreport" innerRef={anchorRef} className="stretched-link" />Configure export reporting and associated SPROCs.</Card>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col col-sm-5 col-md-6">
            <Card title="Miscellaneous Configurations"><Link to="/miscellaneous" innerRef={anchorRef} className="stretched-link" />Ohter configurations: Support Email.</Card>
          </div>
          </div>
      </div>
    </div>
  );
}

HomeView.propTypes = {};

HomeView.defaultProps = {};

export default HomeView;
