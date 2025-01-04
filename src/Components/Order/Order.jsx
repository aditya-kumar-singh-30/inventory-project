"use client";

import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [filter, setFilter] = useState('All');

  // Hardcoded orders data based on your schema
  const orders = [
    { 
      id: 1, 
      orderDate: '2022-06-30', 
      orderStatus: 'Completed', 
      items: [
        { productId: 101, quantity: 1 },
        { productId: 102, quantity: 2 },
        { productId: 103, quantity: 1 },
      ]
    },
    { 
      id: 2, 
      orderDate: '2022-06-30', 
      orderStatus: 'Pending', 
      items: [
        { productId: 104, quantity: 1 },
        { productId: 105, quantity: 1 },
      ]
    },
    { 
      id: 3, 
      orderDate: '2022-07-01', 
      orderStatus: 'Completed', 
      items: [
        { productId: 106, quantity: 2 },
        { productId: 107, quantity: 2 },
        { productId: 108, quantity: 1 },
        { productId: 109, quantity: 1 },
      ]
    },
    { 
      id: 4, 
      orderDate: '2022-07-02', 
      orderStatus: 'Pending', 
      items: [
        { productId: 110, quantity: 3 },
        { productId: 111, quantity: 2 },
        { productId: 112, quantity: 1 },
        { productId: 113, quantity: 1 },
        { productId: 114, quantity: 2 },
      ]
    },
    { 
      id: 5, 
      orderDate: '2022-07-03', 
      orderStatus: 'Completed', 
      items: [
        { productId: 115, quantity: 1 },
      ]
    },
    { 
      id: 6, 
      orderDate: '2022-07-04', 
      orderStatus: 'Pending', 
      items: [
        { productId: 116, quantity: 2 },
        { productId: 117, quantity: 1 },
        { productId: 118, quantity: 1 },
      ]
    },
    { 
      id: 7, 
      orderDate: '2022-07-05', 
      orderStatus: 'Completed', 
      items: [
        { productId: 119, quantity: 1 },
        { productId: 120, quantity: 2 },
        { productId: 121, quantity: 1 },
      ]
    },
    { 
      id: 8, 
      orderDate: '2022-07-06', 
      orderStatus: 'Pending', 
      items: [
        { productId: 122, quantity: 1 },
        { productId: 123, quantity: 1 },
        { productId: 124, quantity: 2 },
      ]
    },
    { 
      id: 9, 
      orderDate: '2022-07-07', 
      orderStatus: 'Completed', 
      items: [
        { productId: 125, quantity: 1 },
        { productId: 126, quantity: 3 },
        { productId: 127, quantity: 1 },
      ]
    },
    { 
      id: 10, 
      orderDate: '2022-07-08', 
      orderStatus: 'Pending', 
      items: [
        { productId: 128, quantity: 1 },
        { productId: 129, quantity: 1 },
        { productId: 130, quantity: 2 },
      ]
    },
  ];

  // Filter the orders based on the selected filter
  const filteredOrders = orders.filter(order => {
    if (filter === 'Completed') {
      return order.orderStatus === 'Completed';
    } else if (filter === 'Not Completed') {
      return order.orderStatus !== 'Completed';
    }
    return true; // For 'All' filter
  });

  return (
    <div className="order-container">
      <header>
        <h1>Orders</h1>
        <div className="action-buttons">
          <button className="export-btn">Add</button>
          <button className="import-btn">Edit</button>
          <button className="new-order-btn">Delete</button>
        </div>
      </header>
      <div className="search-filter-section">
        <input type="text" placeholder="Search Here" className="search-bar" />
        <div className="filters">
          <button onClick={() => setFilter('All')} className="filter-btn">All</button>
          <button onClick={() => setFilter('Completed')} className="filter-btn">Completed</button>
          <button onClick={() => setFilter('Not Completed')} className="filter-btn">Not Completed</button>
        </div>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            order.items.map((item, idx) => (
              <tr key={`${index}-${idx}`}>
                <td><input type="checkbox" /></td>
                <td>{`#${order.id}`}</td>
                <td>{order.orderDate}</td>
                <td>{item.productId}</td>
                <td>{item.quantity}</td>
                <td>{order.orderStatus}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

