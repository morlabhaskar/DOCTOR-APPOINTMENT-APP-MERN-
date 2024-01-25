
import Layout from '../../components/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { hideLoading, showLoading } from '../../redux/alertslice'
import { Button, Col, DatePicker, Row, TimePicker } from 'antd';
import moment from 'moment';
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast'
// import DoctorForm from '../../components/DoctorForm'

const BookAppointments = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const { user } = useSelector((state) => state.user);
    const [doctor, setDoctor] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();


    const getDoctorData = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/doctor/get-doctor-info-by-id",
                { doctorId: params.doctorId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                }
            )
            dispatch(hideLoading())
            if (response.data.success) {
                setDoctor(response.data.data);
            }
        }
        catch (error) {
            console.log(error)
            dispatch(hideLoading())
        }
    }

    const bookNow = async()=> {
        try {
            dispatch(showLoading())
            const response = await axios.post(
                "/api/user/book-appointment",
                { 
                    doctorId: params.doctorId,
                    userId:user._id,
                    doctorInfo:doctor,
                    userInfo:user,
                    date:date,
                    time:time,
                
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                }
            )
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message);
            }
        }
        catch (error) {
            toast.error("Error Booking Appointment");
            dispatch(hideLoading())
        }

    }

    useEffect(() => {
        getDoctorData();

    }, []);

    return (
        <Layout>
            {doctor && (
                <div>
                    <h1 className='page-title'>{doctor.firstName} {doctor.lastName}</h1><hr />
                    <Row>
                        <Col span={8} sm={24} xs={24} lg={8}>
                            <h1 className='normal-text'><b>Timings : </b>{doctor.timings[0]} - {doctor.timings[1]}</h1>
                            <div>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    onChange={(value) => setDate(moment(value).format("DD-MM-YYYY"))
                                    } />
                                <TimePicker format="HH:mm" className='mt-3'
                                onChange={(values)=>
                                    setTime(moment(values).format("HH:mm"))
                                    // setTime(moment(values).format("HH:mm"));
                                }
                                />
                                {/* <Button className='primary-button'>Check Availability</Button> */}
                                <Button className='primary-button' onClick={bookNow}>Book Now</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            )}
        </Layout>
    )
}

export default BookAppointments