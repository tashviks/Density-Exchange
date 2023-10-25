import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const data = [
    {
        img: '/img/Group19.png'
    },
    {
        img: '/img/Group192.png'
    },
    {
        img: '/img/Group19.png'
    },
    {
        img: '/img/Group192.png'
    },
    {
        img: '/img/Group19.png'
    },
    {
        img: '/img/Group192.png'
    },
]
function Deals() {
    return (
        <>
            <div className='text-white text-center'>
                <div className='mb-6 w-10 h-10 relative mx-auto'>
                    <Image
                        src='/img/Fill3.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='deal'
                    />
                </div>
                <div className='text-4xl font-bold mb-8'>
                    Top Coins Today
                </div>
                <div className='text-2xl mr-16 mb-10'>
                    Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel  est, at euismod libero.
                </div>
            </div>
            <div className='grid grid-cols-3 mb-4'>
                <div className='col-span-1 flex'>
                    <div id='prev0' className='my-auto bg-helper2 stroke-white rounded-r-xl p-1 cursor-pointer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-14"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
                                d="M328 112L184 256l144 144"
                            ></path>
                        </svg>
                    </div>
                    <div className='w-[35rem] h-[25rem] relative'>
                        <Image
                            src='/img/Feature3.png'
                            objectFit='contain'
                            layout='fill'
                            className='w-fit h-fit'
                            alt='deal'
                        />
                    </div>
                </div>
                <div className='col-span-2 flex'>
                    <Swiper
                        cssMode={true}
                        // pagination={true}
                        navigation={{
                            prevEl: '#prev0',
                            nextEl: '#next0'
                        }}
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
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1536: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }


                            }
                        }
                        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className='flex justify-between gap-20'>
                            {data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <SwiperSlide>

                                            <div className='relative h-[18rem] w-[23rem] my-12'>
                                                <Image
                                                    src={item.img}
                                                    height={100}
                                                    width={100}
                                                    className='h-fit w-fit'
                                                    layout='fill'
                                                    alt='deal'
                                                />

                                            </div>
                                        </SwiperSlide>
                                    </div>
                                )
                            })}

                        </div>
                    </Swiper>
                    <div id='next0' className='my-auto bg-helper2 stroke-white rounded-l-xl p-1 cursor-pointer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-14"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
                                d="M184 112l144 144-144 144"
                            ></path>
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Deals
