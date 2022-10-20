import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PricingSection from './section-component/pricing';
import Footer from './global-component/footer';

const Pricing = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing" />
        <PricingSection />
        <Footer />
    </div>
}

export default Pricing

