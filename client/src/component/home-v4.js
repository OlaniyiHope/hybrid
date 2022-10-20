import React from 'react';
import Navbar from './global-component/navbar';
import Bannerv4 from './section-component/banner-v4';
import AppermentSlider from './section-component/appertment-slider';
import About from './section-component/aboutv2';
import RoomSpacing from './section-component/room-spacing';
import CalltoAction from './section-component/calltoaction';
import Client from './section-component/client';
import OurPartner from './section-component/our-partner';
import Footer from './global-component/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv4 />
        <AppermentSlider />
        <About />
        <RoomSpacing />
        <CalltoAction />
        <Client PaddingTop="pd-top-60" PaddingBottom="0"/>
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

