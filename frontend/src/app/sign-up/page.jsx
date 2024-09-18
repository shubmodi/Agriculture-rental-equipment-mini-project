'use client'

import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password : Yup.string().required('password is required')
    .matches(/[a-z]/,'lowercase required')
    .matches(/[A-Z]/,'uppercase required')
    .matches(/[0-9]/,'number required')
    .matches(/[\W]/,'special character is required'),
    confirmPassword:Yup.string().required('confirm password is required')
     .oneOf([Yup.ref('password'),null],'password must match')
 
});


const signup = () => {
  const signupForm = useFormik({
    initialValues: {
      email : '',
      password : ''
      // confirmPassword : '',
    },
    onSubmit: (values , {resetForm,setSubmitting}) => {


      // making a request
      axios.post('http://localhost:5000/user/add',values)
      .then((response)=>{
        console.log(response?.status)
        resetForm()
        toast.success('user registered successfully')
      }).catch((err)=>{
        console.log(err);        
        console.log(err.response?.data?.message);
        setSubmitting(false)
      })
    },
    validationSchema: SignupSchema
  });

  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundImage:"url(https://wallpapercave.com/wp/wp6994299.jpg)" ,
      backgroundSize:"cover"
    }}>
      <div className="bg-gray-300 w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        {/* Sign In Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <p className="text-gray-600 text-center mb-4">or use your email password</p>
          <form>
            <div className="mb-4 ">
              <input
                type="email" 
                onChange={signupForm.handleChange} 
                value={signupForm.values.email}
                placeholder="Email" 
                id='email' 
                name='email'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password" 
                onChange={signupForm.handleChange} 
                value={signupForm.values.password}
                placeholder="Password" 
                id='password' 
                name='password' 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-purple-800 text-sm">Forgot Your Password?</a>
            </div>
            <button
              type="submit" 
              // disabled={signupForm.issubmitting}
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-white flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Hello, Friend!</h2>
          <p className="mb-8 text-center">
            Register with your personal details to use all of the site's features.
          </p>
        </div>
      </div>
    </div>
  )
}

export default signup
