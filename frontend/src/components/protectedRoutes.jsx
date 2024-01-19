// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
// import {useNavigate} from "react-router-dom";
import { setUser } from '../redux/userslice';
import { showLoading, hideLoading } from '../redux/alertslice';


const ProtectedRoutes = (props) => {
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUser = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/user/get-user-info-by-id",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                }
            )
            dispatch(hideLoading())
            if (response.data.success) {
                dispatch(setUser(response.data.data));
            }
            else {
                localStorage.clear();
                navigate('/login');
            }
        }
        catch (error) {
            dispatch(showLoading())
            localStorage.clear();
            navigate('/login')
        }
    }
    useEffect(() => {
        if (!user) {
            getUser()

        }

    }, [user,getUser]);
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