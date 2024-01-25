import React from 'react'
import {Input } from 'antd';
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            {/* <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"> */}
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates!</p>
                                <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <Input type="text" name="EMAIL" class="form-control memail" placeholder="Email"/>
                                    <button class="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                    <p class="mchimp-errmessage" style={{display: 'none'}}></p>
                                    <p class="mchimp-sucmessage" style={{display: 'none'}}></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            {/* <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"> */}
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                {/* <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            {/* <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"> */}
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                {/* <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-3">
                            {/* <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"> */}
                            <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                                <h3 class="f-title f_600 t_color f_size_18">Social Media</h3>
                                <div class="f_social_icon">
                                    <a href="https://www.facebook.com/bhaskar.nani.7564" class="fab fa-facebook"></a>
                                    <a href="https://twitter.com/Bhaskar_nani073" class="fab fa-twitter"></a>
                                    <a href="https://www.instagram.com/bhaskar_nani_goud/" class="fab fa-instagram"></a>
                                    <a href="https://www.linkedin.com/in/bhaskar-morla-429738258/" class="fab fa-linkedin"></a>
                                    <a href="https://github.com/morlabhaskar?tab=repositories" class="fab fa-github"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-sm-7">                        </div>
                        <div class="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i class="icon_heart"></i> in Bhaskar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer