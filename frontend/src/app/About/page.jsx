import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUser, faAddressBook, faTruck } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

const about = () => {
  return (
    <>
  {/* Hero Section */}
  <div
    className="h-[90vh] bg-cover bg-center relative"
    style={{
      backgroundImage:
        'url(https://static.vecteezy.com/system/resources/previews/006/036/999/large_2x/farmer-s-hand-planting-seeds-of-corn-tree-in-soil-agriculture-growing-or-environment-concept-free-photo.JPG)',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

    <section className="hero-section text-center relative z-10">
      <h1 className="hero-title flex justify-center pt-[10%] text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <b className="text-green-500">Agro</b>
        <b className="text-white">Beta</b>
        <b className="text-green-500">:</b>
        <b className="text-green-500">The Solution</b>
      </h1>
      <p className="flex justify-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
        <b>For Your Tomorrow's Agriculture</b>
      </p>
      <p className="hero-description text-base md:text-xl lg:text-2xl flex justify-center pt-2 md:pt-[2%] text-gray-300">
        <b>Welcome to rental equipment, cultivate innovation, and grow a sustainable future.</b>
      </p>
      <button className="mx-auto w-3/4 sm:w-[40%] md:w-[20%] py-2 md:py-3 lg:py-4 mt-4 hover:scale-105 rounded-xl text-white bg-green-700 text-xl md:text-2xl transition-transform">
        <b>Learn More</b>
      </button>
    </section>
  </div>

  {/* Feature Section */}
  <main>
    <section className="feature-section flex flex-wrap justify-center gap-6 py-8 px-4">
      {/* Card 1 */}
      <div className="card-container w-full sm:w-1/2 lg:w-1/4">
        <div className="card bg-green-700 h-[40vh] rounded-full p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg">
          <FontAwesomeIcon icon={faUser} className="text-white fa-3x mt-[5%] mb-20" />
          <h3 className="text-white text-3xl mb-2"><b>64</b></h3>
          <p className="text-black text-xl"><b>Active Farmers</b></p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card-container w-full sm:w-1/2 lg:w-1/4">
        <div className="card bg-green-700 h-[40vh] rounded-full p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg">
          <FontAwesomeIcon icon={faAddressBook} className="text-white fa-3x mt-[5%] mb-20" />
          <h3 className="text-white text-3xl mb-2"><b>42</b></h3>
          <p className="text-black text-xl"><b>Active Vendors</b></p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card-container w-full sm:w-1/2 lg:w-1/4">
        <div className="card bg-green-700 h-[40vh] rounded-full p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg">
          <FontAwesomeIcon icon={faTruck} className="text-white fa-3x mt-[5%] mb-20" />
          <h3 className="text-white text-3xl mb-2"><b>106</b></h3>
          <p className="text-black text-xl"><b>No. of Machines</b></p>
        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section className="about-us py-12 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold mb-6">About Us</h2>
      <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
        At <b>AgroBeta</b>, we aim to revolutionize agriculture by providing modern solutions such as rental equipment, sustainable farming practices, and expert insights. Join us on our journey to cultivate innovation and grow a greener future for generations to come.
      </p>
    </section>

    {/* Services Section */}
    <section className="services py-12">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="service-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Equipment Rental</h3>
          <p className="text-lg text-gray-600">
            Access a variety of farming equipment to boost your agricultural productivity. Our affordable and reliable rental services are available to all farmers.
          </p>
        </div>
        <div className="service-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Sustainable Farming Solutions</h3>
          <p className="text-lg text-gray-600">
            Implement cutting-edge sustainable farming practices that improve yield and promote environmental health. Let us help you build a greener tomorrow.
          </p>
        </div>
        <div className="service-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Consultation</h3>
          <p className="text-lg text-gray-600">
            Our expert consultants are here to guide you through every step of your farming journey, from seed selection to harvest optimization.
          </p>
        </div>
      </div>
    </section>

    {/* Blog Section */}
    <section className="blog py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl text-center text-green-700 font-bold mb-8">Latest Blog Posts</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="blog-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-green-700">How Sustainable Agriculture is the Future</h3>
          <p className="text-lg text-gray-600">
            Discover how sustainable farming practices are changing the agricultural landscape for future generations...
          </p>
          <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
            Read More
          </button>
        </div>
        <div className="blog-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Top 5 Farming Technologies You Should Know</h3>
          <p className="text-lg text-gray-600">
            Learn about the latest technologies that are revolutionizing the way farmers work...
          </p>
          <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
            Read More
          </button>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials py-12 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold mb-8">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="testimonial-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg text-gray-600 mb-4">
            "AgroBeta's services have transformed our farming operations. The rental equipment has been a game-changer for us."
          </p>
          <h3 className="text-xl font-bold text-green-700">- John Doe, Farmer</h3>
        </div>
        <div className="testimonial-card w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
          <p className="text-lg text-gray-600 mb-4">
            "Their sustainable farming solutions have helped us increase yields while preserving the environment. Highly recommend!"
          </p>
          <h3 className="text-xl font-bold text-green-700">- Jane Smith, Vendor</h3>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="faq py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="faq-item w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-md text-left">
          <h3 className="text-xl font-bold text-green-700 mb-4">How can I rent equipment?</h3>
          <p className="text-lg text-gray-600">
            Renting equipment is easy! Simply browse through our available machines and fill out the rental form on our website.
          </p>
        </div>
        <div className="faq-item w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-300 rounded-md text-left">
          <h3 className="text-xl font-bold text-green-700 mb-4">What sustainable practices do you offer?</h3>
          <p className="text-lg text-gray-600">
            We provide various sustainable farming techniques, such as crop rotation, organic fertilizers, and efficient water usage methods.
          </p>
        </div>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="cta-banner py-12 bg-green-700 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Farm with Us?</h2>
      <p className="text-lg md:text-2xl mb-6">Join hundreds of farmers and vendors who are benefiting from our services.</p>
      <button className="px-6 py-3 bg-white text-green-700 text-xl rounded-lg hover:bg-gray-200 transition">
        Get Started Today
      </button>
    </section>

    {/* Contact Section */}
    <section className="contact py-12 text-center">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold mb-6">Contact Us</h2>
      <p className="text-xl text-gray-700 mb-6">Have questions? We're here to help! Reach out to us for any inquiries or support.</p>
      <Link
        className="px-6 py-3 bg-green-700 text-white text-xl rounded-lg hover:scale-105 transition-transform"
        href="/contact-us"
      >
        Get in Touch
      </Link>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} AgroBeta. All Rights Reserved.</p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  </main>
</>


  

  )
}

export default about;