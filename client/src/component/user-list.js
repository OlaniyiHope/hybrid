import React from 'react';
import Navbar from './global-component/navbar';
import PageHeader from './global-component/page-header';
import UserListSection from './section-component/user-list';
import Footer from './global-component/footer';

const UserList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="User List" />
        <UserListSection />
        <Footer />
    </div>
}

export default UserList

