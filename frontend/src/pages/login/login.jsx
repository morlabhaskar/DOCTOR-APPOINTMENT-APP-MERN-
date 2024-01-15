import React from 'react'
import "./login.css"
import toast from 'react-hot-toast'
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from "../../redux/alertslice"

const Login = () => {
  const dispatch = useDispatch();

  // const {loading} = useSelector(state => state.alerts);
  // console.log(loading)

  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/")
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch (error) {
      dispatch(hideLoading())
      toast.error("Something Went Wrong");
      console.log(error)
    }
  };
  return (
    <div className='login-component'>
      <div className="login-component-card ">
        <h1 className='card-title'>Login Here!</h1>
        <Form layout="vertical" onFinish={onFinish} >
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Login</Button>
          </Form.Item>
          <span>You Don't Have an Account <Link to='/register'>Register</Link></span>
        </Form>
      </div>
    </div>
  )
}

export default Login