import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PropertySection from './section-component/properties-by-city';
import TopAuthor from './section-component/top-author';
import Footer from './global-component/footer';

const AvailableProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Properties by Cities"/>
        <PropertySection />
        <TopAuthor />
        <Footer />
    </div>
}

export default AvailableProperty

