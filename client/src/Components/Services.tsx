import { useState } from 'react';

export function Services() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#EAD6BC] flex flex-col items-center pb-4">
      <p className="font-bold">Services Include:</p>
      <div className="w-[40%] grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-EarClean.png" />
          <div>Ear Cleaning</div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-TeethBrush.png" />
          <div>Teeth Brushing</div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-NailTrim.png" />
          <div>Nail Trimming/Grinding</div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-AnalExpress.png" />
          <div>Anal Gland Expressing</div>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" mb-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
        {isHovered ? '(562)280-3755' : 'Call Now'}
      </button>
    </div>
  );
}
