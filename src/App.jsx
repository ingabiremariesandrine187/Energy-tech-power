import React from 'react';
import image1 from "./assets/Rectangle 22.png";
import image2 from "./assets/Rectangle 22 (3).png";
import image3 from "./assets/Rectangle 22 (2).png";
import image4 from "./assets/Rectangle 22 (1).png";
import image5 from "./assets/Rectangle 3.png";
import image6 from "./assets/Rectangle 4.png";
import image7 from "./assets/Rectangle 5.png";
import image8 from "./assets/Rectangle 6.png";
import image9 from "./assets/Rectangle 7.png";
import image10 from "./assets/Rectangle 8.png";
import image11 from "./assets/Rectangle 9.png";
import image12 from "./assets/Rectangle 14.png";
import image13 from "./assets/Rectangle 15.png";
import image14 from "./assets/Rectangle 16 (1).png";
import image15 from "./assets/Rectangle 17.png";
import image16 from "./assets/Rectangle 19.png";
import image17 from "./assets/Rectangle 20.png";
import image18 from "./assets/Rectangle 21.png";
import image19 from "./assets/Rectangle 10.png";
import image20 from "./assets/Rectangle 11.png";
import image21 from "./assets/Rectangle 12.png";
import image22 from "./assets/Rectangle 13.png";
import { FaCircle } from 'react-icons/fa';
import { Header } from './components/header';
import {Main} from './components/header';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* startheader */}
      <Header />
      {/* end header */}
      {/* start main */}
       <Main />
      {/* endmain */}
      <div className='bg-black h-auto text-white'>
        <div className='font-bold'> Recently updated</div>

        <div className='flex justify-around'>
          <div className='flex'><div className='flex-1 w-14'><img src={image1} alt='image1' />
          </div>
            <div>
              <div>Silo</div>
              <div>Series S/2 Ep9</div>
              <div>11/05/23</div>
            </div>
          </div>
          <div className='flex'><div className='flex-1 w-14'><img src={image2} alt='image2' /></div>
            <div>
              <div>The Flash</div>
              <div>Series S1/ep5</div>
              <div>11/05/23</div>
            </div>
          </div>
          <div className='flex'><div className='flex-1 w-14'><img src={image3} alt='image3' /></div>
            <div>
              <div>Fubar</div>
              <div>Series S1/ep5</div>
              <div>11/05/23</div>
            </div>
          </div>
          <div className='flex'><div className='flex-1 w-14'><img src={image4} alt='image4' /></div>
            <div>
              <div>Manifest</div>
              <div>Series S1/ep5</div>
              <div>11/05/23</div>
            </div>
          </div>
          <div>
            05
          </div>
        </div>
      </div>

      {/* start here */}
      <div className='font-bold'>Trending</div>
      <div className='flex flex-row'>
        <div className='flex-1 w-24 pl-8 pr-4 '><img src={image5} alt='image5' />

          <div className='flex space-x-4 pt-2'><div className='font-bold'>Medellin</div>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Action
            </button>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Comedy
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pl-4 '>
          <img src={image6} alt='image6' />
          <div className='flex space-x-4 pt-2'><div className='font-bold'>Fast-X</div>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Action
            </button>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Crime
            </button>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Triller
            </button>
          </div>
        </div>
        <div className='flex-1 w-24'>
          <img src={image7} alt='image7' />
          <div className='flex space-x-4 pt-2'><div className='font-bold'>The Black dem...</div>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Triller
            </button>
            <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Horro
            </button>
          </div>
        </div>
      </div>
      <div className='font-bold'>New realise-Movies</div>
      <div className='flex flex-row'>
        <div className='flex-1 w-24 '><img src={image8} alt='image8' />

          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Ghosted</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              HD
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 '><img src={image9} alt='image9' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>john wicky</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
        <div className='flex-1 w-24 '><img src={image10} alt='image10' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Guardians of the</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
        <div className='flex-1 w-24 '><img src={image11} alt='image11' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>The Convenient</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
      </div>
      <div className='font-bold'>New-release Series</div>
      <div className='flex flex-row'>
        <div className='flex-1 w-100'><img src={image19} alt='image19' />

          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Silo</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              HD
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 '><img src={image20} alt='image20' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Blacknight</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
        <div className='flex-1 w-24 '><img src={image21} alt='image21' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Drops of God</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
        <div className='flex-1 w-24 '><img src={image22} alt='image22' /><div className='flex space-x-4 pt-2'><div className='text-sm text-white'>The night agent</div>
          <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
            HD
          </button>
          <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
            3:12:00
          </button>
        </div></div>
      </div>


      <div className='flex space-x-4 pt-4'><div className='font-bold pb-1 text-white'>Recommended</div>

        <button className="bg-red-600 text-white px-4 py-2 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
          Movies
        </button>
        <button className="bg-transparent border border-red-500 text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
          Series
        </button>
        <button className="bg-transparent border border-red-500 text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
          animation
        </button>
      </div>
      <div className='flex flex-row'>
        <div className='flex-1 w-24 pb-4 pt-4'><img src={image12} alt='image12' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Robots</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>

        <div className='flex-1 w-24 pt-4 '><img src={image13} alt='image13' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Love again</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pt-4 '><img src={image14} alt='image14' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Hypnotic</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pt-4 '><img src={image15} alt='image15' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Paints</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>

        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex-1 w-24 pt-1 '><img src={image15} alt='image15' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>Book club</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pt-1 '><img src={image16} alt='image16' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>The Mother</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pt-1 '><img src={image17} alt='image17' />
          <div className='flex space-x-4 pt-2'><div className='text-sm text-white'>January 6th</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>
        </div>
        <div className='flex-1 w-24 pt-1  '><img src={image18} alt='image18' />
          <div className='flex space-x-4  pb-5'><div className='text-sm text-white '>Sisu</div>
            <button className="bg-red-600 text-white px-4 py-1 text-sm  hover:bg-red-600" style={{ borderRadius: '10px' }}>
              Cam
            </button>
            <button className="bg-transparent border border-red-500  text-white px-4 py-2 text-sm  " style={{ borderRadius: '10px' }}>
              3:12:00
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default App;
