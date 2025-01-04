import React from 'react';
import Order from '@/Components/Order/Order';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

const page = () => {
  return (
    <div>
        <Navbar/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default page;
