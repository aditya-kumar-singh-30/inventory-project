import React from 'react';
import Users from '../../Components/Users/Users';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

const page = () => {
  return (
    <div>
        <Navbar/>
      <Users/>
      <Footer/>
    </div>
  );
}

export default page;
