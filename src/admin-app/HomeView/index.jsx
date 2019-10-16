import React from 'react';
// import PropTypes from 'prop-types';
import './index.scss';
import PageTitle from '../PageTitle';
import Card from '../../components/Card';

function HomeView() {
    return (
        <div className="home-view">
            <PageTitle title="Home" />
            <Card title="Card title">
                Hello from Card 1
            </Card>
        </div>
    );
}

HomeView.propTypes = {
};

HomeView.defaultProps = {
};

export default HomeView;
