import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import {Link} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info'
import WebIcon from '@material-ui/icons/Web';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';



  




  export default function Footer() {


    return(

        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5><LinkIcon/>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to="/home"><HomeIcon/>Home</Link></li>
                        <li><Link to="/aboutus"><InfoIcon/>About Us</Link></li>
                        <li><Link to="/menu"><MenuIcon/>Menu</Link></li>
                        <li><Link to="/contactus"><ContactMailIcon/>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address <LocationOnOutlinedIcon /></h5>
                    <address>
                    Daimel Str 6A<br />
                    Hermulheim, Hurth<br />
                    Germany<br />
                    <PhoneIcon/>+49 564132145 <br/>
                    <PhoneIcon className="fa fa-fax fa-lg"></PhoneIcon>: +49 564132145<br />
                    <WebIcon />: <a href=".net">
                        blood@donation.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <FacebookIcon href="www.facebook.com" />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                       <MailIcon />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Blood Donation</p>
                </div>
            </div>
        </div>
    </div>
    )




  }