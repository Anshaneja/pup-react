import React from 'react';

import { Link } from 'react-router-dom';
const Forgot = ()=> {
  return (
    <>
   <div className=''></div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
         
            <h2 className="mt-6 text-center text-3xl font-extrabold  text-indigo-600 " >Forgot Password</h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            
            <div className="rounded-md shadow-sm -space-y-px">
           
             
              <div>
                <label htmlFor="email-address" className=" block py-2 font-bold w-full text-indigo-600 ">
                Please enter your login id to search for your account.
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-lg"
                  placeholder="you@example.com"
                />
              </div>
             
              
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                 I accept the <span className="font-bold text-indigo-600 ">Terms of Use</span> & <span className="font-bold text-indigo-600 ">Privacy Policy</span>
                </label>
              </div>

              
            </div>

            <div className="flex justify-end" >
              <Link to="/signin">
            <button
                type=""
                className=" mx-2  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              >
            
                Cancel
              </button>
              </Link>
              <Link to ="/reset">
              <button
                type="submit"
                className="   py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              >
            Search
              </button>
              </Link>
            </div>
            
           
       
          </form>
          
        </div>
     
      </div>
     
    </>
  )
}
export default Forgot;