import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import Mission from './section-component/mission-two';
import Professional from './section-component/professional';
import SellHome from './section-component/sellhome';
import Process from './section-component/process';
import BuyOrSell from './section-component/buy-or-sell';
import Footer from './global-component/footer';

const Advisor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="We are Real Estate Advisors" subheader="Advisors" />
        <Mission />
        <Professional />
        <SellHome />
        <Process />
        <BuyOrSell />
        <Footer />
    </div>
}

export default Advisor

