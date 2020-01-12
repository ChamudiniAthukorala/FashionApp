import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Facebook from '../Images/facebook.png';
import Insta from '../Images/insta.jpg';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ContactUs from './ContactUs';

export default class Footer extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <div id="subscriber-details">
                    <h4 id="Subs-msg">Get latest updates on new collections and offers.</h4>
                    <input type="email" placeholder="Enter your email address" id = "email"/>
                    <button type ="submit" name="subscribe" id= "subscribe">Subscribe</button>

                </div>
                <div id="small-footer">
                    <div id="services">
                        <h6 id = 'heading-footer'>Customer Service</h6>
                            Reviews<br/>
                            Delivery<br/>
                            Returns and Exchanges<br/>
                            Size Guide
                    </div>
                    <div id="general">
                        <h6 id = 'heading-footer'>General Infromation</h6>
                            About Us<br/>
                           <Link to="/contactUs">Contact Us</Link> 
                    </div>
                    <div id="social">
                        <h6 id = 'heading-footer'>Follow us on</h6>
                            <img src = {Facebook} id = "fb"></img>
                            <img src = {Insta} id = "insta"></img>
                    </div>
                </div>
                <div id="div-column">
                    <div class = "row">
                        <div class = "col">
                            <div id="services">
                            <h6 id = 'heading-footer'>Customer Service</h6>
                                Reviews<br/>
                                Delivery<br/>
                                Returns and Exchanges<br/>
                                Size Guide
                            </div>
                        </div>
                        <div class = "col">
                            <div id="general">
                            <h6 id = 'heading-footer'>General Infromation</h6>
                                About Us<br/>
                                Contact Us
                            </div>
                        </div>
                        <div class = "col">
                            <div id="social">
                            <h6 id = 'heading-footer'>Follow us on</h6>
                                <br/>
                                <img src = {Facebook} id = "fb"></img>
                                <img src = {Insta} id = "insta"></img>
                            </div>
                        </div>
                        <div class = "col">Col 4</div>
                    </div>
                </div>
            </div>
            <Route path = "/contactUs" component ={ContactUs}></Route>
            </Router>
           
        )
    }
}