import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <>
      <div className='mx-24 grid grid-cols-2'>
        <div className='col-span-1'>
          <div className="grid grid-cols-2">
            <div className='col-span-1 extra:ml-32 mt-40 z-10'>
              <div className='bg-[#424242] h-56 w-60 rounded-3xl mb-10 mt-2 text-white'>
                <div className='w-20 pt-5 pl-3 fill-helper2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-fit"
                    viewBox="0 0 512 512"
                  >
                    <path d="M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15 98.15 0 00-25.4-10 62.22 62.22 0 0016.3-11 56.37 56.37 0 0015.6-23.3 77.11 77.11 0 003.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 016.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3 19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4zM224 150h32v74h-32zm0 212v-90h32v90zm72-208.1c6 2.5 9.9 7.5 13.8 12.7 4.3 5.7 6.5 13.3 6.5 21.4 0 7.8-2.9 14.5-7.5 20.5-3.8 4.9-6.8 8.3-12.8 11.1zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56.06 56.06 0 01-6.7 1.9v-82.8a40.74 40.74 0 0111.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.82 43.82 0 018 24.7c-.03 10.9-2.83 19.2-10.33 25.8z"></path>
                  </svg>
                </div>
                <div className='pl-3 pt-2 text-4xl font-extrabold'>+100</div>
                <div className='pl-3 pt-2 text-2xl'>Supported Coins</div>
              </div>
              <div className='bg-[#424242] h-56 w-60 rounded-3xl text-white'>
                <div className='w-20 pt-5 pl-3 stroke-helper2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                    ></path>
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                    ></path>
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                    ></path>
                  </svg>
                </div>
                <div className='pl-3 pt-2  text-4xl font-extrabold'>+200K</div>
                <div className='pl-3 pt-2 text-2xl'>Registered<br />Users</div>
              </div>
            </div>
            <div className='col-span-1 extra:ml-10 mt-5 z-10'>
              <div className='bg-[#424242] h-56 w-60 rounded-3xl mb-10 mt-2 text-white'>
                <div className='w-20 pt-5 pl-3 stroke-helper2 fill-helper2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <rect
                      width="416"
                      height="288"
                      x="48"
                      y="144"
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      rx="48"
                      ry="48"
                    ></rect>
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                    ></path>
                    <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                  </svg>
                </div>
                <div className='pl-3 pt-2 pb-3 text-4xl font-extrabold'>+20M</div>
                <div className='pl-3 pt-2 text-2xl'>Open Wallets</div>
              </div>
              <div className='bg-[#424242] h-56 w-60 rounded-3xl text-white'>
                <div className='w-20 pt-5 pl-3 stroke-helper2'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-fit"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                    ></path>
                  </svg>
                </div>
                <div className='pl-3 pt-2 pb-2 text-4xl font-extrabold'>+50M</div>
                <div className='pl-3 pt-2 text-2xl'>USD Invested</div>
              </div>
            </div>
          </div>
        </div>
        <div className='extra:ml-[28rem] lap:ml-[20rem] mt-[9rem] bg-[url(/img/Group62.png)] h-[45rem] w-[35rem] bg-center absolute bg-cover transform -translate-x-1/2'></div>
        <div className="col-span-1 text-white ml-20">
        <div className='mt-24 mb-6 w-10 h-10 relative'>
        <Image
              src='/img/Fill3.png'
              objectFit='contain'
              layout='fill'
              className='w-fit h-fit'
              alt='abt img'
            />
        </div>
        <div className='text-4xl font-bold mb-8'>
          Fusce placerat enim et odio
        </div>
        <div className='text-2xl mr-16 mb-10'>
          Sed imperdiet enim ligula, vitae viverra justo porta vel.
        </div>
        <div>
        <iframe className='rounded-2xl extra:w-[40rem] extra:h-[23rem] lap:h-[25rem] lap:w-[38rem]' src="https://www.youtube.com/embed/Dh1wnb0FHec" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>
      </div>
    </>
  )
}

export default About
