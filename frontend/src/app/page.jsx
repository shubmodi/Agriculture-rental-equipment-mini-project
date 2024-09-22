'use client'
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
    autoplay={{ delay: 3000 }}
    className="h-full w-full"
  >
    <SwiperSlide>
    
    <div
    style={{
      backgroundImage: "url(https://onefarmer.in/images/main-slider/architect/banner2.jpg)",
    }}
    className="h-[50vh] md:h-[70vh] bg-cover bg-center flex flex-col pt-[10%]"
  >
    <div className="text-center md:text-left text-white px-4 md:px-20">
      <h1 className="text-3xl md:text-5xl font-bold text-green-600 animate-fade-in">
        JOIN THE COMMUNITY
      </h1>
      <p className="mt-4 text-sm md:text-xl text-green-600 font-bold animate-slide-in">
        Connect with local farmers and share your experiences.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <button className="bg-green-600 text-black px-4 py-2 rounded-full hover:scale-105 transition-transform">
          <b>Join Us</b>
        </button>
        <button className="bg-green-600 text-black px-6 py-2 rounded-full hover:scale-105 transition-transform">
          <b>Learn More</b>
        </button>
      </div>
    </div>
  </div>
    </SwiperSlide>

    <SwiperSlide>
      <div
        style={{
          backgroundImage: "url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/05/19/pp-soil-rf-gettyc.jpg)",
        }}
        className="h-[50vh] md:h-[70vh] bg-cover bg-center flex flex-col pt-[10%]"
      >
        <div className="text-center md:text-left text-white px-4 md:px-20">
          <h1 className="text-3xl md:text-5xl font-bold text-green-600 animate-fade-in">
            SMART FARMING
          </h1>
          <p className="mt-4 text-sm md:text-xl text-green-600 font-bold animate-slide-in">
            Leverage advanced farming techniques with modern machinery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-green-600 text-black px-4 py-2 rounded-full hover:scale-105 transition-transform">
              <b>Explore Equipments</b>
            </button>
            <button className="bg-green-600 text-black px-6 py-2 rounded-full hover:scale-105 transition-transform">
              <b>Learn More</b>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  {/* Search Bar */}
  <div className="flex justify-center mb-10 w-full">
    <input
      type="text"
      placeholder="Search equipment..."
      value={searchTerm}
      onChange={handleSearch}
      className="border border-green-400 py-2 mt-6 px-4 w-11/12 md:w-8/12 lg:w-6/12 rounded-full focus:outline-none shadow-xl"
    />
  </div>

  {/* Error Message */}
  {error && <div className="text-red-500 text-center">{error}</div>}

  {/* Product Grid */}
  <div className="w-full p-6 grid grid-cols-12 gap-6">
    {filteredData.map((product) => (
      <div
        key={product._id}
        className="w-full rounded overflow-hidden shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hover:shadow-xl transition-shadow duration-300"
      >
        <img
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
          src={product.image}
          alt="Product Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-lg">
              {"★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="ml-2 text-gray-600 text-lg">({product.rating})</span>
          </div>
          <p className="text-gray-700 text-base">{product.about}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">₹{product.price}</span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            View
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Testimonials Section */}
  <div className="w-full p-6 bg-gray-100 mt-10">
    <h2 className="text-2xl font-bold text-center">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="p-4 bg-white rounded shadow-lg">
        <p className="text-gray-600">"Great service! The machinery was top-notch and arrived on time."</p>
        <p className="font-bold text-right">- John Doe</p>
      </div>
      <div className="p-4 bg-white rounded shadow-lg">
        <p className="text-gray-600">"I love how easy it is to book and manage rentals!"</p>
        <p className="font-bold text-right">- Jane Smith</p>
      </div>
    </div>
  </div>

  {/* Featured Products Section */}
  {/* <div className="w-full p-6 mt-10">
    <h2 className="text-2xl font-bold text-center">Featured Products</h2>
    <div className="grid grid-cols-12 gap-6 mt-6">
      {featuredProducts.map((product) => (
        <div
          key={product._id}
          className="w-full rounded overflow-hidden shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
            src={product.image}
            alt="Product Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.about}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">₹{product.price}</span>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  </div> */}

  {/* Blog Highlights Section */}
  {/* <div className="w-full p-6 mt-10 bg-gray-100">
    <h2 className="text-2xl font-bold text-center">Latest Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {blogPosts.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded shadow-lg">
          <h3 className="font-bold text-xl">{post.title}</h3>
          <p className="text-gray-600 mt-2">{post.excerpt}</p>
          <Link href={`/blog/${post.id}`} className="text-blue-500 mt-4 block">Read More</Link>
        </div>
      ))}
    </div>
  </div> */}
</div>

  
  );
};

export default Home;