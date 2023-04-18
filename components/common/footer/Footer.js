import React from 'react';

const Footer = () => {
    return (
        <>
            <section id="footer_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_1">
                                <img src="image/orbit_logo.png" alt="" srcSet=""/>
                                    <p> orbitsolution is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of software and website agency.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 m-0 p-0">
                            <div className="footer_2">
                                <h6>Contact</h6>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-building"></i>
                                    </div>
                                    <span>orbitsolution Ltd</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span>10 Habiganj,Shylet Bangladesh</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <span>+88 01890070302</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                    <span>orbitsolution.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 m-0 p-0">
                            <div className="footer_3">
                                <h6>Capabilities</h6>
                                <div className="footer_3_items">
                                    <ul>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                        <li><a href="#">App Development</a></li>
                                        <li><a href="#">Seo Marketing</a></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-0 p-0">
                            <div className="footer_4">
                                <h6>Our Social Media</h6>
                                <div className="social_iconss">
                                    <a href="#"> <i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                    <a href="#"> <i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"> <i className="fa-brands fa-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className="hrs"/>
                    <div className="footer_copy">
                        <p>Copyright 2021 © Bustic | Powered by Orbitdigitalsolution</p>
                    </div>
            </section>
        </>
    );
};

export default Footer;