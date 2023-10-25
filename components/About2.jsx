import React from 'react'
import Image from 'next/image'
function About_2() {
    return (
        <>
            <div className='mx-10 mt-32 grid grid-cols-2 text-white'>
                <div className='col-span-1'>
                    <div className='mt-24 mb-5 w-16 h-16 relative'>
                        <Image
                            src='/img/Group65.png'
                            objectFit='contain'
                            layout='fill'
                            className='w-fit h-fit'
                            alt='about img'
                        />
                    </div>
                    <div className='text-4xl font-bold mb-5'>
                        Nam sollicitudin dignissim nunc
                    </div>
                    <div className='text-[27px] mr-32'>
                        Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est.
                    </div>
                </div>
                <div className="col-span-1 relative h-[28rem] w-[35rem] mx-auto">
                    <Image
                        src='/img/Feature1.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='about img'
                    />
                </div>
                <div className="col-span-1 relative h-[28rem] w-[35rem] mx-auto">
                    <Image
                        src='/img/Feature2.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='about img'
                    />
                </div>
                <div className='col-span-1'>
                    <div className='mt-24 mb-5 w-16 h-16 relative'>
                        <Image
                            src='/img/Group64.png'
                            objectFit='contain'
                            layout='fill'
                            alt='about img'
                            className='w-fit h-fit'
                        />
                    </div>
                    <div className='text-4xl font-bold mb-5'>
                        Fusce placerat enim et odio
                    </div>
                    <div className='text-[27px] mr-32'>
                        Quisque lacinia purus ut libero facilisis, at vulputate sem maximus.
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_2
