"use client"
import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className='footer-container'>
            <div className="footer-left">
                <h1 className='lumen'>Lumen</h1>
                <p>TIMS <h4 className='heoo'>(Telecom Inventory Management System)</h4> Is your go-to solution for managing telecom products, services, users, suppliers, and stock. Streamline your operations and ensure seamless inventory management with TIMS</p>
            </div>
            <div className="footer-center">
                <h2>Lumen_Inventory</h2>
                <ul>
                    <li>Home</li>
                    <li>Inventory</li>
                    <li>Products</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>Lumen@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='Footer-copyright'>copyright @2024 Lumen.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer