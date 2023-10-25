import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/effect-flip";

// import required modules
import { Autoplay, Navigation,EffectFlip, Pagination, Mousewheel, Keyboard } from "swiper";

function Testimonial() {
    const data = [
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
        {
            img: '/img/Oval.png', feedback:'Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.'
        },
    ]
    return (
        <>


            <div className='text-center text-white pt-16'>
                <div className='mb-6 w-10 h-10 relative mx-auto'>
                    <Image
                        src='/img/Fill3.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='testimonial img'
                    />
                </div>
                <div className='text-4xl font-bold mb-8'>
                    What our members said?
                </div>
                <div className='text-2xl'>
                    Nam sollicitudin dignissim nunc, cursus ullamcorper.
                </div>

                <div className=''>
                    <div className="bg-[url(/img/tmonial.png)] h-[28rem] static w-[62rem] mx-auto bg-no-repeat">
                        <div className='flex justify-between'>
                            <div id='prev1' className='bg-helper2 stroke-white w-14 mt-48 rounded-xl h-14 p-1 -ml-6 cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12"
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
                            <Swiper
                                // effect={"flip"}
                                cssMode={true}
                                // pagination={true}
                                navigation={{
                                    prevEl: '#prev1',
                                    nextEl: '#next1'
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
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        }
                                        
                                        
                                    }
                                }
                                modules={[Autoplay,EffectFlip, Navigation, Pagination, Mousewheel, Keyboard]}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                            
                            {data.map((item, index) => {
                                    return (
                                        <div key={index}>

                                        <SwiperSlide>
                                        <div>
                                            <div className='relative h-28 w-28 mx-auto mt-9'>
                                            <Image
                                            src={item.img}
                                            className='h-fit w-fit rounded-full'
                                            layout='fill'
                                            objectFit='contain'
                                            alt="photo"
                                            />
                                            </div>
                                            <div className='text-xl pt-12 mx-5'>
                                                {item.feedback}
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        </div>
                                        
                                        )
                                        
                                })}
                            </Swiper>

                            <div id='next1' className='bg-helper2 stroke-white mt-48 w-14 h-14 rounded-xl p-1 cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12"
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
                </div>
            </div>
        </>
    )
}

export default Testimonial
