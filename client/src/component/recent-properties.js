import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PropertySection from './section-component/recent-properties-for-sold';
import TopAuthor from './section-component/top-author';
import Footer from './global-component/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Recent Propeties For Sold" subheader="Recent Sold" />
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default AvailableProperty

