import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function News() {
    const data = [
        {
            category:'Event',
            img: '/img/Rectangle.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
        {
            category:'News',
            img: '/img/Rectangle1.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
        {
            category:'Event',
            img: '/img/Rectangle.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
        {
            category:'News',
            img: '/img/Rectangle1.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
        {
            category:'Event',
            img: '/img/Rectangle.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
        {
            category:'News',
            img: '/img/Rectangle1.png',
            description:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
            link:'',
        },
    ]
    const [actind, setActind] = useState(0);
    return (
        <>
            <div>
                <div className='text-white pt-16 my-40 mx-20'>
                    <div className=''>

                        <Swiper
                            cssMode={true}
                            // pagination={true}
                            navigation={false}
                            mousewheel={true}
                            keyboard={true}
                            autoplay={{
                                delay: 3500,
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
                                            <div className='flex'>
                                                <div className='relative h-[9rem] w-[18em]'>
                                                    <Image
                                                        src={item.img}
                                                        className='h-fit w-fit rounded-md'
                                                        layout='fill'
                                                        objectFit='contain'
                                                        alt="photo"
                                                    />
                                                </div>
                                                <div className='text-xl mx-5'>
                                                    <div className='mb-2'>
                                                        {item.category.toUpperCase()}
                                                    </div>
                                                    <div className='text mb-3'>
                                                        {item.description}
                                                    </div>
                                                    <Link href={item.link}><divn className='text-[#E1BEE7] cursor-pointer hover:text-white'>
                                                        Read More
                                                    </divn></Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>

                                )

                            })}
                            <SwiperSlide></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='flex justify-center gap-3 mt-10 mb-20'>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={`${actind === index ? 'border h-3 w-10 bg-white' : 'bg-transparent border h-3 w-5'} rounded-full`}></div>
                                </div>
                            )

                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News
