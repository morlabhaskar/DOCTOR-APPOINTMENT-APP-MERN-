import React from 'react'
import './register.css'
import { Button, Form, Input } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/alertslice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        // message.success('Submit success!');
        // console.log(values)
        try {
            dispatch(showLoading())
            const response = await axios.post("/api/user/register", values);
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/login")
            }
            else {
                toast.error(response.data.message)
                
            }
        }
        catch (error) {
            dispatch(hideLoading())
            toast.error("Something went Wrong");
            console.log(error)

        }

    };

    // const onFinishFailed = () => {
    //     message.error('Submit failed!');
    // };
    return (
        <div className='register-component'>
            <div className="register-component-card ">
                <h1 className='card-title'>Register Here!</h1>
                {/* <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} > */}
                <Form layout="vertical" onFinish={onFinish} >
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                        <Input placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Rigister</Button>
                    </Form.Item>
                    <span>Already Have a Account <Link to='/login'>Login</Link></span>
                </Form>
            </div>
        </div>
    )
}

export default Register