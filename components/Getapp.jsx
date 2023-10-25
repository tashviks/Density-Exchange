import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function GetApp() {
  return (
    <>
     <div className='extra:mx-[325px] lap:mx-[195px]'>
      <div className="bg-[url(/img/Group20.png)] p-10 bg-cover w-full bg-no-repeat h-[366px]">
        <div className='text-white text-4xl font-extrabold ml-64 mt-24 w-fit'>
            Get Mobile App Version
        <div className='flex gap-4 justify-center mt-10'>
            <div className='relative h-[60px] w-[200px] cursor-pointer'>
        <Link href="/link">
              <Image
                src='/img/as.png'
                objectFit='contain'
                layout='fill'
                className='w-fit h-fit'
                alt='get app'
              />
            </Link>
            </div>

            <div className='relative h-[60px] w-[200px] cursor-pointer'>
        <Link href="/link">
              <Image
                src='/img/ps.png'
                objectFit='contain'
                layout='fill'
                className='w-fit h-fit'
                alt='get app'
              />
            </Link>
            </div>
        </div>
        </div>
        </div>
     </div> 
    </>
  )
}

export default GetApp
