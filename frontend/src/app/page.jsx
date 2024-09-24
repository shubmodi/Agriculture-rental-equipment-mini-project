'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fastar } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import Link from "next/link";

const Home = () => {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/getall");
        setItems(response.data);
        setFilteredData(response.data);
      } catch (err) {
        console.error(err.response);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
    {/* Hero Section with Swiper Carousel */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      className="h-[80vh] rounded-lg shadow-lg overflow-hidden"
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: "url(https://onefarmer.in/images/main-slider/architect/banner2.jpg)",
          }}
          className="h-full bg-cover bg-center flex flex-col justify-center items-start p-6 md:p-8 bg-opacity-70"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 drop-shadow-md">ONE FARMER</h1>
          <p className="mt-4 text-md md:text-xl text-green-600 font-bold drop-shadow-md">
            Book nearby agri machinery for your convenient time using our rental equipment app.
          </p>
          <p className="mt-2 text-sm md:text-lg text-green-600 drop-shadow-md">
            With a wide range of machinery available, you can maximize productivity and efficiency on your farm.
          </p>
          <p className="mt-2 text-sm md:text-lg text-green-600 drop-shadow-md">
            Join thousands of satisfied farmers who have transformed their operations with our easy-to-use platform.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg">
              <b>See More Equipments</b>
            </button>
            <Link href="/sign-up" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg">
              <b>Sign Up</b>
            </Link>
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 rounded-lg p-4 shadow-lg">
            <h2 className="text-lg font-bold text-green-600">Special Offer!</h2>
            <p className="text-sm text-gray-700">Get 20% off on your first rental.</p>
          </div>
        </div>
      </SwiperSlide>
  
      <SwiperSlide>
      <div
  style={{
    position: "relative", // To ensure the overlay is positioned correctly
    height: "100%",       // Ensures full height coverage
  }}
  className="flex flex-col justify-center items-start p-6 md:p-8"
>
  {/* Background Image */}
  <div
    style={{
      backgroundImage: "url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/05/19/pp-soil-rf-gettyc.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="absolute top-0 left-0 w-full h-full"
  ></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-green-600 drop-shadow-md">SMART FARMING</h1>
    <p className="mt-4 text-md backdrop-blur-md rounded-xl rounded-full  md:text-xl text-black-600 font-bold drop-shadow-md">
      <b>Leverage advanced farming techniques with our modern machinery.</b>
    </p>
    <p className="mt-2 text-sm backdrop-blur-md rounded-xl md:text-xl text-black-600 drop-shadow-md">
      <b>From precision farming to automation, we offer tools that help you cultivate smarter and more sustainably.</b>
    </p>
    <p className="mt-2 text-sm md:text-lg backdrop-blur-md rounded-xl text-green-600 drop-shadow-md">
      Discover innovative solutions that boost yields and reduce costs in your farming operations.
    </p>
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg">
        <b>Explore Equipments</b>
      </button>
      <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-lg">
        <b>Learn More</b>
      </button>
    </div>
  </div>

  {/* Bottom Info Box */}
  <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 rounded-lg p-4 shadow-lg">
    <h2 className="text-lg font-bold text-green-600">New Arrivals!</h2>
    <p className="text-sm text-gray-700">Check out our latest machinery available for rent.</p>
  </div>
</div>

      </SwiperSlide>
    </Swiper>
  
    {/* Search Bar */}
    <div className="flex justify-center mb-10 w-full">
      <input
        type="text"
        placeholder="Search Equipment"
        value={searchTerm}
        onChange={handleSearch}
        className="border border-green-400 py-3 mt-6 px-4 w-11/12 md:w-8/12 lg:w-6/12 rounded-full shadow-md focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-green-600 focus:shadow-lg"
      />
    </div>
  
    {/* Error Message */}
    {error && <div className="text-red-500 text-center mb-4">{error}</div>}
  
    {/* Promotions Section */}
    <div className="bg-green-50 p-6 text-center rounded-lg shadow-md mb-10">
      <h2 className="text-2xl font-bold mb-4">Special Promotions</h2>
      <p className="mb-4">Enjoy discounts up to 30% on selected equipment!</p>
      <Link href="/promotions" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
        <b>View Promotions</b>
      </Link>
    </div>
  
    {/* Product Grid */}
    <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredData.map((product) => (
        <div
          key={product._id}
          className="w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl relative group"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110"
              src={product.image}
              alt={product.name}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h2 className="font-bold text-xl text- droblackp-shadow-md">{product.name}</h2>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-lg">
                    {"★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="ml-2 text-gray-300 text-lg">({product.rating})</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                {product.isNew && (
                  <span className="inline-block bg-green-500 text-white text-sm font-semibold py-1 px-3 rounded-full">New</span>
                )}
                {product.isDiscounted && (
                  <span className="inline-block bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">Discounted</span>
                )}
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between items-center border-t border-gray-200">
            <div>
              {product.originalPrice && (
                <span className="text-lg font-semibold text-gray-500 line-through">{`₹${product.originalPrice}`}</span>
              )}
              <span className="text-lg font-semibold text-gray-800 block">₹{product.price}</span>
            </div>
            <Link href={`/productpage/${product._id}`}>
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300 hover:bg-blue-700 shadow-md">
                <span>View</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M4 12h16" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
          <div className="px-6 py-2">
            <button className="bg-gray-300 text-gray-800 py-1 px-3 rounded hover:bg-gray-400 transition">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  
    {/* Attractive Content Section */}
    <div className="w-full p-6 mt-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
          <p className="text-gray-600">We ensure all equipment is well-maintained and meets the highest standards.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p className="text-gray-600">Get competitive rates without compromising on quality.</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-600">Our team is here to provide guidance and support for all your farming needs.</p>
        </div>
      </div>
  
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold">Join Our Community!</h3>
        <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and special offers.</p>
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300 rounded" />
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition ml-2">Subscribe</button>
      </div>
    </div>
  </div>
  
  
  );
};

export default Home;