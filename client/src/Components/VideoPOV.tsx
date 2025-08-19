// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import pup from '../assets/pup.png';
import pup3 from '../assets/pup3.jpg';
import pup4 from '../assets/pup5.jpg';
import pup5 from '../assets/pup5.jpg';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export function VideoPOV() {
  return (
    <div
      className="bg-[#FFF5ED] font-bold text-4xl flex flex-col items-center pb-6"
      style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
      <div className="h-fit flex flex-col items-center">
        <div className="text-black my-4 font-bold pb-4 pt-4 text-4xl font-semibold">
          Puppy's POV:
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-[700px] h-auto">
          {[pup, pup3, pup4, pup5].map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full max-w-[450px] aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
