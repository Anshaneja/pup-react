import React from 'react';
import { Link } from 'react-router-dom';
const Security = ()=>{
    return (
      <>
       <div className=''></div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div>
          
            <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600 ">Enter security code</h2>
          </div>
           
            <div className="mt-5 md:mt-0 md:col-span-2   ">
              <form action="#" method="POST">
                <div className="shadow  overflow-hidden sm:rounded-md py-3 ">
                  <div className="px-4 py-5 bg-white- space-y-6 sm:p-6 ">
                  
                    <fieldset >
                      <div>
                        <p className="text-sm text-gray-500">
                        Please check your phone for a text message with your code. Your code is 6 characters in length.</p>
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block py-2 font-bold w-full text-indigo-600 ">
                      Enter Code
                      </label>
                      <input
                        type="text"
                        name="enter-code"
                        id="enter-code"
                        autoComplete="enter-code"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Code"
                      />
                       <div>
                        <p className="text-sm text-gray-500">
                        We sent your code to:
+**********03</p>
                      </div>
                    </div>
                    </fieldset>
                  </div>
         <div className=" flex justify-around drop-shadow-xl ">
             <div className="text-sm flex justify-end">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Didn't get a code?
                </a>
              </div>
              <div className="flex justify-end" >
                <Link to="/forgot">
            <button
                type=""
                className=" mx-2  py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              > Cancel
              </button>
              </Link>
              <button
                type="submit"
                className="   py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              >
   Continue
              </button>
             
            </div>
            </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    
      </>
    )
  }
  export default Security;