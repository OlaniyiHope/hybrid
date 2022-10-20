import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import PopularPost from './blog-component/popular-post';
import PostList from './blog-component/post-list';
import Footer from './global-component/footer';

const News = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property News" subheader="News" />
        <PopularPost />
        <PostList />
        <Footer />
    </div>
}

export default News

