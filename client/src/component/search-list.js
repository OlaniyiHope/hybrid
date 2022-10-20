import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import SearchListSection from './section-component/search-list';
import Footer from './global-component/footer';

const SearchList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Apartment for rent in Gulshan" subheader="Apartment rent" />
        <SearchListSection />
        <Footer />
    </div>
}

export default SearchList

