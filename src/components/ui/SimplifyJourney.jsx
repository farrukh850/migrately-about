import React from "react"
import { Link } from "react-router-dom"
import CommonHeading from "../common/CommonHeading"
function SimplifyJourney() {
  return (
    <div className="pb-10 pt-25 lg:pb-[146px] relative">
        <div className="container relative z-50">
            <div className="grid grid-cols-12 items-stretch min-h-[497px] h-full mt-10.5 shadow-[0px_30.503px_40.371px_18.84px_rgba(62,82,198,0.07)] rounded-xl bg-white">
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6 flex flex-col p-5 lg:py-22 lg:pl-22 lg:pr-15">
                    <h2 className="text-2xl lg:text-[32px] text-[#232857] leading-[140%] tracking-[-0.64px] font-bold">Simplify Your U.S. Immigration Journey</h2>
                    <p className="text-base text-[#484E86] leading-[130%] tracking-[-0.32px] mt-2">Navigating U.S. immigration doesn’t have to be overwhelming. Migrately provides AI-driven answers, document collection, and lawyer matching to make the process simple and transparent for extraordinary individuals applying for O1, EB1a, and EB2</p>
                    <div className="flex flex-col gap-2.5 my-6.5">
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" className="w-3.5" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px]">Instantly check which U.S. visa fits your situation.</p>
                        </div>
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" className="w-3.5" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px]">Get AI‑powered, step‑by‑step guidance.</p>
                        </div>
                        <div className="flex gap-1.5 items-centers py-1.5 px-4 bg-[rgba(62,82,198,0.05)] rounded-sm">
                            <img src="/images/check.svg" className="w-3.5" alt="Check Icon" />
                            <p className="text-sm text-black leading-[130%] tracking-[-0.49px]">Avoid common mistakes and speed up your application process.</p>
                        </div>
                    </div>
                    <div className="">
                        <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">Try Now</Link>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="col-span-12 md:col-span-6">
                    <div className="relative h-full w-full object-contain">
                        <img src="/images/simplify-svg.svg" className="w-full h-full object-contain" alt="Immigration Image" />
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <img src="/images/grid-lines.svg" className="w-full h-full object-cover" alt="Grid Lines" />
        </div>
    </div>
  )
}

export default SimplifyJourney