import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay, Navigation, Pagination } from 'swiper/modules';



const Slider = () => {
  return (
    <div>
      <Swiper  pagination={{
          dynamicBullets: true,
        }} navigation={true} modules={[Navigation, Pagination, Autoplay]} 
        autoplay= {
          {
            delay: 3500
          }
        } className="mySwiper h-screen">
        <SwiperSlide>
          <div className='bg-[url("https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blog1arb4VjtxhzvyUzrt9bZzuI-hlEst52F.jpg")] bg-cover bg-no-repeat w-full flex justify-center items-center h-full'>
            <div className='flex justify-center items-center bg-gradient-to-b from-[#000000f3] to-[#00000000] h-full bg-cover bg-no-repeat w-full text-white'>

              <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-semibold'>Explore <span className='text-red-500'>Cox's Bazar.</span> World's <span className='text-green-400'><Typewriter words={[" largest sea beach", "longest sandy beach"]} loop={true} cursor={true}/></span></h1>
              

            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className='bg-[url("https://a.cdn-hotels.com/gdcs/production115/d361/49459e8d-eb1e-46a7-8a3b-269f54958346.jpg")] bg-cover bg-no-repeat w-full flex justify-center items-center h-full'>
              <div className='flex justify-center items-center bg-gradient-to-b from-[#000000f3] to-[#00000000] h-full bg-cover bg-no-repeat w-full text-white'>

                <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-semibold'><span className='text-red-500'>Phi Phi Islands.</span>These beautiful islands have plenty for you to <span className='text-green-400'><Typewriter words={["photograph.","discover.","explore."]} loop={true} cursor={true}/></span></h1>
              </div>
              
            </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className='bg-[url("https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg")] bg-cover bg-no-repeat w-full flex justify-center items-center h-full'>
            <div className='flex justify-center items-center bg-gradient-to-b from-[#000000f3] to-[#00000000] h-full bg-cover bg-no-repeat w-full text-white'>

              <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-semibold'>Explore <span className='text-red-500'>Bali. </span>A  <span className='text-green-400'><Typewriter words={["Tropical Paradise."]} loop={true} cursor={true}/></span></h1>
            </div>
            
          </div>

        </SwiperSlide>
        <SwiperSlide>
        
          <div className='bg-[url("https://vietnam.travel/sites/default/files/inline-images/11125-Qu%E1%BA%A3ng%20Nam-huybank%40gmail.com-hoi%20an%20ve%20dem%20.jpg")] bg-cover bg-no-repeat w-full flex justify-center items-center h-full'>
            <div className='flex justify-center items-center bg-gradient-to-b from-[#000000f3] to-[#00000000] h-full bg-cover bg-no-repeat w-full text-white'>

              <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-semibold'><span className='text-red-500'>Hoi An Ancient Town. </span>Explore <span className='text-green-400'><Typewriter words={["history.", "traditional architecture.", "crafts."]} loop={true} cursor={true}/></span></h1>
            </div>
            
          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider