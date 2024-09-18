import React from 'react'

const contactus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center py-12">
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div className="bg-white bg-opacity-90 shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
      
      {/* Contact Information Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">Fill up the form and our team will get back to you within 24 hours.</p>
        <div className="mb-4">
          <i className="fas fa-phone-alt"></i>
          <span className="ml-2">+0123 4567 8910</span>
        </div>
        <div className="mb-4">
          <i className="fas fa-envelope"></i>
          <span className="ml-2">hello@flowbase.com</span>
        </div>
        <div className="mb-4">
          <i className="fas fa-map-marker-alt"></i>
          <span className="ml-2">102 Street, 2714 Don</span>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="#" className="p-2 bg-white rounded-full text-purple-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-purple-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-purple-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-white via-gray-100 to-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Contact Us</h2>
        <p className="text-gray-600 mb-8">Any question or remarks? Just write us a message!</p>
        <form>
          {/* Name Fields */}
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email and Phone Fields */}
          <div className="flex gap-4 mb-4">
            <input
              type="email"
              placeholder="Mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Radio Buttons for Problem Type */}
          <div className="mb-4">
            <p className="mb-2 text-gray-700">What type of problem are you facing?</p>
            <div className="flex gap-4">
              {["Enquiry", "Server Issue", "Service", "Other"].map((label) => (
                <label key={label} className="flex items-center">
                  <input type="radio" name="problemType" className="mr-2" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Message Text Area */}
          <div className="mb-4">
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default contactus
