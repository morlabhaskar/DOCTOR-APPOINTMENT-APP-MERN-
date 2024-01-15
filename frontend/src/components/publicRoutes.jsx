import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = (props) => {
    // return (
    //    <Navigate to="/" />
    // )
    if (localStorage.getItem("taken")) {
        return <Navigate to="/" />;
    }
    else {
        
        return props.children;
    }
}

export default PublicRoutes