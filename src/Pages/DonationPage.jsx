import React from 'react';


function DonateNow() {
    return (
        <div className='w-full'>
            <img className='m-auto'
                src="https://image.shutterstock.com/image-vector/doodle-concept-education-charity-donate-260nw-1737059882.jpg" alt="" />
            <h1 className='text-xl text-center '>You can donate by money Transfer to the bank account <br /> Account No. = 3700XXXXX01
                <br /> IFSC code = SBIN0003541</h1>
            <br />
            <h1 className='text-xl text-center '> Fill the form below after the transaction we will contact as soon as possible</h1>
            <div class="w-full max-w-xs m-auto">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-auto">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Mobile No.
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="Number" placeholder="9323XXXXX" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                           Transaction Id
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Id" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email id
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example@gmail.com" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Occupation
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Lawyer, Judge ..." />
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                           Submit
                        </button>
                        
                    </div>
                </form>
            </div> </div>
    )
}

export default DonateNow