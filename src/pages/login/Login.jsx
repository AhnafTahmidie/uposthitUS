import React from 'react'
import './login.css'
import loginImage from '../../images/login.jpg';

const Login = () => {
  return (
    <div className='block h-screen bg-gradient-to-r from-violet-500 to-violet-200 flex items-center justify-center'>
      <div className="container h-content w-content rounded-3xl grid grid-cols-2 bg-white shadow-2xl">
        <div className="left lg:my-36 md:my-16 sm:my-3 lg:ml-8 md:ml-4 grid grid-cols-1 lg:gap-6  justify-items-center items-center">
          <span className="logo text-violet-600 text-5xl font-black font-lobster sm:mb-6 lg:m-0">Welcome Back !</span>
          <form className="w-4/5 mb-6">
            <div className="mb-6 justify-self-start">
              <div className="md:w-full txt_field ">
              <input type="email" id='login-email' className='focus:border-none focus:outline-none focus:ring-0' required/>
                <span></span>
                <label>E-Mail</label>
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-full txt_field">
                <input type="password" id='login-password' className='focus:border-none focus:outline-none focus:ring-0' required/>
                <span></span>
                <label>Password</label>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <label className="block text-gray-500 font-bold flex items-center">
                <input className="mr-2 leading-tight focus:ring-0 rounded-sm ring-0 transition-all" type="checkbox"/>
                <span className="text-md">
                  Remember Me
                </span>
              </label>
              <label className="block text-gray-500 font-bold">
                <span className="text-md cursor-pointer hover:text-violet-600 transition-all">
                  Forgot Password?
                </span>
              </label>
            </div>
            <div className="md:w-full grid grid-cols-1 justify-items-center items-center">
              <button className="shadow bg-violet-600 hover:bg-violet-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 transition-all rounded-full" type="submit">
                Log In
              </button>
            </div>
          </form>
            <div className="flex justify-items-center items-center">
              <label className="block text-gray-500 font-bold">
                <span className="text-md lg:mr-4 sm:mr-2">
                  Don't have an account?
                </span>
              </label>
              <button className="shadow bg-white text-violet-600 border border-violet-600 hover:bg-violet-600 hover:text-white focus:shadow-outline focus:outline-none text-white font-bold lg:py-2 lg:px-8 sm:py-1 sm:px-2 transition-all rounded-full" type="button">
                Create New
              </button>
            </div>
        </div>
        <div className="right flex items-center rounded-r-3xl lg:mr-16">
          <img src={loginImage} alt="" className='rounded-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default Login