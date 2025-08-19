import { useState } from 'react';
// import Square from '@/Svg';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#FFF5ED] flex flex-col items-center justify-evenly p-2 pt-[100px] h-fit sm:grid sm:grid-cols-2">
      <h1 className="text-black my-2 font-bold sm:hidden">
        Mobile Dog Grooming
      </h1>

      <div className="hidden sm:block text-center">
        <h1
          className="text-7xl pb-8"
          style={{ fontFamily: "'Cookie', cursive" }}>
          Beachside Bubbles
        </h1>
        <h2
          className="text-4xl pb-8"
          style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
          Door step grooming, where quality meets convenience.
        </h2>
        <h3
          className="text-xl pb-12 font-semibold"
          style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
          Serving Long Beach, CA and the surrounding areas
        </h3>
        <div>
          <button
            className="text-xl w-28 border-2 bg-[#DDEEFF] font-semibold rounded-md border-[#000000] block mx-auto"
            style={{ fontFamily: "'Original Surfer', cursive" }}>
            Call Now
          </button>
        </div>
      </div>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" mb-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 sm:hidden">
        {isHovered ? '(562)280-3755' : 'Call Now'}
      </button>
      <img
        className="border border-[#000000] my-2 w-[80%] rounded-md sm:w-full"
        src="BeachsideBubblesPic.png"
      />
    </div>
  );
}
