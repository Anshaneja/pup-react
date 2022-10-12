import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectItem({title, description, imageUrl, projectid}) {
    let navigate = useNavigate();

    return (
      <div>
        <div >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={imageUrl} alt="blog"/>
                        <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">To be Started on :  October 29,
                                2022</h2>
                            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
                            <p className="leading-relaxed mb-3 text-justify">{description}...</p>
                            <div className="flex items-center flex-wrap ">
                                <button onClick={ () =>{navigate(`/projectdesc/${projectid}`)}} className='focus bg-blue-300 text-black px-4 py-2 rounded-md' type="submit">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    )

} 