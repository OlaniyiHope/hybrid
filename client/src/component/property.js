import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PropertySection from './section-component/property';
import TopAuthor from './section-component/top-author';
import Footer from './global-component/footer';

const Property = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property" />
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default Property

