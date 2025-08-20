import { useState } from 'react';

export function Services() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#FFF5ED] flex flex-col items-center pb-4">
      <p
        className="font-bold text-4xl pb-8"
        style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
        The Bubble Menu:
      </p>
      <div className="w-[50%] pb-8 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
        <div className="flex flex-col items-center pb-4 mt-4 ">
          <img className="mb-4 rounded-full" src="Service-EarClean.png" />
          <div
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
            className="text-xl">
            Ear Cleaning
          </div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-TeethBrush.png" />
          <div
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
            className="text-xl">
            Teeth Brushing
          </div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-NailTrim.png" />
          <div
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
            className="text-xl">
            Nail Trimming/Grinding
          </div>
        </div>
        <div className="flex flex-col items-center pb-4 mt-4">
          <img className="mb-4 rounded-full" src="Service-AnalExpress.png" />
          <div
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
            className="text-xl">
            Anal Gland Expressing
          </div>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
        className=" mb-2 text-xl border border-[#000000] sm:bg-[#DDEEFF] text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
        {isHovered ? '(562)280-3755' : 'Call Now'}
      </button>
    </div>
  );
}
