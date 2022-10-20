import React from 'react';
import Footer from '../../component/global-component/footer';
import Navbar from '../../component/global-component/navbar';
import Page_header from '../../component/global-component/page-header';
import Mission from '../../component/section-component/mission';
import ServiceTwo from '../../component/section-component/service-two';
import Header from '../header/Header';
import AboutUs from './AboutUs';


const About = () => {
    return <div>
        <Navbar />
       <Page_header headertitle="About"/>
       <Mission />
     <AboutUs />
     <ServiceTwo />
     <Footer />
    </div>
}

export default About

