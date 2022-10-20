import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PropertySection from './section-component/available-peroperty';
import Footer from './global-component/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Availavbe Apartments" subheader="Availavbe" />
        <PropertySection />
        <Footer />
    </div>
}

export default AvailableProperty

