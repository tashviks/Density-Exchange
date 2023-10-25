import React from 'react'
import Image from 'next/image'
function Untitle1() {
    return (
        <>
            <div className='text-center text-white'>

                <div className='mt-10 mb-5 w-16 h-16 relative mx-auto'>
                    <Image
                        src='/img/Group64.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='img'
                    />
                </div>
                <div className='text-4xl font-bold mb-5'>
                    Fusce placerat enim et odio
                </div>
                <div className='text-[27px]'>
                    Quisque lacinia purus ut libero facilisis, at vulputate sem maximus.
                </div>
                <div className='mt-10 w-full h-96 relative mx-auto mb-40'>
                    <Image
                        src='/img/CryptoIncrementList.png'
                        objectFit='contain'
                        layout='fill'
                        className='w-fit h-fit'
                        alt='img'
                    />
                </div>
            </div>
        </>
    )
}

export default Untitle1
