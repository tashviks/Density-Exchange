import Image from "next/image"
type Props = {}
const Features = (props: Props) => {
  return (
    <div id='feature' className="bg-black gap-[2rem] flex flex-col md:flex-row  md:justify-center p-[2rem] md:p-[4rem] mt-[5rem]">
      <div className="md:w-[40vw] w-full h-[60vh] md:h-[90vh] relative overflow-hidden p-[2rem] md:p-[3rem] bg-gray rounded-3xl">
        <p data-aos="fade-right" className="md:text-[3vw] text-[5.5vw] leading-[1.2] font-medium text-white">
         Maximize Your Trading Potential with upto 125x Leverage.
        </p>
        <p data-aos="fade-right" className="md:text-[1vw] text-[3vw] leading-[1.5] mt-[0.7rem] opacity-50 text-white">
        </p>
        <Image data-aos="fade-left" src='/assets/add-res.png' width={700} height={700} className="absolute md:h-[90%] w-auto bottom-[-25%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-2xl right-[-10%] md:right-[0%]" alt="Density Logo" />
      </div>
      <Image data-aos="zoom-out" src="/assets/mobile-ss.png" width={500} height={500} className="md:h-[90vh] rounded-3xl md:w-[30vw]" alt="Density Logo" />
      <div className="md:w-[25vw] w-full md:h-[90vh] h-[55vh] relative overflow-hidden md:p-[3rem] p-[2rem] bg-gray rounded-3xl">
        <p data-aos="fade-left" className="md:text-[3vw] text-[5.5vw] leading-[1.2] font-medium text-white">
        Safety First,Security Always.
        </p>
        <Image data-aos="fade-right" src='/assets/qr.png' width={700} height={700} className="absolute md:h-[60%] h-[70%] w-auto bottom-[5%]  md:bottom-[2%] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-2xl right-[30%]  md:right-[20%]" alt="LazyWeb Logo" />
      </div>
    </div>
  )
}

export default Features
