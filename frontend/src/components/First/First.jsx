import React from 'react';
import "../../components/main.css";
import hero from '../../Img/hero.png'
import ava from '../../Img/profile.jpeg'
import { Button, Col, DatePicker, Input, Row, TimePicker } from 'antd';
import { EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';

const First = () => {
    return (
        <div className='hero p-4 '>

            <div className="left mr-5">
                <h1>Consult <span>Best Doctors</span> Your Nearby Location.</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button data-label="Register" class="rainbow-hover mt-3 ml-5 mb-4">
                    <span class="sp">Start a Consul</span>
                </button>

                <Row className='mt-5 p-3'>
                    <Col><SearchOutlined /><Input /></Col>
                    <Col><EnvironmentOutlined /><Input /></Col>
                    <Col><DatePicker /></Col>
                    <Col><Button>Search</Button></Col>
                </Row>


            </div>
            <div className="right">
                <div class="ani mt-5">
                    <img src={ava}/>
                        <div class="container">
                            <h3>John Deo</h3>
                            <p>MBBS,Cardiologist</p>
                            <Button>Book Now</Button>
                        </div>
                </div>
                <img src={hero} alt="" />

            </div>
        </div>
    )
}

export default First