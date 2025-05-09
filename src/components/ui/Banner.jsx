import React from "react"
import { Link } from "react-router-dom"
function Banner() {
  return (
    <div className="relative">
        <div className="mt-25 lg:mt-[calc(113px+82px)] relative z-100 px-5 lg:px-0">
         <div className="container flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-0">
          <div className="flex flex-col items-start flex-1">
            <div className="lg:max-w-[502px] max-w-full">
              <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="text-3xl lg:text-5xl leading-[130%] tracking-[-2%] text-[#232857] mb-2 font-black">Your AI-Powered U.S. Immigration Assistant</h1>  
              <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="text-lg leading-[130%] tracking-[-2%] text-[#484E86]">Find the right visa, connect with trusted lawyers, and track your case—all in one seamless platform.</p>
              <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" className="items-center gap-2.5 xl:flex hidden mt-4">
                <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">Get Started</Link>
                <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-white border border-[rgba(72,78,134,0.2)] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-[#232857] hover:border-[#232857] hover:text-[#232857]">Schedule a call</Link>
            </div>
            </div>
          </div>
          <div className="w-full h-[652px] flex-1 shadow-[0px_30.5px_40.37px_18.84px_rgba(62,82,198,0.07)] rounded-[10px] relative z-50">
            <img src="/images/migrately-hero.gif" alt="Chat Gif" className="z-50 relative w-full h-full object-contain" />
            <div className="absolute bottom-0 right-0 sm:right-0 bg-white w-44 h-16 sm:w-52 sm:h-20 md:w-52 md:h-32 lg:w-52 lg:h-20 z-100"></div>
          </div>
         </div>
        </div>
        <div className="absolute left-0 top-[30%] w-full h-full lg:w-[700px] lg:h-[700px] z-1 lg:z-50">
          <img src="/images/glow-1.svg" className="w-full h-full object-cover" alt="Glow" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full lg:w-[600px] lg:h-[600px] z-1 lg:z-50">
          <img src="/images/glow-2.svg" className="w-full h-full object-cover" alt="Glow" />
        </div>
    </div>
  )
}

export default Banner