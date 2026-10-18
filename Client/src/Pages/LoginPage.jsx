import React from 'react'

import LoginIllustration from "../assets/illustrations/Login_page.png"
import LoginIllustration_mb from "../assets/illustrations/Login_page_mb.png"


const LoginPage = () => {
  return (

    <>
      <section className='hidden w-screen h-screen md:flex justify-between items-center'>


        <div className='w-[55%] h-full   bg-blue-400 p-2'>
          {/* Left Side Image */}
          <img src={LoginIllustration} alt="Image" className='h-full w-full object-cover' />
        </div>




        <div className='flex-1 h-full p-4'>

          <form
            action=""
            className=' h-full border px-4 py-10 space-y-6'
          >
            {/* Form heading */}
            <h2 className='text-2xl font-extrabold text-center mb-10'>Welcome Back !</h2>


            {/* Email Div */}
            <div className='flex flex-col gap-2 p-1'>
              <label htmlFor="email" className='text-md font-semibold'>E-mail</label>
              <input className="border h-13 px-4 bg-gray-200 rounded-3xl" type="text" name="email" id="email" placeholder='Enter your e-mail' />
              <p>erroe message</p>
            </div>


            {/* Password Div */}
            <div className='flex flex-col gap-2 p-1'>
              <label htmlFor="password" className='text-md font-semibold'>Password</label>
              <input className="border h-13 px-4 bg-gray-200 rounded-3xl" type="password" name="password" id="password" placeholder='Enter your password' />
              <p>erroe message</p>
            </div>


            <div className='text-right'>
              <span className='text-sm font-semibold text-gray-500 hover:underline cursor-pointer'>froget password</span>
            </div>


            {/* Button */}
            <button type='submit' className='h-12 w-full rounded-3xl  !text-xl !font-semibold bg-linear-to-r from-indigo-400 to-violet-600'>
              Login
            </button>

            <div className='text-center text-gray-600'>
              <p>Don't have an account? <span className='underline text-black font-semibold cursor-pointer '>Create one</span></p>
            </div>
          </form>
        </div>


      </section>








      {/* Mobile View*/}

      <div className="md:hidden w-screen h-screen bg-gray-100">
        <div className="w-full h-full bg-white p-6">

          <div className="flex justify-center">
            <img src={LoginIllustration_mb} alt="Image" className='h-[50%] w-[50%]' />
          </div>
          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button className="w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social login */}
          <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 hover:bg-gray-50">
            <img src="/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center border py-2 rounded-md mb-3 hover:bg-gray-50">
            <img src="/apple-logo.png" alt="Apple" className="w-5 h-5 mr-2" />
            Continue with Apple
          </button>

          <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-50">
            <span className="mr-2">👤</span>
            Continue as Guest
          </button>

          {/* Sign up */}
          <p className="text-center text-sm mt-6">
            Need an account?{" "}
            <a href="#" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>



    </>

  )
}

export default LoginPage
