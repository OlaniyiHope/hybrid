import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import Mission from './section-component/mission';
import AboutUs from './section-component/about-us';
import ServiceTwo from './section-component/service-two';
import Team from './section-component/team';
import Client from './section-component/client';
import Footer from './global-component/footer';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About" />
        <Mission />
        <AboutUs />
        <ServiceTwo />
        <Team />
        <Client />
        <Footer />
    </div>
}

export default About

