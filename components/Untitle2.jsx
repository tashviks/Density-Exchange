import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function Untitle2() {
  const data=[
    {
      id:'1',
      img:'/img/Screen.png'
    },
    {
      id:'2',
      img:'/img/Screen.png'
    },
    {
      id:'3',
      img:'/img/Screen.png'
    },
    {
      id:'4',
      img:'/img/Screen.png'
    }, 
    {
      id:'5',
      img:'/img/Screen.png'
    },
    {
      id:'6',
      img:'/img/Screen.png'
    },
  ]
  const [actind, setActind] = useState(0);
  return (
    <>

      <div className="bg-[url(/img/Group644.png)] bg-cover bg-no-repeat w-full h-[50rem] mb-96">
    <div className="container m-auto">
        <div className='text-center text-white pt-16'>
          <div className='mb-6 w-10 h-10 relative mx-auto'>
            <Image
              src='/img/Fill3.png'
              objectFit='contain'
              layout='fill'
              className='w-fit h-fit'
              alt='img'
            />
          </div>
          <div className='text-4xl font-bold mb-8'>
            Interdum et malesuada fames
          </div>
          <div className='text-2xl mr-16 mb-10'>
            Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel  est, at euismod libero.
          </div>
          <div className='flex justify-center gap-1'>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                        <div className={`${actind === index ? 'bg-[#9C27B0] h-5 w-5' : 'bg-transparent border border-[#9C27B0] h-5 w-5'} rounded-full`}></div>
                        </div>
                    )

                }
                )}
            </div>
          <div className='mx-auto'>

            <Swiper
              cssMode={true}
              // pagination={true}
              navigation={false}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              breakpoints={
                {
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 90,
                  }


                }
              }
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              onSlideChange={(e) => setActind(e.activeIndex)}
            // onSwiper={(swiper) => console.log(swiper)}
            >

              {data.map((item, index) => {
                return (
                  <div key={index}>
                      <SwiperSlide>
                      
                        <div className='rounded-full relative h-[50rem] w-[58rem] mx-auto'>
                          <Image
                            src={item.img}
                            className='w-fit h-fit'
                            objectFit='contain'
                            layout='fill'
                            alt='img'
                          />
                        </div>
                      
                      </SwiperSlide>
                  </div>

                )

              })}
              

              

            </Swiper>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Untitle2

