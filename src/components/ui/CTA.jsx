import React from "react"

function CTA() {
  return (
    <div className="mt-5 lg:mt-30">
        <div className="container">
           <div className="py-10 lg:py-16 px-5 lg:pl-24 lg:pr-33.5 rounded-[20px] bg-[#0E33C0] flex lg:items-center justify-between flex-col lg:flex-row items-start gap-5 lg:gap-0">
                <div className="flex flex-col gap-6">
                    <h5 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="text-2xl lg:text-[40px] tracking-[-0.8px] leading-[130%] text-white font-semibold">Start Your U.S. Visa <br /> Journey Today</h5>
                    <div className="flex items-center gap-5">
                        <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" className="flex items-center gap-2">
                            <img src="/images/check-white.svg" alt="White Check" />
                            <p className="text-sm text-white leading-[150%]">Free 14 day trial</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="flex items-center gap-2">
                            <img src="/images/check-white.svg" alt="White Check" />
                            <p className="text-sm text-white leading-[150%]">Cancel anytime</p>
                        </div>
                    </div>
                </div>
                <a data-aos="fade-up" data-aos-delay="250" data-aos-duration="500" href="#" className="w-[204px] h-[62px] bg-white flex items-center justify-center rounded-lg text-xl leading-[150%] tracking-[-0.4px] text-[#0E33C0]">Start Free Trial</a>
           </div>
        </div>
    </div>
  )
}

export default CTA