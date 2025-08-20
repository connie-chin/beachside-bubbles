// import { FaStar } from 'react-icons/fa';

// export function Reviews() {
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     stars.push(<FaStar key={i} />);
//   }

//   return (
//     <div className="bg-[#EAD6BC] flex flex-col items-center pb-4">
//       <h1 className="my-2 font-bold">Reviews</h1>
//       <div className='sm:grid sm:grid-cols-3'>
//       <div className="bg-white w-[60%] p-4 flex flex-col items-center mb-6">
//         <img className="w-[40%]" src="ReviewTest1.png" />
//         <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
//         <div>
//           Affordable grooming, very professional, by far the best groomers I've
//           had. Her work is exceptional. She goes directly to your home or
//           business. Thank you Beachside Bubbles
//         </div>
//       </div>
//       <div className="bg-white w-[60%] p-4 flex flex-col items-center mb-6">
//         <img className="w-[40%]" src="ReviewTest2.png" />
//         <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
//         Great service! Booked within two days for a last minute opening which
//         was super convenient. Valerie was super patient and communicative. Our
//         pup can be a handful and we appreciate the care and attention. Will
//         definitely be using Beachside Bubbles again.{' '}
//       </div>
//       <div className="bg-white w-[60%] p-4 flex flex-col items-center mb-6">
//         <img className="w-[40%]" src="ReviewTest3.png" />
//         <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
//         <div>
//           Valerie is the calm, sweet, efficient, and kind groomer personality we
//           all aspire to find. Fantastic experience!
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export function Reviews() {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} />);
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#FFF5ED] flex flex-col items-center pb-4">
      <h1
        className="my-4 font-bold text-4xl pb-8 pt-8"
        style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
        Help from{' '}
        <span
          style={{
            color: 'red',
            textShadow: `-1px -1px 0 black,
                  1px -1px 0 black,
                 -1px  1px 0 black,
                  1px  1px 0 black`,
          }}>
          Yelp!
        </span>
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-4 sm:px-12 pb-8">
        {/* Review Card 1 */}
        <div className="bg-[#DDEEFF] border border-black rounded-xl p-4 w-[80%] sm:w-full mx-auto flex flex-col items-center">
          <img className="w-[40%]" src="ReviewTest1.png" alt="Reviewer 1" />
          <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
          <p
            className="text-center"
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
            Affordable grooming, very professional, by far the best groomers
            I've had. Her work is exceptional. She goes directly to your home or
            business. Thank you Beachside Bubbles.
          </p>
        </div>

        {/* Review Card 2 */}
        <div className="bg-[#DDEEFF] border border-black rounded-xl w-[80%] sm:w-full mx-auto p-4 flex flex-col items-center">
          <img className="w-[40%]" src="ReviewTest2.png" alt="Reviewer 2" />
          <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
          <p
            className="text-center"
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
            Great service! Booked within two days for a last minute opening
            which was super convenient. Valerie was super patient and
            communicative. Our pup can be a handful and we appreciate the care
            and attention. Will definitely be using Beachside Bubbles again.
          </p>
        </div>

        {/* Review Card 3 */}
        <div className="bg-[#DDEEFF] border border-black rounded-xl  w-[80%] sm:w-full mx-auto p-4 flex flex-col items-center">
          <img className="w-[40%]" src="ReviewTest3.png" alt="Reviewer 3" />
          <div className="flex text-yellow-500 text-3xl my-2">{stars}</div>
          <p
            className="text-center"
            style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
            Valerie is the calm, sweet, efficient, and kind groomer personality
            we all aspire to find. Fantastic experience!
          </p>
        </div>
      </div>
      <div className="sm:flex sm:justify-center sm:mt-6 pb-8">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}
          className="hidden text-xl border border-[#000000] sm:block sm:mb-2 sm:bg-[#DDEEFF] sm:text-black sm:font-semibold sm:px-6 sm:py-2 sm:rounded-lg sm:shadow-md sm:hover:bg-[#DDEEFF] sm:hover:shadow-lg sm:transition sm:duration-300">
          {isHovered ? '(562)280-3755' : 'Call Now'}
        </button>
      </div>
    </div>
  );
}
