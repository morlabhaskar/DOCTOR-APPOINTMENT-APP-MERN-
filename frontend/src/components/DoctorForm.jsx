import { Button, Col, Form, Input, Row, TimePicker } from 'antd'
import moment from 'moment'
import React from 'react'

const DoctorForm = ({ onFinish, initialValues }) => {
    return (
        <Form Layout='vertical' onFinish={onFinish} initialValues={{ 
            ...initialValues, 
            ...(initialValues && {
                timings: [
                    moment(initialValues?.timings[0],'HH:mm'),
                    moment(initialValues?.timings[1],'HH:mm'),
                    ] 
            })
            }}>
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
                        <TimePicker.RangePicker status="warning" format='HH:mm' />
                    </Form.Item>
                </Col>
            </Row>
            <div>
                <Button className='btn-primary' htmlType='submit'>SUBMIT</Button>
            </div>
        </Form>
    )
}

export default DoctorForm