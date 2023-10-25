import React from 'react'
import Header from './Shared/Header'
import Image from 'next/image'

function Hero() {
  return (
    <>
      
        <Header />
        <div className='grid grid-cols-6'>
          <div className='col-span-3 ml-20 extra:mt-32 lap:mt-24 text-white'>
            <div className='extra:text-[45px] lap:text-[40px] mb-4 font-bold'>
              Digital currency leads at market in the right amount.
            </div>
            <div className='text-3xl mb-6 opacity-50'>
              Vestibulum faucibus eget erat eget pretium.
              <br /> Donec commodo convallis suscipit orci.
            </div>
            <div className='flex'>
              <button className='hover:bg-helper2 rounded-md border w-[12rem] p-2 mr-5'>GET STARTED</button>
              <button className='hover:bg-helper2 rounded-md border w-[12rem] p-2 mr-5'>VIEW MARKET</button>
            </div>
          </div>
          <div className='col-span-3 extra:h-[35rem] extra:w-[52rem] lap:w-[40rem] lap:ml-10 relative'>
            <Image
              src='/img/Banner1.png'
              objectFit='contain'
              layout='fill'
              className='w-fit h-fit'
              alt='heroimg'
            />
          </div>
          

        </div>
        <div className='flex justify-between mx-32 extra:mt-10 lap:mt-20'>
          <div className=''>
            <div className='hover:text-helper text-white text-3xl font-semibold'>
              Business Solution
            </div>
            <div className='text-white mt-2'>
              Interdum et malesuada ac ante…
            </div>
          </div>
            <div className='bg-white h-20 opacity-50 w-[1px]'></div>
          <div className="">
            <div className='hover:text-helper text-white text-3xl font-semibold'>
              Free project quote
            </div>
            <div className='text-white mt-2'>
              Interdum et malesuada ac ante…
            </div>
          </div>
          <div className='bg-white h-20 opacity-50 w-[1px]'></div>
          <div className="">
            <div className='hover:text-helper text-white text-3xl font-semibold'>
            Nulla lobortis nunc
            </div>
            <div className='text-white mt-2'>
              Interdum et malesuada ac ante…
            </div>
          </div>

        </div>
    </>
  )
}

export default Hero
