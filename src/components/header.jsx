import React from "react";

export const Header =()=>{
return(

    <div className="bg-black text-white font-bold">
    <nav className="container mx-auto p-7 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Genre</a></li>
        <li><a href="#" className="hover:text-gray-300">Country</a></li>
      </ul>
      <div className="flex-grow mx-4 flex justify-center ">
        <input
          type="text"
          placeholder="Search movie"
          className="w-64 p-1 rounded bg-white text-black placeholder-black"
          style={{ borderRadius: '20px' }}
        />
        <i className='fas fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-black'></i>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Movies</a></li>
        <li><a href="#" className="hover:text-gray-300">Series</a></li>
        <li><a href="#" className="hover:text-gray-300">Animation</a></li>
        <li><a href="#" className="hover:text-gray-300">Login</a> / <a href="#" className="hover:text-gray-300">Signup</a></li>
      </ul>
    </nav>
  </div>

)
}