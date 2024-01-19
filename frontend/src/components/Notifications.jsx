import { Tabs } from 'antd'
import Layout from '../components/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/alertslice'
import toast from 'react-hot-toast'
import axios from 'axios'
import { setUser } from '../redux/userslice'


const Notifications = () => {
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    if (!user) {
        return " ";
    }

    
    const markAllseen = async()=> {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/mark-all-notifications-as-seen",{userId:user._id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message)
                dispatch(setUser(response.data.data));
            }
            else {
                toast.error(response.data.message);
            }
        } 
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went Wrong!");
            
        }
    }

    const deleteAll = async()=> {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/detete-all-notifications",{userId:user._id},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message)
                dispatch(setUser(response.data.data));
            }
            else {
                toast.error(response.data.message);
            }
        } 
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went Wrong!");
            
        }
    }

    return (
        <Layout>
            <h1>Notifications</h1>
            <Tabs>
                <Tabs.TabPane tab="UnRead" key={1}>
                    <div className="unread d-flex justify-content-end">
                        <p className='anchor' onClick={()=>markAllseen()}>Mark as All Read</p>
                    </div>
                    {user.unseenNotifications?.map((notification)=>(
                        <div className="card m-3" onClick={()=>navigate(notification.onClickPath)}>
                            <div className="card-text p-3">
                                {notification.message}
                            </div>
                        </div>
                    ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Read" key={0}>
                    <div className="read d-flex justify-content-end">
                        <p className='anchor' onClick={()=>deleteAll()}>Delete All</p>
                    </div>
                    {user.seenNotifications?.map((notification)=>(
                        <div className="card m-3" onClick={()=>navigate(notification.onClickPath)}>
                            <div className="card-text p-3">
                                {notification.message}
                            </div>
                        </div>
                    ))}
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications