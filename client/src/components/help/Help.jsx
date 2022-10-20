import React from 'react';
import PageHeader from "../../component/global-component/page-header";
import Footer from '../../component/global-component/footer';
import Center from './Center';
import Navbar from '../../component/global-component/navbar';

const Help = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Help Center" />
        <Center />
        <Footer />
    </div>
}

export default Help;

