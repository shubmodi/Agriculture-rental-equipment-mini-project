"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductDescriptionPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null); // State for the product
  const [items, setItems] = useState([]); // State for all products
  const [filteredData, setFilteredData] = useState([]); // State for filtered products
  const [activeTab, setActiveTab] = useState("Description"); // Active tab state

  useEffect(() => {
    // Fetch product by ID
    axios
      .get(`http://localhost:5000/product/getbyid/${id}`) // Fixed interpolation
      .then((response) => {
        setProduct(response.data); // Set the product data
      })
      .catch((err) => {
        console.error(err.response); // Log error response
      });
  }, [id]); // Dependency array includes id to refetch if id changes

  useEffect(() => {
    // Fetch all products
    axios
      .get("http://localhost:5000/product/getall")
      .then((response) => {
        setItems(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => {
        console.error(err); // Log error
      });
  }, []);

  if (!product) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>; // Show loading if product data is not yet available
  }

  return (
    <div className="min-h-screen grid grid-cols-12 gap-6 items-center justify-center mb-4 bg-slate-50 p-6">
    {/* Product Header */}
    <div className="col-span-12 w-full h-[10vh] bg-gradient-to-r from-green-600 to-green-800 p-4 flex items-center justify-between rounded-md shadow-lg transition-transform duration-300 hover:scale-105">
      <h1 className="text-white font-extrabold text-4xl">{product.name}</h1>
      {/* Wishlist Icon */}
      <button className="text-white hover:text-yellow-400 text-lg flex items-center transition duration-300 transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 12.121A5 5 0 0112 5a5 5 0 016.879 7.121L12 19.293l-6.879-7.172z"
          />
        </svg>
        <span className="ml-2">Add to Wishlist</span>
      </button>
    </div>
  
    {/* Product Details */}
    <div className="col-span-12 bg-white rounded-md shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
      <div className="grid grid-cols-12 gap-6 lg:h-[60vh] border-[1px] border-slate-200">
        {/* Product Image Carousel */}
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center rounded-md border-r-[1px] border-slate-200 p-8 max-h-full">
          <div className="relative group">
            <img
              className="max-w-full max-h-[50vh] object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
              src={product.image}
              alt={product.name}
            />
            {/* Zoom Effect */}
            <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:bg-opacity-30 transition duration-300"></div>
          </div>
        </div>
  
        {/* Product Info with Tabs */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-between mr-8 my-8">
          {/* Tabs */}
          <div className="tabs flex space-x-4 border-b border-gray-300 mb-4">
            {["Description", "Reviews", "FAQs"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 transition-all duration-300 ${
                  activeTab === tab ? "text-blue-600 border-b-2 border-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
  
          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "Description" && (
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 text-md lg:text-lg mb-4">{product.model}</p>
                <p className="text-gray-700 text-md lg:text-lg mb-4">{product.brand}</p>
                <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">₹{product.price}</span>
                
                {/* Product Rating */}
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-lg">
                    {"★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="ml-2 text-gray-600 text-lg">({product.rating})</span>
                </div>
  
                <p className="text-gray-700 text-md lg:text-lg mb-6">{product.about}</p>
              </div>
            )}
  
            {activeTab === "Reviews" && (
              <div>
                {/* Display Reviews */}
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((review) => (
                    <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded-md shadow-md transition-transform duration-300 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <span className="font-bold">{review.name}</span>
                        <span className="ml-4 text-yellow-400">
                          {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No reviews available.</p>
                )}
              </div>
            )}
  
            {activeTab === "FAQs" && (
              <div className="accordion">
                {/* Display FAQs */}
                {product.faqs && product.faqs.length > 0 ? (
                  product.faqs.map((faq) => (
                    <details key={faq.id} className="mb-4 bg-gray-100 p-4 rounded-md transition-transform duration-300 hover:shadow-md">
                      <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                      <p className="mt-2 text-gray-700">{faq.answer}</p>
                    </details>
                  ))
                ) : (
                  <p className="text-gray-600">No FAQs available.</p>
                )}
              </div>
            )}
          </div>
  
          {/* Buy Now Button */}
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition mt-4 shadow-md transform hover:scale-105">
            Available for Rent
          </button>
        </div>
      </div>
  
      {/* Stock and Offers */}
      <div className="col-span-12 flex justify-between items-center bg-gray-50 p-4 mt-4 rounded-md shadow-lg">
        <span className="text-lg text-gray-700">In Stock</span>
        <span className="text-green-700 font-bold">Free Shipping Available!</span>
        <span className="text-yellow-600 font-bold">Limited Time Offer: 10% OFF</span>
      </div>
  
      {/* Related Items Section */}
      <div className="col-span-12 w-full h-[10vh] bg-gradient-to-r from-green-600 to-green-800 p-4 flex items-center mt-6 rounded-md">
        <h1 className="text-white font-bold text-2xl">More Related Items</h1>
      </div>
  
      <div className="grid grid-cols-12 gap-6 mt-4">
        {filteredData.map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-auto rounded-lg overflow-hidden shadow-lg bg-white border-[1px] border-slate-200 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="max-w-full h-48 flex items-center justify-center">
              <img className="max-w-full h-48 object-contain rounded-md transition-transform duration-300 transform hover:scale-110" src={relatedProduct.image} alt={relatedProduct.name} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{relatedProduct.name}</div>
  
              {/* Rating for Related Product */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(relatedProduct.rating)) + "☆".repeat(5 - Math.floor(relatedProduct.rating))}
                </span>
                <span className="ml-2 text-gray-600 text-lg">({relatedProduct.rating})</span>
              </div>
  
              <p className="text-gray-700 text-base">{relatedProduct.about}</p>
            </div>
  
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">₹{relatedProduct.price}</span>
              <Link
                href={`/productpage/${relatedProduct.id}`}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-shadow duration-300 shadow-md hover:shadow-lg"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  

  );
};

export default ProductDescriptionPage;
