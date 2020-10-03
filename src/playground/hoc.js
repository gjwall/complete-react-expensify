// A Higher order component (HOC) is  a component that renders one or more other components
// Aim of HOCs are: code reuse, render hijiacking, prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// Info is a regular component
const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

// This function returns the HOC.
// It is NOT the HO
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share.</p>}
            <WrappedComponent  {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to view the information</p>
            )
            }
        </div>
    );
};

//const AdminInfo = withAdminWarning(Info);

// requireAuthentication
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="Some information" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="More information" />, document.getElementById('app'));