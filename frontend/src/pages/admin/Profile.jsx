// import { Col, Input, Row, Form, TimePicker, Button } from 'antd'
import Layout from '../../components/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { hideLoading, showLoading } from '../../redux/alertslice'
import toast from 'react-hot-toast'
import DoctorForm from '../../components/DoctorForm'
import moment from 'moment';


const Profile = () => {

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState(null);
  const params = useParams();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/doctor/update-doctor-profile",
        {
          ...values,
          userId: user._id,
          timings :[
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm")
          ],
        }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  const getDoctorData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-user-id",
        { userId: params.userrId },
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
      dispatch(hideLoading())
    }
  }
  useEffect(() => {
    if (!user) {
      getDoctorData();

    }

  }, []);

  return (
    <Layout>
      <h1>Profile Page</h1>
      <hr />
      {doctor && <DoctorForm onFinish={onFinish} initialValues={doctor} />}
    </Layout>
  )
}

export default Profile