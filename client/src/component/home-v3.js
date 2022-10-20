import React from 'react';
import Navbar from './global-component/navbar';
import Bannerv3 from './section-component/banner-v3';
import FeaturedProperties from './section-component/featured-properties';
import Dream from './section-component/dream';
import PopularProperty from './section-component/popular-property';
import TeamV2 from './section-component/team-v2';
import Client from './section-component/client';
import OurPartner from './section-component/our-partner';
import Footer from './global-component/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv3 />
        <FeaturedProperties Customclass="pd-top-90" />
        <Dream />
        <PopularProperty />
        <TeamV2 />
        <Client PaddingTop="pd-top-60" PaddingBottom="0"/>
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

