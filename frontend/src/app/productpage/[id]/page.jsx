"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const ProductDescriptionPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null); // State for the product

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getbyid/" + id)
      .then((response) => {
        setProduct(response.data); // Set the product data
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []); // Empty dependency array to run this effect only once on mount

  if (!product) {
    return <div className="h-screen">Loading...</div>; // Show loading if product data is not yet available
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto px-8 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-12 gap-8">
          {/* Product Image */}
          <div className="col-span-12 lg:col-span-6">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(product.rating)) +
                    "☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="ml-2 text-gray-600 text-lg">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <span className="text-2xl font-semibold text-gray-800 mb-4">
                ₹{product.price}
              </span>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-6">
                {product.description}
              </p>
            </div>

            {/* Buy Now Button */}
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <p className="text-gray-700">
            This section can include additional product details such as
            specifications, user reviews, or related products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
