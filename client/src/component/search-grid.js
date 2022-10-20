import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import SearchGridSection from './section-component/search-grid';
import Footer from './global-component/footer';

const SearchGrid = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment for rent in Gulshan" subheader="Apartment rent" />
        <SearchGridSection />
        <Footer />
    </div>
}

export default SearchGrid

