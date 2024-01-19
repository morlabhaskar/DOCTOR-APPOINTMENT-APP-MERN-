import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/alertslice';
import axios from 'axios';
import { Table } from 'antd';

const UsersList = () => {
    const [user,setUser] = useState([]);
    const dispatch = useDispatch();
    const getUsersData = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get('/api/admin/get-all-users',{
                headers: {
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(hideLoading())
            if (response.data.success) {
                setUser(response.data.data);
            }
        } 
        catch (error) {
            dispatch(hideLoading())
            
        }
    }

    useEffect(()=>{
        getUsersData()
    },[])

    const columns = [
        {
            title:"Name",
            dataIndex:"name",
        },
        {
            title:"Email",
            dataIndex:"email",
        },
        {
            title:"Created At",
            dataIndex:"createdAt",
        },
        {
            title:"Actions",
            dataIndex:"actions",
            render: (text,record) => (
                <div className='d-flex'>
                    <p className='anchor'>Block</p>
                </div>
            )
        }
    ]

    return (
        <Layout>
            <h1>Users List</h1>
            <Table columns={columns} dataSource={user} />
        </Layout>
    )
}

export default UsersList