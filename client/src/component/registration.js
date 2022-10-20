import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import RegistraionSection from './section-component/registration';
import Footer from './global-component/footer';

const Registration = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Registetion" />
        <RegistraionSection />
        <Footer />
    </div>
}

export default Registration

