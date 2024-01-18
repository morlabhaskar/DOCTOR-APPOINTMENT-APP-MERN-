import { Tabs } from 'antd'
import Layout from '../components/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Notifications = () => {
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()
    if (!user) {
        return "BH";
    }
    return (
        <Layout>
            <h1>Notifications</h1>
            <Tabs>
                <Tabs.TabPane tab="UnRead" key={1}>
                    <div className="unread d-flex justify-content-end">
                        <p>Mark as All Read</p>
                    </div>
                    {user.unseenNotifications?.map((notification)=>(
                        <div className="card" onClick={()=>navigate(notification.onClickPath)}>
                            <div className="card-text">
                                {notification.message}
                            </div>
                        </div>
                    ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Read" key={0}>
                    <div className="read d-flex justify-content-end">
                        <p>Delete All</p>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications