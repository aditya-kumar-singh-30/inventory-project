'use client'

import { FaBox, FaInfoCircle, FaTruck, FaWarehouse } from 'react-icons/fa';

export default function ProductInfoPage() {
  const productInfo =[
    {
      "ProductName": "Cisco ISR 1101",
      "Description": "ISR 1101 4 Ports GE Ethernet WAN Router",
      "Product Image": null,
      "Product Cateogy Name": "Router",
      "Model Number": "XYZ123",
      "Serial Number": "6a38028c-6a71-4f44-b8f6-253bc7086a0a",
      "StockLevel": 500,
      "ReorderPoint": 150,
      "Supplier Name": "Cisco",
      "Supplier Mail": "abcd@mail.com",
      "Supplier Contact": 1234567890,
      "Order Date": "2023-01-15T00:00:00",
      "Quantity": 500,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "HP 5406zl",
      "Description": "HP ProCurve Switch 5406zl",
      "Product Image": null,
      "Product Cateogy Name": "Switch",
      "Model Number": "ABC456",
      "Serial Number": "7edc108e-45e0-4997-bc59-17852d16b689",
      "StockLevel": 300,
      "ReorderPoint": 100,
      "Supplier Name": "HP",
      "Supplier Mail": "abhp@mail.com",
      "Supplier Contact": 1980762345,
      "Order Date": "2023-11-05T00:00:00",
      "Quantity": 300,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "DOCSIS 3.1 Cable Modem",
      "Description": "Superfast speeds up to 10 gigabits per second (Gbps)",
      "Product Image": "modem.jpg",
      "Product Cateogy Name": "Modem",
      "Model Number": "LMN789",
      "Serial Number": "e41e2e16-2945-4c0c-a584-48935742fe94",
      "StockLevel": 200,
      "ReorderPoint": 50,
      "Supplier Name": "Netgear",
      "Supplier Mail": "Neger@mail.com",
      "Supplier Contact": 9256476541,
      "Order Date": "2023-08-06T00:00:00",
      "Quantity": 200,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "Cellular Duplexer Rx",
      "Description": "A multiplexer product that is RoHS6 compliant",
      "Product Image": null,
      "Product Cateogy Name": "Multiplexer",
      "Model Number": "DSC423",
      "Serial Number": "6aac9135-9ceb-4535-a13a-fc04ad8dadd5",
      "StockLevel": 200,
      "ReorderPoint": 50,
      "Supplier Name": "Broadcom",
      "Supplier Mail": "brcom@mail.com",
      "Supplier Contact": 1759731673,
      "Order Date": "2023-05-16T00:00:00",
      "Quantity": 200,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "SBB100 Splitter Trough Block",
      "Description": "Splitter block with copper-aluminium monopiece connector",
      "Product Image": "splitter.jpg",
      "Product Cateogy Name": "Splitter",
      "Model Number": "BGH678",
      "Serial Number": "b01f5fea-f863-441e-9150-c5595caa9f01",
      "StockLevel": 400,
      "ReorderPoint": 75,
      "Supplier Name": "BELL",
      "Supplier Mail": "blee@mail.com",
      "Supplier Contact": 1256476893,
      "Order Date": "2023-10-06T00:00:00",
      "Quantity": 400,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "Apple Mac Mini",
      "Description": "Compact desktop computer by Apple",
      "Product Image": "macmini.jpg",
      "Product Cateogy Name": "Desktop",
      "Model Number": "MAC2023",
      "Serial Number": "ad3038c9-f816-4c49-9dff-1f3ea6fb9ad1",
      "StockLevel": 120,
      "ReorderPoint": 30,
      "Supplier Name": "Apple",
      "Supplier Mail": "apple@mail.com",
      "Supplier Contact": 9856473698,
      "Order Date": "2023-09-10T00:00:00",
      "Quantity": 120,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "Samsung QLED TV",
      "Description": "QLED TV with 8K resolution",
      "Product Image": "qledtv.jpg",
      "Product Cateogy Name": "Television",
      "Model Number": "QLED2023",
      "Serial Number": "b56e9ad3-62f9-4ff2-b531-b7cc58235d78",
      "StockLevel": 80,
      "ReorderPoint": 20,
      "Supplier Name": "Samsung",
      "Supplier Mail": "sam@mail.com",
      "Supplier Contact": 9123456789,
      "Order Date": "2023-07-25T00:00:00",
      "Quantity": 80,
      "Order Status": "Delivered"
    },
    {
      "ProductName": "Sony WH-1000XM4",
      "Description": "Wireless noise-canceling headphones",
      "Product Image": "headphones.jpg",
      "Product Cateogy Name": "Audio",
      "Model Number": "WHXM4",
      "Serial Number": "c02e658e-3ab4-4042-9821-d9dfe9d854b1",
      "StockLevel": 150,
      "ReorderPoint": 40,
      "Supplier Name": "Sony",
      "Supplier Mail": "sony@mail.com",
      "Supplier Contact": 9876543210,
      "Order Date": "2023-06-18T00:00:00",
      "Quantity": 150,
      "Order Status": "Delivered"
    }
  ]
  

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sections = [
    {
      title: "Product Details",
      icon: FaBox,
      fields: ["ProductName", "Description", "Product Cateogy Name", "Model Number", "Serial Number"],
    },
    {
      title: "Inventory Information",
      icon: FaWarehouse,
      fields: ["StockLevel", "ReorderPoint"],
    },
    {
      title: "Supplier Information",
      icon: FaTruck,
      fields: ["Supplier Name", "Supplier Mail", "Supplier Contact"],
    },
    {
      title: "Order Information",
      icon: FaInfoCircle,
      fields: ["Order Date", "Quantity", "Order Status"],
    },
  ];

  const renderField = (key, value) => {
    if (key === "ProductName") {
      return <p className="text-2xl font-bold mb-2">{value}</p>;
    }
    if (key === "Description") {
      return <p className="text-gray-600 mb-4">{value}</p>;
    }
    if (key === "StockLevel") {
      return (
        <div className="mb-4">
          <p className="font-semibold">Current Stock Level:</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      );
    }
    if (key === "Order Date") {
      return (
        <div>
          <p className="font-semibold">{key}:</p>
          <p>{formatDate(value)}</p>
        </div>
      );
    }
    return (
      <div>
        <p className="font-semibold">{key}:</p>
        <p className={key === "Serial Number" ? "break-all" : ""}>{value || "N/A"}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <section.icon className="mr-2" /> {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {section.fields.map((field) => (
                <div key={field}>
                  {renderField(field, productInfo[field])}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

