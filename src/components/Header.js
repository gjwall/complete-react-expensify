import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

export const Header = ( { startLogout } ) => (
    <header>
        <h1>Expensify</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create expense</Link>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
        startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);