'use client'
// import { IconCircleCheck, IconLoader, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const addproduct = () => {

  const singnupForm = useFormik({

    initialValues: {
      name: "",
      brand:'',
      image:'',
      about:'',
      rating:'',
      model:'',
      description:'',
      price:'',
    },
    onSubmit: (values,{ resetForm , setSubmitting}) => {

      // setTimeout(() => {

      //   console.log(values);
      //   // resetForm();
      //   setSubmitting(false);
        
      // }, 3000);
      
      
      //making a request
      axios.post('http://localhost:5000/product/add',values)
      .then((response) => {
        console.log(response?.status);
        resetForm();
        toast.success('User registered sucessfully')
      }).catch((err) => {
        console.log(err.response.data);
        setSubmitting(false);
        toast.error(err?.response?.data?.message);
        
      })
    }

  })

  return (
       <div className='w-screen min-h-screen bg-green-800 p-6 flex justify-center items-center'>
    <div className='p-6 rounded-lg w-full max-w-lg bg-gradient-to-b from-blue-500 to-green-500 shadow-lg'>
        <form onSubmit={singnupForm.handleSubmit} className='flex flex-col'>
            
            <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='text-lg mb-1 text-white font-bold'>
                    Product Name:
                </label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.name}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="brand" className='text-lg mb-1 text-white font-bold'>
                    Brand:
                </label>
                <input 
                    type="text"
                    id="brand"
                    name="brand"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.brand}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="image" className='text-lg mb-1 text-white font-bold'>
                    Image URL:
                </label>
                <input 
                    type="text"
                    id="image"
                    name="image"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.image}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="about" className='text-lg mb-1 text-white font-bold'>
                    About:
                </label>
                <input 
                    type="text" 
                    id="about"
                    name="about"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.about}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="rating" className='text-lg mb-1 text-white font-bold'>
                    Rating (1-5):
                </label>
                <input 
                    type="number"
                    id="rating"
                    name="rating"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.rating} 
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="model" className='text-lg mb-1 text-white font-bold'>
                    Model:
                </label>
                <input 
                    type="text" 
                    id="model"
                    name="model"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.model}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="price" className='text-lg mb-1 text-white font-bold'>
                    Price:
                </label>
                <input 
                    type="text" 
                    id="price"
                    name="price"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.price}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex flex-col mb-4'>
                <label htmlFor="description" className='text-lg mb-1 text-white font-bold'>
                    Description:
                </label>
                <input 
                    type="text" 
                    id="description"
                    name="description"
                    onChange={singnupForm.handleChange} 
                    value={singnupForm.values.description}
                    className='w-full h-12 rounded-lg p-2 bg-[rgba(90,133,134,0.7)] text-white focus:border-blue-600 focus:outline-none' 
                />
            </div>

            <div className='flex justify-end'>
                <button
                    className="py-3 px-6 mt-2 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    type='submit'>
                    Update
                </button>
            </div>

        </form>
    </div>
</div>

  )
}

export default addproduct

