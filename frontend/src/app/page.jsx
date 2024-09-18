"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]); // State for products
  const [filteredData, setFilteredData] = useState([]); // State for filtered products
  const [searchTerm, setSearchTerm] = useState(""); // State for search

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getall")
      .then((response) => {
        setItems(response.data);
        setFilteredData(response.data); // Initially show all data
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  // Handle search functionality
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url(https://wallpaperbat.com/img/786683-tractor-implement-management-kubota-tim.jpg)",
        }}
        className="h-screen bg-cover bg-center"
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-4 py-4 w-full ">
          {/* Left Section (Text) */}
          <div className="flex justify-center items-center rounded md:col-span-5 col-span-12 md:h-[50vh] h-[40vh]">
            <div className="ml-[5%] md:ml-[10%] text-center md:text-left text-white">
              <h1 className="text-3xl md:text-5xl font-bold">TRACTORS</h1>
              <p className="mt-4 text-sm md:text-xl font-bold">
                We’ve Got More than 30 Tractor Models Available for Renting.
              </p>
              <button
                type="button"
                className="mt-4 md:mt-6 bg-yellow-400 text-black px-4 py-2 rounded-full hover:scale-105 transition-transform"
              >
                <Link href="/product">
                  <b>See More Equipments</b>
                </Link>
              </button>
            </div>
          </div>

          {/* Right Section (Title) */}
          <div className="md:col-span-7 col-span-12 bg-white rounded flex items-center justify-center h-[20vh] w-full">
            <h1 className="text-orange-500 text-2xl md:text-4xl text-center">
              <b>WELCOME TO THE RENTALS EQUIPMENTS</b>
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="border border-white py-2 px-4 w-11/12 md:w-8/12 lg:w-6/12 rounded-full focus:outline-none"
          />
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            type="button"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:scale-105 transition-transform"
          >
            <Link href="/sign-up">
              <b>Sign Up</b>
            </Link>
          </button>
          <button
            type="button"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:scale-105 transition-transform"
          >
            <Link href="/login">
              <b>Login</b>
            </Link>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full p-6 grid grid-cols-12 gap-6 bg-slate-50">
        {filteredData.map((product) => (
          <div
            key={product.id}
            className="w-full rounded overflow-hidden shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.image}
              alt="Product Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(product.rating)) +
                    "☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="ml-2 text-gray-600 text-lg">
                  ({product.rating})
                </span>
              </div>
              <p className="text-gray-700 text-base">{product.about}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                ₹{product.price}
              </span>
              <Link
                href={"/productpage/" + product._id}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
