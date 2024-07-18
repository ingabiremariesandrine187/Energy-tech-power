import React from "react";
import { FaCircle } from "react-icons/fa";

export const Main =()=>{
return(
    
     <div className="container  h-auto bg-custom-image w-full">
        <div className='flex flex-col align-center'>
          <div className='flex  space-x-4 justify-center pt-16'>
            <button className="dark bg-red-900 text-white font-bold py-2 px-4 rounded">
              Watch now
            </button>
            <button className='bg-transparent border border-red-900 text-white font-bold py-2 px-4 rounded'>Watch later</button>
          </div>
          <div className='pl-10 pt-8'>
            <h1 className='text-white text-lg font-bold'>Avatar:the way of water</h1>
            <div className='flex space-x-4'>
              <button className='bg-white text-black font-bold py-2 px-4 rounded-full text-sm'>Action</button>
              <button className='bg-white text-black font-bold py-2 px-4 rounded-full text-sm'>Adventure</button>
              <button className='bg-white text-black font-bold py-2 px-4 rounded-full text-sm'>Science Fiction</button>
              <p className='text-md font-normal text-white'>2022</p>
              <p className='text-md font-normal text-white'>3:12:00</p>
              <p className='text-md font-normal text-white'>8.5</p>
            </div>
            <div className='text-white text-bold'><p>Set more that a decade after the event of the first film learn the story of the</p>
              <p>sully family(juky,neytri and their kids)the trouble that flows them the</p><p>lenghts they go to keep each other safe and their safethe battles they fight to stay alive,</p><p>and the tragedies they endure.</p>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-row'>
           <hr className="border-2 border-red-700 w-16 my-4" />
            <div className='font-bold text-white text-8xl '>....</div> 
            </div>
         */}
        <div className="flex flex-row items-center gap-4 justify-center">
          <div><hr className="border-2 border-red-700 w-12 my-8" /></div>
          <div className='flex flex-row gap-2'><FaCircle className="text-white" /><FaCircle className="text-white" /><FaCircle className="text-white" /></div>
        </div>

      </div>
    
)
}