import Link from "next/link";
import React from "react";

const productpage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full md:h-[51vh] h-[35vh]sm:[40vh] ">
        <div
          className="w-full mx-auto mt-1 h-auto md:h-[50vh] mb-1 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://tractorpasion.com/storage/resources/publication/image/19744de4-fendt-1000-vario.jpg)",
          }}
        >
          <div className="grid grid-cols-12 items-center py-10 text-center md:text-start">
            <div className="col-span-12 md:col-span-8 order-last md:order-first ml-3">
              <h1 className="text-2xl md:text-3xl mb-3 border-b-4 border-black w-[75%] md:w-[63%] mx-auto md:mx-0">
                <b>
                  RENTALS
                  <p>CONSTRUCTION NEW</p>
                </b>
                <p className="text-red-900 mb-3">
                  <b>PRODUCTS AVAILABLE NOW</b>
                </p>
              </h1>
              <div className="flex justify-center md:justify-start gap-3">
                <button className="px-3 py-2 bg-orange-600 rounded-xl text-white hover:scale-105">
                  Read More
                </button>
                <button className="px-3 py-2 rounded-md text-blue-800 border-4 rounded-xl border-blue-600 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-8 bg-blue-500 rounded-t">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Featured Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://www.pacificagrentals.com/wp-content/uploads/2017/06/Par_Homepage_Implement_201706011402.jpg)",
                  background: "contain",
                  backgroundSize: "95%",
                }}
                className="w-full size-6 h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Taylor Pittsburgh
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://qspowerequipment.com/wp-content/uploads/2022/09/img-07-2-300x300.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Ironcraft 84″ Heavy Duty Gear Drive Tiller
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://qspowerequipment.com/wp-content/uploads/2022/09/5ft-yard-rake.jpg)",
                  background: "contain",
                  backgroundsize: "90%",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                6ft Yard Rake, York Rake
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://qspowerequipment.com/wp-content/uploads/2023/02/233-h-bb-series-hinged-back-box-blades.jpg)",
                  background: "contain",
                  backgroundSize: "95%",
                }}
                className="w-full size-6 h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Ironcraft 6′ Box Blade
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://qspowerequipment.com/wp-content/uploads/2023/02/ironcraft-tractor-uh-gear-drive-rotary-tiller-300x200.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover  mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                60″ Gear Driven Rotary Tiller
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://qspowerequipment.com/wp-content/uploads/2023/02/BPF_Series_Heavy_Duty_Flail_Mower-300x211.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Ironcraft 52″ Heavy Duty Flail Mower
              </h3>
              <p className="text-gray-300">Description of Equipment </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105  rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-blue-500">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center">
            {["John Doe", "Jane Smith", "Mike Johnson"].map((name, index) => (
              <div className="w-full md:w-1/3 p-4" key={index}>
                <blockquote className="bg-gray-100 p-6 shadow rounded">
                  <p className="text-lg italic">
                    "Great service and a wide selection of equipment!"
                  </p>
                  <footer className="mt-4 text-right">- {name}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog or News */}
      <section className="py-8 bg-blue-500 rounded-t">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 ">
            Tractors on rent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <di className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/new-tractor/Mahindra-Yuvraj-215-NXT1643366987.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Mahindra 265 DI
              </h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </di>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/tr:h-350,w-500/new-tractor/Captain-283-8G-4WD1644467914.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Captain 283 8G 4WD
              </h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/tr:h-350,w-500/new-tractor/Sonalika-DI-47-Rx1643697195.jpg)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Sonalika DI 47 Rx
              </h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/new-tractor/Tafe-35-DI1644302512.png)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">Tafe 35 DI</h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/new-tractor/Tafe-30-DI-Orchard-Plus1644302465.png)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                Tafe 30 DI Orchard Plus
              </h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
            <div className="bg-black p-1 rounded shadow">
              <img
                style={{
                  backgroundImage:
                    "url(https://assets.khetigaadi.com/new-tractor/VST-Shakti-MT-224-1D-AJAI-4WB1644307485.png)",
                  backgroundSize: "contain",
                }}
                className="w-full h-80 object-cover mb-10"
              />
              <h3 className="text-xl text-white font-semibold">
                VST Shakti MT 224 1D AJAI 4WB{" "}
              </h3>
              <p className=" text-gray-300">
                Brief description of the news or blog post.
              </p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 hover:scale-105 rounded-full">
                <a href="/contact-us">Send Enquiry</a>
              </button>
              <button className="mt-2 bg-blue-400 text-black px-6 py-2 ml-[50%] hover:scale-105  rounded-full">
                buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl ml-[60%] font-bold text-center">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-4">
                For inquiries, please fill out the form or contact us at:
              </p>
              <p className="mt-2">
                <b>Email:</b> contact@example.com
              </p>
              <p className="mt-2">
                <b>Phone:</b> +123 456 7890
              </p>
            </div>
            <div className="flex justify-center w-full  md:w-[40%] mt-6 md:mt-0">
              <a
                className="group inline-flex border-b-3 items-center py-2 px-10 bg-yellow-500 font-medium text-sm hover:scale-105 text-neutral-800 rounded-full focus:outline-none"
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default productpage;
