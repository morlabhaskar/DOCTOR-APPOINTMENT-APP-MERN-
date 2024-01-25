import React from 'react';
import "../../components/main.css";
import hero from '../../Img/hero.png'
import ava from '../../Img/profile.jpeg'
import { Button, Col, DatePicker, Input, Row, TimePicker } from 'antd';
import { CheckOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';

const First = () => {
    return (
        <div className='hero p-4'>
            

            <div className="left">
                <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button data-label="Register" class="rainbow-hover mt-3 ml-5 mb-4">
                    <span class="sp">Start a Consul</span>
                </button>

                <div className="hero-inp mt-5 p-3">
                    <div className="each"><SearchOutlined /><Input placeholder='Search Doctors' /></div>
                    <div className="each ml-1"><EnvironmentOutlined /><Input placeholder='Location' /></div>
                    <div className="each ml-1"><DatePicker placeholder='Date' /></div>
                    <div className="each each-btn ml-1" id='inp-btn'><Button type='primary'>Search</Button></div>
                </div>

                <div class="ani1 px-2 py-1">
                    <div className="check btn-primary">
                        <CheckOutlined />
                    </div>
                    <h6>Regular Checking</h6>
                </div>


            </div>
            <div className="right">
                <div class="ani mt-4 p-1">
                    <img src={ava} />
                    <div class="container">
                        <h3>John Deo</h3>
                        <p>MBBS,Cardiologist</p>
                        <Button type="primary">Book Now</Button>
                    </div>
                </div>
                <img src={hero} alt="" />

            </div>
        </div>
    )
}

export default First