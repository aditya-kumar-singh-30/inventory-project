"use client"
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import Dashboard from '../../Components/Dashboard/Dashboard'

const page = () => {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <Footer/>
    </>
  );
}

export default page;
