"use client"
import React, { useState } from 'react';
import SidePanel from "../SidePanel/SidePanel";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburgerClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-white h-16 min-w-full flex justify-between items-center">
        <div
          className="text-black text-4xl ml-5 cursor-pointer"
          onClick={handleHamburgerClick}
        >
      
          {open ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
        <div className="flex justify-center items-center gap-7 mr-5">
          <div className="text-black text-3xl">
            <FiSearch />
          </div>
          <div className="text-black text-3xl">
            <IoIosNotifications />
          </div>
          <div className="flex items-center w-auto ">
            <div className="text-black text-3xl">
              <IoMdPerson />
            </div>
            <div className="text-black text-base gap-5">Anne Lee</div>
          </div>
        </div>
      </div>

    
      {open && <SidePanel />}
    </>
  );
};

export default Navbar;
