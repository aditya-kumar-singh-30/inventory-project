"use client"
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import Link from 'next/link'
const SidePanel = () => {
  return (
    <div className="h-screen w-28 bg-blue-900 text-white fixed top-0 left-0 shadow-lg mt-16  justify-center ">
   
     <div className='flex flex-col items-center mt-10 '>
        <Link href='/dashboard' className='text-2xl'><RxDashboard /></Link>
        <div className='font-semibold'>Dashboard</div>
     </div>

     <div className='flex flex-col items-center mt-10 '>
        <div className='text-2xl'><RxDashboard /></div>
        <div className='font-semibold'>Stocks</div>
     </div>

     <div className='flex flex-col items-center mt-10 '>
        <Link href="/order" className='text-2xl'><RxDashboard /></Link>
        <div className='font-semibold'>Orders</div>
     </div>

     <div className='flex flex-col items-center mt-10 '>
        <div className='text-2xl'><RxDashboard /></div>
        <div className='font-semibold'>Sales</div>
     </div>

     <div className='flex flex-col items-center mt-10 '>
        <div className='text-2xl'><FiUsers /></div>
        <div className='font-semibold'>Users</div>
     </div>
    </div>
  );
};

export default SidePanel;
