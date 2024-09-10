import React from "react";
import { BsPiggyBankFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import './footer.css';

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="left-box">

                        <div className="box">
                            <div className="icon-box">
                                <BsPiggyBankFill />
                            </div>
                            <div className="details">
                                <h3>Great Saving</h3>
                                <p>lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon-box">
                                <FaShippingFast />
                            </div>
                            <div className="details">
                                <h3>Free delivery</h3>
                                <p>lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon-box">
                                <FaHeadphonesAlt />
                            </div>
                            <div className="details">
                                <h3>24/7 support</h3>
                                <p>lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon-box">
                                <FaWallet />
                            </div>
                            <div className="details">
                                <h3>Money back</h3>
                                <p>lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="right-box">
                        <div className="header">
                            <img src="images/logo.png " />
                            <p>sdkfjhsdkhfiuewfsknciearbdscnifjcnnniiwefbdscniefhsbjmsnifb</p>
                        </div> 

                        <div className="bottom">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New Product</li>
                                    <li>Old Product</li>
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Contact us</h3>
                                <ul>
                                    <li>#416, Market Complex, Chnadigarh</li>
                                    <li>+91 8794156230</li>
                                    <li>connect@gmail.com</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;