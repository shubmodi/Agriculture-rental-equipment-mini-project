import React from 'react'

const Footer = () => {
  return (
    <div><footer className="w-full  bg-orange-300 p-6">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Footer Info */}
      <div className="col-span-12 md:col-span-6">
        <h1 className="text-2xl font-bold">ⓒ RENTAL EQUIPMENTS</h1>
        <p className="mt-2">
          A-Z LIST: Search Rental Equipments by alphabet from A to Z.
        </p>
        <p>
          This website stores files on our server and links to media hosted on third-party services.
        </p>
        <p className="text-md font-bold mt-5">
          ⓒ RENTAL EQUIPMENTS.in. All Rights Reserved
        </p>
      </div>

      {/* Quick Links (Column 1) */}
      <div className="col-span-6 md:col-span-3">
        <h1 className="text-xl font-bold">Quick Links</h1>
        <a className="block hover:text-blue-600" href="#">
          Home
        </a>
        <a className="block hover:text-blue-600" href="#">
          About
        </a>
        <a className="block hover:text-blue-600" href="#">
          Contact
        </a>
        <a className="block hover:text-blue-600" href="#">
          Services
        </a>
      </div>

      {/* Quick Links (Column 2) */}
      <div className="col-span-6 md:col-span-3">
        <h1 className="text-xl font-bold">Quick Links</h1>
        <a className="block hover:text-blue-600" href="#">
          Home
        </a>
        <a className="block hover:text-blue-600" href="#">
          About
        </a>
        <a className="block hover:text-blue-600" href="#">
          Contact
        </a>
        <a className="block hover:text-blue-600" href="#">
          Services
        </a>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer