// import React from 'react';
// import { Navigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    return (
        props.children
    )
    // if (localStorage.getItem("taken")) {
    //     return props.children;
    // }
    // else {
    //     return <Navigate to="/login" />;
    // }
}

export default ProtectedRoutes