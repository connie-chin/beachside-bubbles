import { useState } from 'react';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#EAD6BC] flex flex-col items-center justify-evenly p-2 border-2 border-red-400 h-fit sm:grid sm:grid-cols-2">
      <h1 className="text-black my-2 font-bold sm:hidden">
        Mobile Dog Grooming
      </h1>
      <div className="hidden sm:block text-xl">
        Door step grooming, where quality meets convenience.
      </div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" mb-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 sm:hidden">
        {isHovered ? '(562)280-3755' : 'Call Now'}
      </button>
      <img className="my-2 w-[80%] sm:w-full" src="BeachsideBubblesPic.png" />
    </div>
  );
}
