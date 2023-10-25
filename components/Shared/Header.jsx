import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  const Navtool = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/#service" },
    { name: "Whitepaper", link: "/#about" },
    { name: "Certificate", link: "/portfolio" },
    { name: "M20 BSC Scan", link: "/#contact" },
  ]
  return (
    <>
        <div className='container m-auto'>
      <div className='grid grid-cols-8'>
        <div className='col-span-2 relative w-32 h-32 mx-20'>
          <Image
            src='/img/logo.png'
            objectFit='contain'
            layout='fill'
            className='w-fit h-fit'
            alt='header logo'
          />
        </div>
        <div className='col-span-5'>
          <ul className="flex mx-auto gap-20 pt-14">
            {Navtool.map((link) => (
              <li key={link.name} className="text-white hover:text-helper font-semibold text-xl">
                <Link href={link.link} className="">{link.name}</Link>
              </li>
            ))
            }
          </ul>

        </div>
        <div className='col-span-1 lap:mx-auto extra:mx-0'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-white w-16 pt-10 cursor-pointer hover:stroke-helper"
      viewBox="0 0 512 512"
    >
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      ></path>
    </svg>
        </div>
        </div>
      </div>
    </>
  )
}

export default Header
