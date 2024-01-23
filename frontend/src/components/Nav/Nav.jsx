import React from 'react'
import './Nav.css'
import logo from "../../../src/Img/logo.png";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const Nav = () => {
  return (
    <div className='nav-total'>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Hospital</h1>

      </div>
      <div className="login-btn">
        <Link to="/login"> <Button type="primary">Login<LoginOutlined className='loginIcon' /></Button></Link>

      </div>
    </div>
  )
}

export default Nav