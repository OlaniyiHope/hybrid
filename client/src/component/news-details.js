import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import NewsDetailsSection from './blog-component/news-details';
import Footer from './global-component/footer';

const NewsDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News Details" />
        <NewsDetailsSection />
        <Footer />
    </div>
}

export default NewsDetails

