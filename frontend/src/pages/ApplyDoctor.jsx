import { Col, Input, Row, Form, TimePicker, Button } from 'antd'
import Layout from '../components/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../redux/alertslice'
import toast from 'react-hot-toast'


const ApplyDoctor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    const onFinish = async (values) => {
        try {
            dispatch(showLoading())
            const response = await axios.post("/api/user/apply-doctor-account", 
            { 
                ...values,
                 userId: user._id,
            },{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },
            });
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/")
            }
            else {
                toast.error(response.data.message)

            }

        }
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");

        }
    }
    return (
        <Layout>
            <h1 className='page-title'>Apply Doctor</h1>
            <hr />
            <Form Layout='vertical' onFinish={onFinish}>
                <Row gutter={25}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='firstName' label='First Name' rules={[{ required: true }]}>
                            <Input placeholder='First Name' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='lastName' label='Last Name' rules={[{ required: true }]}>
                            <Input placeholder='Last Name' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='email' label='Email' rules={[{ required: true }]}>
                            <Input placeholder='Email' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='phoneNumber' label='Phone Number' rules={[{ required: true }]}>
                            <Input placeholder='Phone Number' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='address' label='Address' rules={[{ required: true }]}>
                            <Input placeholder='Address' ></Input>
                        </Form.Item>
                    </Col><hr />



                </Row><hr />
                <Row gutter={20}>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='specialization' label='Specialization' rules={[{ required: true }]}>
                            <Input placeholder='Specialization' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='experience' label='Experience' rules={[{ required: true }]}>
                            <Input placeholder='Experience' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='feePerConsultation' label='FeePerConsultation' rules={[{ required: true }]}>
                            <Input placeholder='FeePerConsultation' ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={24} sm={24} lg={8}>
                        <Form.Item required name='timings' label='Timings' rules={[{ required: true }]}>
                            <TimePicker.RangePicker status="warning" />
                        </Form.Item>
                    </Col>
                </Row>
                <div>
                    <Button className='btn-primary' htmlType='submit'>SUBMIT</Button>
                </div>
            </Form>
        </Layout>
    )
}

export default ApplyDoctor