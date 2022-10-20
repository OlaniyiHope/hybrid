import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PropertyDetailsSection from './section-component/property-details';
import RecomandProperties from './section-component/recomand-properties';
import Footer from './global-component/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details" />
        <PropertyDetailsSection />
        <RecomandProperties />
        <Footer />
    </div>
}

export default PropertyDetails

