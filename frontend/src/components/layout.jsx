import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './layout.css'
import { useSelector } from 'react-redux';
import { Badge } from 'antd';

const Layout = ({ children }) => {

    const location = useLocation();
    const [collapse, setCollapse] = useState(false)
    const { user } = useSelector((state) => state.user)
    const navigate = useNavigate()

    const usermenu = [
        {
            name: "Home",
            path: "/",
            icon: "ri-home-line"
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: "ri-file-list-line"
        },
        {
            name: "Apply Doctor",
            path: "/apply-doctor",
            icon: "ri-nurse-line"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: "ri-user-line"
        }
    ];

    const doctormenu = [
        {
            name: "Home",
            path: "/",
            icon: "ri-home-line"
        },
        {
            name: "Appointments",
            path: "/appointments",
            icon: "ri-file-list-line"
        },
        {
            name: "Profile",
            path: `/doctor/profile/ ${user?._id}`,
            icon: "ri-user-line"
        }
    ];

    const adminmenu = [
        {
            name: "Home",
            path: "/",
            icon: "ri-home-line"
        },
        {
            name: "Users",
            path: "/admin/users-list",
            icon: "ri-user-line"
        },
        {
            name: "Doctors",
            path: "/admin/doctorlist",
            icon: "ri-hospital-line"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: "ri-user-line"
        },
    ];
    const MenuTobeRendered = user?.isAdmin ? adminmenu : user?.isDoctor ? doctormenu : usermenu ;
    const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User" ;

    return (
        <div className='main'>
            <div className='layout'>
                <div className={`${collapse ? 'collapsed-slidebar' : 'slide'}`}>
                    {!collapse ? <i className="ri-close-line active-icon" onClick={() => setCollapse(true)}></i> : < i className="ri-menu-line active-icon" onClick={() => setCollapse(false)}></i>}
                    {MenuTobeRendered.map((menu) => {
                        const isActive = location.pathname === menu.path;
                        return <div className={`menu-item ${isActive && 'active-menu-item'}`}>
                            <Link to={menu.path}><i className={menu.icon}></i></Link>
                            {!collapse && <Link to={menu.path}>{menu.name}</Link>}
                        </div>
                    })}

                    <div className={`menu-item`} onClick={() => {
                        localStorage.clear()
                        navigate('/main')
                    }}>
                        <i className='ri-logout-box-line'></i>
                        {!collapse && <Link to='/main'>Logout</Link>}
                    </div>
                </div>
                <div className='content'>
                    <div className='header '>
                    <p>{role}</p>
                        <div className=' notification-icon-div'>
                            <Badge count={user?.unseenNotifications.length} onClick={()=>navigate("/notifications")} >
                                <i class="ri-notification-line notification-icon mx-4"></i>
                            </Badge>
                            <Link to='profile' className='profile-link mx-3'>Hi..{user?.name}</Link>
                        </div>
                    </div>
                    <div className='body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;