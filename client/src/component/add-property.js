import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import AddNew from './section-component/add-new';
import Footer from './global-component/footer';

const AddProperty = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Add Property" />
        <AddNew />
        <Footer />
    </div>
}

export default AddProperty

