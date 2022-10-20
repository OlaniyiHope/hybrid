import React from 'react';
import Navbar from './global-component/navbar';
import Banner from './section-component/banner';
import Service from './section-component/service';
import Explore from './section-component/explore';
import Ads from './section-component/ads';
import WhyChooseUs from './section-component/why-choose-us';
import OurPartner from './section-component/our-partner';
import Footer from './global-component/footer';
import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import PropertyList from "../components/propertyList/PropertyList";
const Home_V1 = () => {
    return <div>
        <Navbar />
        <Service />
        <Explore />
        <Ads />
        <WhyChooseUs />
        <OurPartner />
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"> Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle" >Homes guests love</h1>
        <FeaturedProperties/>
        <Footer />
      </div>
    </div>
}

export default Home_V1

