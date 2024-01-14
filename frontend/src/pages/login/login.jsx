import React from 'react'
import "./login.css"
import toast from 'react-hot-toast'
import { Button, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
      const onFinish = async (values) => {
        try {
          const response = await axios.post("/api/user/login",values);
          if (response.data.success) {
            toast.success(response.data.message);
            localStorage.setItem("token",response.data.data);
            navigate("/")
          }
          else {
            toast.error(response.data.message);
          }
        }
        catch (error) {
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