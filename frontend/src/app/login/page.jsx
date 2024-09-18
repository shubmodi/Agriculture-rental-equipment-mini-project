import React from 'react'

const login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" style={{backgroundImage:"url(https://wallpapercave.com/wp/wp5148950.jpg)" ,
      backgroundSize:"cover"
    }}>
    {/* Card Container */}
    <div className="bg-white rounded-lg shadow-md p-6 w-[95%] sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-[55%] flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="hidden md:block w-full md:w-1/2 bg-cover rounded-lg bg-center" 
        style={{
          backgroundImage: 'url(https://cdn3d.iconscout.com/3d/premium/thumb/boy-presenting-4831431-4018609.png)'
        }}>
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex bg-blue-400 flex-col justify-center rounded-lg px-8 py-10">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left"><b>Log in to your account</b></h2>
        <div className="flex justify-center md:justify-start gap-12 mb-6">
          {/* Social Icons (can be image/icon-based buttons) */}
          <button className="bg-black text-white p-2 rounded-full">
          <i className="fab fa-apple"></i> {/* Apple icon */}
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full">
            <i className="fab fa-github"></i> {/* Github icon */}
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full">
            <i className="fab fa-google"></i> {/* Google icon */}
          </button>
          <button className="bg-blue-900 text-white p-2 rounded-full">
            <i className="fab fa-windows"></i> {/* Windows icon */}
          </button>
        </div>

        <p className="text-gray-900 text-center md:text-left mb-4">Or log in with an email</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-900">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-gray-900">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Log in
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>Don't have an account? <a href="#" className="text-pink-900"><b>Register</b></a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default login
