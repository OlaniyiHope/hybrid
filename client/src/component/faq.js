import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import FaqSection from './section-component/faq';
import Footer from './global-component/footer-v2';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Help Center" />
        <FaqSection />
        <Footer />
    </div>
}

export default Faq

