import React from 'react';
import Navbar from './global-component/navbar';
import Bannerv2 from './section-component/banner-v2';
import Explore from './section-component/explore';
import FeaturedProperties from './section-component/featured-properties';
import Ads from './section-component/ads';
import PropertiesByCities from './section-component/properties-by-cities';
import RecentProperties from './section-component/recent-properties';
import FeaturedPorject from './section-component/featured-project';
import WhyChooseUs from './section-component/why-choose-us';
import OurPartner from './section-component/our-partner';
import Footer from './global-component/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Bannerv2 />
        <Explore />
        <FeaturedProperties />
        <Ads />
        <PropertiesByCities />
        <RecentProperties />
        <FeaturedPorject />
        <WhyChooseUs />
        <OurPartner />
        <Footer />
    </div>
}

export default Home_V1

