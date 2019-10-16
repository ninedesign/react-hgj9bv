import React from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    // eslint-disable-next-line
    // disabling useLocation on stackblitz - not working do to hidden configurations?
    // const location = useLocation();
    const location = {};
    const links = [
        {
            id: 'home',
            label: 'Home',
            to: '/'
        },
        {
            id: 'reports',
            label: 'Reports',
            to: '/reports'
        },
        {
            id: 'reporttypes',
            label: 'Report Types',
            to: '/reporttypes'
        }
    ];
    return (
        <nav {...props} className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {links.map(l => (
                        <li key={l.id} className={`nav-item${location.pathname === l.to ? ' active' : ''}`}>
                            <Link className="nav-link" to={l.to}>{l.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
