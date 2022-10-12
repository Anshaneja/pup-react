import React from 'react';
import { Link } from 'react-router-dom';
const Reset = ()=>{
    return (
      <>
       <div className=''></div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 ">
          <div>
        
            <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600 ">Reset Your Password</h2>
          </div>
           
            <div className="mt-5 md:mt-0 md:col-span-2   ">
              <form action="#" method="POST">
                <div className="shadow  overflow-hidden sm:rounded-md py-3 ">
                  <div className="px-4 py-5 bg-white- space-y-6 sm:p-6 ">
                  
                    <fieldset >
                      <div>
                        <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                        <p className="text-sm text-gray-500">
                How do you want to receive the code to reset your password?</p>
                      </div>
                      <div className="mt-4 space-y-4">
                       
                        <div className="flex items-center ">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-6 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="push-email" className=" ml-3 block text-sm font-medium text-gray-700">
                          Send code via email
                          {/* email */}
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-6 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          Send code via SMS
{/* {number} */}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
         <div className=" flex justify-around ">
            
              <Link to="/forgot">
            <button
                type=""
                className=" mx-2  py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              > Not You?
              </button>
              </Link>
              <Link to="/security">
              <button
                type="submit"
                className="   py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500  hover:text-white"
              >
   Continue
              </button>
             </Link>
            </div>
            </div>
     
              </form>
            </div>
          </div>
        </div>
      
    
      </>
    )
  }
  export default Reset;